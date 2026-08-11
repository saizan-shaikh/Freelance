import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { SiNetlify } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Pricing', to: 'pricing' },
  { name: 'Projects', to: 'projects' },
  { name: 'What You Get', to: 'testimonials' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 relative z-50"
          >
            <Link to="home" href="#home" smooth={true} duration={500} className="cursor-pointer flex items-center gap-3 group" aria-label="Saizan Freelancer Home">
              <img src="/favicon.svg" alt="Saizan Freelancer Logo" className="w-8 h-8 rounded-lg group-hover:scale-105 transition-transform duration-300 shadow-md" />
              <span className="text-2xl font-black text-white tracking-wider flex items-center">
                SAIZAN
                <span className="text-primary ml-0.5 text-3xl leading-none">.</span>
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    href={`#${item.to}`}
                    smooth={true}
                    duration={500}
                    className="relative group text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden relative z-50">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-label="Open main menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden h-screen"
            />
            
            {/* Sliding Drawer */}
            <motion.div 
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-screen w-[280px] bg-slate-900 border-l border-white/5 shadow-2xl z-50 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-end p-4 h-20 border-b border-white/5">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 mr-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
                  aria-label="Close main menu"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    href={`#${item.to}`}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-300 hover:text-primary hover:bg-white/5 block px-4 py-3 rounded-xl text-lg font-medium cursor-pointer transition-all"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="mt-6 pt-6 border-t border-white/10 flex justify-center gap-6">
                  <a 
                    href="https://www.linkedin.com/in/shaikh-saizan-274aba3a0/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] transition-all group"
                    aria-label="View LinkedIn Profile"
                  >
                    <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  </a>
                  <a 
                    href="https://github.com/saizan-shaikh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all group"
                    aria-label="View GitHub Profile"
                  >
                    <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  </a>
                  <a 
                    href="https://app.netlify.com/teams/adnanshaikh1508/projects" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-300 hover:text-[#00C7B7] hover:border-[#00C7B7]/50 hover:shadow-[0_0_15px_rgba(0,199,183,0.3)] transition-all group"
                    aria-label="View Netlify Projects"
                  >
                    <SiNetlify className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}