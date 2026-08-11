import { Link } from 'react-scroll';
import { ArrowUp, Mail, Phone, ChevronRight, Heart, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Pricing', to: 'pricing' },
  { name: 'Projects', to: 'projects' },
  { name: 'What You Get', to: 'testimonials' },
  { name: 'Contact', to: 'contact' },
];

const serviceLinks = [
  { name: 'UI & Template Design', to: 'services' },
  { name: 'Portfolio Website Creation', to: 'services' },
  { name: 'Business Website Development', to: 'services' },
  { name: 'Custom Frontend Development', to: 'services' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10 relative z-10 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Brand Logo & Status */}
          <div className="space-y-5">
            <Link 
              to="home" 
              href="#home" 
              smooth={true} 
              duration={500} 
              className="inline-flex items-center gap-3 group cursor-pointer"
              aria-label="Saizan Freelancer Home"
            >
              <img 
                src="/favicon.svg" 
                alt="Saizan Freelancer Brand Logo" 
                className="w-10 h-10 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-md shadow-primary/20" 
              />
              <span className="text-2xl md:text-3xl font-black text-white tracking-wider flex items-center">
                SAIZAN
                <span className="text-primary ml-0.5 text-3xl leading-none">.</span>
              </span>
            </Link>

            {/* Freelance Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for Freelance Projects
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Professional freelance web developer &amp; UI designer crafting high-performance, responsive websites, custom landing pages, and modern frontend web applications.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/in/shaikh-saizan-274aba3a0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-all duration-300"
                aria-label="Saizan Shaikh LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a 
                href="https://github.com/saizan-shaikh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                aria-label="Saizan Shaikh GitHub Profile"
              >
                <FaGithub className="w-4 h-4" aria-hidden="true" />
              </a>
              <a 
                href="https://app.netlify.com/teams/adnanshaikh1508/projects" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00C7B7] hover:border-[#00C7B7]/40 hover:bg-[#00C7B7]/10 transition-all duration-300"
                aria-label="Saizan Shaikh Netlify Portfolio"
              >
                <SiNetlify className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              Quick Links
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    href={`#${link.to}`}
                    smooth={true}
                    duration={500}
                    className="group inline-flex items-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" aria-hidden="true" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              Services
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.to}
                    href={`#${service.to}`}
                    smooth={true}
                    duration={500}
                    className="group inline-flex items-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                    aria-label={`View service: ${service.name}`}
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" aria-hidden="true" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact / Let's Work Together */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
              Let's Work Together
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Have a project in mind or need a custom web solution? Let's turn your ideas into a high-converting digital experience.
            </p>

            <div className="space-y-2.5 pt-1 text-sm">
              <a 
                href="mailto:adnanshaikh1508@gmail.com" 
                className="flex items-center gap-2.5 text-slate-300 hover:text-primary transition-colors group"
                aria-label="Email Saizan Shaikh"
              >
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="break-all">adnanshaikh1508@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/919026278246" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-primary transition-colors group"
                aria-label="WhatsApp Saizan Shaikh"
              >
                <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>+91 9026278246</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                to="contact"
                href="#contact"
                smooth={true}
                duration={500}
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-md hover:shadow-primary/30 hover:opacity-95 transition-all cursor-pointer group"
                aria-label="Start a project with Saizan Freelancer"
              >
                <span>Start a Project</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p className="flex items-center flex-wrap justify-center sm:justify-start gap-1">
            <span>&copy; {new Date().getFullYear()} Saizan Shaikh (Saizan Freelancer). All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span className="inline-flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-secondary inline" fill="currentColor" aria-hidden="true" /> and React.
            </span>
          </p>

          {/* Smooth Back to Top Button */}
          <Link
            to="home"
            href="#home"
            smooth={true}
            duration={600}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 cursor-pointer shadow-sm"
            aria-label="Back to top of page"
          >
            <span className="font-medium text-xs">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-primary group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}