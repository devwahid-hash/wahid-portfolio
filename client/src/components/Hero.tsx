import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-4 bg-[#112240]"
    >
      <div className="max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-[#CCD6F6] mb-6"
        >
          Hi, I'm Wahid Ali
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-[#8892B0] mb-8"
        >
          MERN Stack & eCommerce Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-[#8892B0] max-w-2xl mb-12"
        >
          I build exceptional digital experiences with modern web technologies. 
          Specializing in full-stack development with React, Node.js, and MongoDB.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="inline-block px-8 py-4 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] 
                     rounded hover:bg-[#64FFDA]/10 transition-colors duration-300"
        >
          View My Work
        </motion.a>
      </div>
    </motion.section>
  );
}
