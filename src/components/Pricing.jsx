import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Canva Design",
    price: "₹299 – ₹599",
    description: "Perfect for personal branding",
    features: ["Editable Instagram Templates", "Personal Portfolio Design", "Custom Layouts", "High-Quality Exports"],
    recommended: false
  },
  {
    name: "Simple Website",
    price: "₹799 – ₹1499",
    description: "Great for a quick online presence",
    features: ["1-Page Responsive Portfolio", "Modern UI/UX", "Mobile Friendly", "Basic SEO"],
    recommended: true
  },
  {
    name: "Business Website",
    price: "₹1499 – ₹2999",
    description: "Ideal for growing businesses",
    features: ["Multi-page Modern Site", "Contact Form Integration", "Fast Performance", "Advanced SEO Setup"],
    recommended: false
  },
  {
    name: "Custom Work",
    price: "Custom",
    description: "Based on requirements",
    features: ["Full-Stack Development", "MERN Stack Solutions", "Custom Features", "Database Integration"],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Affordable Pricing</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass rounded-3xl ${plan.recommended ? 'border border-primary/50 glow-primary transform lg:-translate-y-4 lg:scale-105 z-20 shadow-2xl shadow-primary/20 bg-slate-900/80' : 'border border-dark-border hover:border-slate-500 z-10'} p-8 transition-all duration-300 flex flex-col h-full`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-lg">
                    POPULAR
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm h-10">{plan.description}</p>
                <div className="mt-4">
                  <span className={`text-4xl font-black ${plan.recommended ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary' : 'text-white'}`}>{plan.price}</span>
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <div className={`mt-1 mr-3 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.recommended ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-slate-700'}`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform active:scale-95 ${plan.recommended ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/50' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'}`}>
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}