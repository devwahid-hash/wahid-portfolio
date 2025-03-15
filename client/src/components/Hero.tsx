import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-4 bg-[#0A192F] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] to-[#112240] opacity-50"></div>
      <div className="max-w-4xl relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[#64FFDA] font-mono mb-4"
        >
          Welcome I'am
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold text-[#CCD6F6] mb-6"
        >
          Wahid Dev
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-[#8892B0] mb-8"
        >
          MERN Stack & E-commerce Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-[#8892B0] max-w-2xl mb-12 leading-relaxed"
        >
          I specialize in building exceptional digital experiences with modern web technologies. 
          Creating robust and scalable solutions with the MERN stack and e-commerce platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] 
                     rounded hover:bg-[#64FFDA]/10 transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-[#64FFDA] text-[#0A192F] 
                     rounded hover:bg-[#64FFDA]/90 transition-colors duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}