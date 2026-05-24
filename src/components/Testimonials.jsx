import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "I focus on writing clean, maintainable code to build flawless and modern user interfaces.",
    name: "Clean UI",
    role: "Frontend Development"
  },
  {
    text: "Ensuring pixel-perfect responsiveness across all screen sizes for a seamless experience.",
    name: "Responsive Design",
    role: "Mobile First Approach"
  },
  {
    text: "Leveraging smooth animations and modern layouts to create highly engaging web applications.",
    name: "Smooth UX",
    role: "Interactive Design"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What You Get</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative glass p-8 rounded-2xl h-full flex flex-col group-hover:-translate-y-2 transition-all duration-300">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-primary opacity-20 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-slate-300 italic mb-8 relative z-10 text-lg flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{testimonial.name}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}