import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Fasco Fashion E-commerce",
    description: "A modern e-commerce platform for fashion retail featuring a sleek user interface, ultimate sale collections, and brand showcase. Built with React and modern web technologies.",
    image: "/assets/webdesign 3.png",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "#"
  },
  {
    title: "Minimalist Product Catalog",
    description: "A clean and modern product catalog with advanced filtering capabilities, size selection, and mobile-responsive design. Implements dark mode and intuitive navigation.",
    image: "/assets/webdesign 2.png",
    tech: ["React", "Tailwind CSS", "Redux", "Node.js"],
    link: "#"
  },
  {
    title: "Rivo Fashion Store",
    description: "An elegant fashion e-commerce website with a focus on user experience, featuring product collections, exclusive offers, and customer feedback integration.",
    image: "/assets/web design.png",
    tech: ["React", "Express.js", "MongoDB", "Stripe"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#0A192F]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CCD6F6] mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="transform transition-all duration-300"
            >
              <Card className="overflow-hidden bg-[#112240] border-[#233554] h-full hover:border-[#64FFDA] transition-colors duration-300">
                <motion.div 
                  className="aspect-w-16 aspect-h-9 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                  />
                </motion.div>
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold text-[#CCD6F6] mb-3 group-hover:text-[#64FFDA] transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-[#8892B0] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="text-[#64FFDA] text-sm px-3 py-1 bg-[#64FFDA]/10 rounded-full
                                 hover:bg-[#64FFDA]/20 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}