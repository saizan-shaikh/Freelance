import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-primary"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Ready to start your next project? Reach out to me via email or WhatsApp and let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {[
              { icon: <Mail className="w-6 h-6 text-white" />, title: "Email", value: "adnanshaikh1508@gmail.com", link: "mailto:adnanshaikh1508@gmail.com" },
              { icon: <Phone className="w-6 h-6 text-white" />, title: "WhatsApp", value: "+91 9026278246", link: "https://wa.me/919026278246" },
              { icon: <FaLinkedin className="w-6 h-6 text-white" />, title: "LinkedIn", value: "linkedin.com/in/shaikh-saizan-274aba3a0/", link: "https://www.linkedin.com/in/shaikh-saizan-274aba3a0/" },
              { icon: <FaGithub className="w-6 h-6 text-white" />, title: "GitHub", value: "github.com/saizan-shaikh", link: "https://github.com/saizan-shaikh" },
              { icon: <ExternalLink className="w-6 h-6 text-white" />, title: "Netlify Projects", value: "app.netlify.com/teams/adnanshaikh1508", link: "https://app.netlify.com/teams/adnanshaikh1508/projects" }
            ].map((item, index) => (
              <div key={index} className="group glass p-6 rounded-2xl flex items-center hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 mr-6" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all break-all" aria-label={`Contact Saizan Shaikh via ${item.title}: ${item.value}`}>
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="glass p-8 md:p-10 rounded-3xl space-y-6 relative overflow-hidden" action="https://formspree.io/f/xvzlkjkq" method='POST' aria-label="Contact Saizan Freelancer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

              <div className="relative z-10">
                <label htmlFor="contact-name" className="block text-slate-300 text-sm font-bold mb-2 ml-1">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  name='name'
                  required
                  className="w-full bg-slate-900/50 text-white border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="relative z-10">
                <label htmlFor="contact-email" className="block text-slate-300 text-sm font-bold mb-2 ml-1">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  name='email'
                  required
                  className="w-full bg-slate-900/50 text-white border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="relative z-10">
                <label htmlFor="contact-message" className="block text-slate-300 text-sm font-bold mb-2 ml-1">Message</label>
                <textarea
                  id="contact-message"
                  rows="5"
                  placeholder="How can I help you?"
                  name='message'
                  required
                  className="w-full bg-slate-900/50 text-white border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-slate-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/40 transition-all duration-300 transform active:scale-95 flex items-center justify-center group z-10 relative"
                aria-label="Submit contact message to Saizan Freelancer"
              >
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}