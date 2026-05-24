import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      {/* Decorative floating elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
          >
            <span className="text-primary font-medium tracking-wide text-sm">HELLO, I AM SAIZAN SHAIKH</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary glow-text-primary">Design</span> <br className="hidden md:block"/>
            & Web Development
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-400 mx-auto mb-10 leading-relaxed">
            I am a professional <span className="text-primary font-semibold">frontend developer</span> and <span className="text-secondary font-semibold">responsive website developer</span>. I design highly aesthetic landing pages, custom templates, and responsive business websites that stand out.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="projects"
              href="#projects"
              smooth={true}
              duration={500}
              className="cursor-pointer group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center"
              aria-label="View Saizan's portfolio projects"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
            
            <Link
              to="contact"
              href="#contact"
              smooth={true}
              duration={500}
              className="cursor-pointer px-8 py-4 bg-transparent border-2 border-slate-700 text-white rounded-full font-bold hover:border-primary hover:text-primary transition-all duration-300 flex items-center group"
              aria-label="Contact Saizan for freelance work"
            >
              Let's Talk
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
