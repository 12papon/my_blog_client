import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const SkillStack = () => {
  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={itemVars}
      className="sm:col-span-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Code className="text-blue-400" /> Skills
        </h2>
        <span className="text-xs text-gray-500">Expertise Level</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { name: "React / Vite", level: "95%", color: "bg-blue-500" },
          { name: "Node.js", level: "85%", color: "bg-green-500" },
          { name: "Tailwind CSS", level: "90%", color: "bg-cyan-400" },
          { name: "Framer Motion", level: "80%", color: "bg-purple-500" },
        ].map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-gray-500">{skill.level}</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`h-full ${skill.color} shadow-[0_0_15px_rgba(59,130,246,0.5)]`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillStack;
