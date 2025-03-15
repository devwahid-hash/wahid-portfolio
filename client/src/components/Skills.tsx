import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiDocker, SiGit } from "react-icons/si";

const skills = [
  { icon: SiReact, name: "React.js", level: 90 },
  { icon: SiNodedotjs, name: "Node.js", level: 85 },
  { icon: SiMongodb, name: "MongoDB", level: 80 },
  { icon: SiExpress, name: "Express.js", level: 85 },
  { icon: SiJavascript, name: "JavaScript", level: 90 },
  { icon: SiTypescript, name: "TypeScript", level: 85 },
  { icon: SiDocker, name: "Docker", level: 75 },
  { icon: SiGit, name: "Git", level: 85 }
];

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-[#112240]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CCD6F6] mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-[#0A192F] rounded-lg hover:bg-[#233554] transition-colors duration-300"
            >
              <skill.icon className="w-12 h-12 text-[#64FFDA] mb-4" />
              <h3 className="text-[#CCD6F6] font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-[#233554] h-2 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-[#64FFDA] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
