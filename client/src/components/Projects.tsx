import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

const projects = [
  {
    title: "Project Management Dashboard",
    description: "A comprehensive project management solution with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media metrics with data visualization.",
    image: "https://images.unsplash.com/photo-1664580618281-fbc47baf6edf",
    tech: ["React", "Express.js", "MongoDB", "D3.js"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-[#112240] border-[#233554] h-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#CCD6F6] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#8892B0] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-[#64FFDA] text-sm px-3 py-1 bg-[#64FFDA]/10 rounded"
                      >
                        {tech}
                      </span>
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
