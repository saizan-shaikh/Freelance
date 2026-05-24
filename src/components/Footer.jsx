import { Link } from 'react-scroll';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Link to="home" href="#home" smooth={true} duration={500} className="cursor-pointer" aria-label="Back to top of Saizan Freelancer website">
            <span className="text-xl font-black text-white tracking-wider flex items-center">
              SAIZAN
              <span className="text-primary ml-1 text-2xl leading-none">.</span>
            </span>
          </Link>
        </div>
        
        <p className="text-slate-500 text-sm flex items-center">
          &copy; {new Date().getFullYear()} Saizan Shaikh. Built with <Heart className="w-4 h-4 text-secondary mx-1" fill="currentColor" /> and React.
        </p>
      </div>
    </footer>
  );
}