import { motion } from 'framer-motion';
import { Code2, Layout, Database, Smartphone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative glass p-8 rounded-2xl">
                <h3 className="text-3xl font-bold text-white mb-2">Saizan Shaikh</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold mb-6 text-lg">Freelance Web Developer & Frontend Engineer | IGNOU Student</p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  I'm a passionate developer who loves building real-world projects. I have hands-on experience creating food delivery apps, e-commerce websites, and rental platforms.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg mt-4">
                  My main focus is on creating clean, user-friendly, and responsive designs that help my clients stand out in the digital world.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass p-6 rounded-xl hover:border-primary transition-all duration-300 hover:-translate-y-2 group">
              <Layout className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2 text-xl">Frontend Development</h3>
              <p className="text-sm text-slate-400">React.js, Tailwind CSS, Next.js, Framer Motion</p>
            </div>
            <div className="glass p-6 rounded-xl hover:border-secondary transition-all duration-300 hover:-translate-y-2 group">
              <Database className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2 text-xl">Backend Integration</h3>
              <p className="text-sm text-slate-400">Node.js, Express, MongoDB, REST APIs</p>
            </div>
            <div className="glass p-6 rounded-xl hover:border-secondary transition-all duration-300 hover:-translate-y-2 group">
              <Code2 className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2 text-xl">Clean Code Standards</h3>
              <p className="text-sm text-slate-400">Reusable components, Architecture & Best practices</p>
            </div>
            <div className="glass p-6 rounded-xl hover:border-primary transition-all duration-300 hover:-translate-y-2 group">
              <Smartphone className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2 text-xl">Responsive Website Design</h3>
              <p className="text-sm text-slate-400">Pixel-perfect responsive designs for all mobile & desktop displays</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}