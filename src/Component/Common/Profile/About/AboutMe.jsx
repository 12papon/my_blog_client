import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutMe = () => {
  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={itemVars}
      className="sm:col-span-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 group relative overflow-hidden"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-purple-500/20 rounded-2xl text-purple-400">
          <User size={24} />
        </div>
        <h2 className="text-2xl font-bold">About Me</h2>
      </div>
      <p className="text-gray-400 leading-relaxed">
        I am a passionate developer who loves building digital experiences that
        merge functionality with stunning design. Constantly exploring the
        future of web technologies in 2026.
      </p>
    </motion.div>
  );
};

export default AboutMe;
