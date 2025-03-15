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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

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

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -15px rgba(2,12,27,0.7)"
              }}
              className="flex flex-col items-center p-6 bg-[#0A192F] rounded-lg border border-[#233554] hover:border-[#64FFDA] transition-all duration-300 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="w-12 h-12 text-[#64FFDA] mb-4" />
              </motion.div>
              <h3 className="text-[#CCD6F6] font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-[#233554] h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-[#64FFDA] rounded-full"
                />
              </div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-2 text-[#8892B0] text-sm"
              >
                {skill.level}%
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}