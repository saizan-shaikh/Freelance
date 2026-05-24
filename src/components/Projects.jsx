import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import portfolioImage from "../assets/My-Portfolio.png";
import foodDeliveryImage from "../assets/Dood-Delivery.png";
import propertyRentalImage from "../assets/PPR.png";
import invoiceImage from "../assets/Invoice.png";
import shayriImage from "../assets/Shayri.png";
import ecommerceImage from "../assets/E-commerce (2).png";
import pokemonImage from "../assets/Pokemon.png";
import gameImage from "../assets/Game.png";
import formImage from "../assets/Form.png";

const ProjectsList = [
  {
    title: "Food Delivery App",
    description: "A full-featured food delivery application with modern UI and smooth interactions.",
    image: foodDeliveryImage,
    live: "https://saizan-food-delivery.netlify.app",
    github: "https://github.com/saizan-shaikh/food-delivery-project"
  },
  {
    title: "Property Rental Website",
    description: "Platform for private property rentals and listings with advanced search.",
    image: propertyRentalImage,
    live: "https://saizan-private-property-rental.netlify.app",
    github: "https://github.com/saizan-shaikh/private-property-rental"
  },
  {
    title: "E-commerce Website",
    description: "Modern e-commerce platform with cart, checkout, and product management.",
    image: ecommerceImage,
    live: "https://saizan-ecommerce-website.netlify.app",
    github: "https://github.com/saizan-shaikh/ecommerce-project"
  },
  {
    title: "Personal Portfolio",
    description: "My personal developer portfolio website featuring a premium dark theme.",
    image: portfolioImage,
    live: "https://saizan-shaikh.github.io",
    github: "https://github.com/saizan-shaikh/saizan-shaikh.github.io"
  },
  {
    title: "Shayri Book App",
    description: "A beautiful app to read, share, and enjoy shayris with a clean UI.",
    image: shayriImage,
    live: "https://saizan-shayri-book.netlify.app",
    github: "https://saizan-shaikh/Saizan-Shayri-frontend",
  },
  {
    title: "Invoice App",
    description: "A responsive invoice generator application to easily manage and create invoices.",
    image: invoiceImage,
    live: "https://saizan-login-form.netlify.app",
    github: "https://github.com/saizan-shaikh"
  },
  {
    title: "Login Form Project",
    description: "A secure and responsive login form application.",
    image: formImage,
    live: "https://saizan-login-form.netlify.app",
    github: "https://github.com/saizan-shaikh/chainitech-practical-task"
  },
  {
    title: "Rock Paper Scissors Game",
    description: "An interactive browser-based rock paper scissors arcade game.",
    image: gameImage,
    live: "https://rock-paper-scissors-arcade.netlify.app",
    github: "https://github.com/saizan-shaikh/rock-paper-scissors-arcade"
  },
  {
    title: "Pokemon Catch App",
    description: "A fun web application to catch and explore various Pokemon.",
    image: pokemonImage,
    live: "https://saizan-catch-pokemon-task.netlify.app",
    github: "https://github.com/saizan-shaikh/pokemon-task"
  }
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Real Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full glow-primary"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative glass rounded-2xl overflow-hidden h-full flex flex-col group-hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 z-10"></div>
                  <img
                    src={project.image}
                    alt={`${project.title} - Web development freelance project by Saizan Freelancer`}
                    loading="lazy"
                    decoding="async"
                    width="384"
                    height="224"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Floating Action Buttons over Image */}
                  <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-slate-950 transition-colors"
                      title="Live Demo"
                      aria-label={`View live website for ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" aria-hidden="true" />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-colors"
                        title="Source Code"
                        aria-label={`View GitHub source code repository for ${project.title}`}
                      >
                        <FaGithub className="w-5 h-5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col relative z-20 bg-gradient-to-b from-transparent to-slate-900/80">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
