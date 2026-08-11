import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Clean, high-impact SVG logo mark for SAIZAN.
// Features a rounded squircle badge with cyan/fuchsia gradient border,
// a bold geometric 'S' monogram, and the signature cyan brand dot.
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <!-- Dark contrast background gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040814" />
      <stop offset="100%" stop-color="#0e172a" />
    </linearGradient>
    
    <!-- Neon cyan to fuchsia brand border -->
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00d8ff" />
      <stop offset="50%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#d946ef" />
    </linearGradient>
    
    <!-- Ultra-crisp monogram gradient -->
    <linearGradient id="sGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="50%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>

    <!-- Cyan brand dot gradient -->
    <linearGradient id="dotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00d8ff" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
  </defs>

  <!-- Squircle Base for perfect legibility on both dark and light browser tabs -->
  <rect x="20" y="20" width="472" height="472" rx="112" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="24" />

  <!-- Code bracket mark Left '<' -->
  <path d="M 120 204 L 76 256 L 120 308" fill="none" stroke="#d946ef" stroke-width="28" stroke-linecap="round" stroke-linejoin="round" />

  <!-- Bold Geometric 'S' Monogram -->
  <path d="
    M 342 192
    C 342 148, 304 128, 256 128
    C 196 128, 156 154, 156 200
    C 156 244, 198 260, 252 272
    C 310 284, 356 300, 356 348
    C 356 398, 312 420, 256 420
    C 192 420, 144 394, 140 348
  " fill="none" stroke="url(#sGrad)" stroke-width="64" stroke-linecap="round" stroke-linejoin="round" />

  <!-- Code bracket mark Right '>' -->
  <path d="M 392 204 L 436 256 L 392 308" fill="none" stroke="#00d8ff" stroke-width="28" stroke-linecap="round" stroke-linejoin="round" />

  <!-- Signature Accent Dot matching SAIZAN. -->
  <circle cx="384" cy="128" r="34" fill="url(#dotGrad)" stroke="#ffffff" stroke-width="8" />
</svg>`;

// Utility to create binary ICO containing 16x16 and 32x32 PNG images
function createIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let dataOffset = headerSize + (numImages * dirEntrySize);

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  const imageBuffers = [];

  for (const item of pngBuffers) {
    const { width, height, buffer } = item;
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Image size
    entry.writeUInt32LE(dataOffset, 12); // Offset

    dirEntries.push(entry);
    imageBuffers.push(buffer);
    dataOffset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

async function generateFavicons() {
  const publicDir = path.resolve('public');
  
  // 1. Save SVG
  const svgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(svgPath, svgContent);
  console.log('Saved favicon.svg');

  const svgBuffer = Buffer.from(svgContent);

  // 2. Generate PNG sizes
  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png16);
  console.log('Generated favicon-16x16.png');

  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png32);
  console.log('Generated favicon-32x32.png');

  const png180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180);
  console.log('Generated apple-touch-icon.png');

  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), png192);
  console.log('Generated android-chrome-192x192.png');

  const png512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), png512);
  console.log('Generated android-chrome-512x512.png');

  // Also update Logo.png for OG meta tag consistency
  fs.writeFileSync(path.join(publicDir, 'Logo.png'), png512);
  console.log('Updated Logo.png');

  // 3. Generate binary favicon.ico with 16x16 & 32x32 frames
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 }
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated multi-resolution favicon.ico');

  console.log('All favicons successfully generated!');
}

generateFavicons().catch(console.error);
