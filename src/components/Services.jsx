import { motion } from 'framer-motion';
import { PenTool, Globe, Briefcase, Code } from 'lucide-react';

const services = [
  {
    icon: <PenTool className="w-8 h-8 text-white" />,
    title: "UI & Template Design",
    description: "Bespoke card design, custom template design, and responsive landing page mockups crafted for professional personal branding."
  },
  {
    icon: <Globe className="w-8 h-8 text-white" />,
    title: "Portfolio Website Creation",
    description: "Highly aesthetic, responsive website design to showcase your work, featuring smooth animations and high-converting CTA structure."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-white" />,
    title: "Business Website Development",
    description: "Speed-optimized business websites tailored with technical SEO foundations, semantic HTML structures, and responsive grid layouts."
  },
  {
    icon: <Code className="w-8 h-8 text-white" />,
    title: "Custom Frontend Development",
    description: "Custom web development solutions with React, Tailwind CSS, and modern APIs to construct responsive digital products."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">My Services</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative glass p-8 rounded-2xl h-full flex flex-col items-start transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}