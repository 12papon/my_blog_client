import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../../Context/AuthorContext/AuthorContext";

const AwardWon = () => {
  const { user } = useAuth();
  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={itemVars}
      className="bg-gradient-to-br from-purple-600/20 to-transparent backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center justify-center"
    >
      <h3 className="text-4xl font-black text-white">{user?.projectDone}</h3>
      <p className="text-purple-400 uppercase tracking-widest text-xs font-bold mt-2">
        Awards Won
      </p>
    </motion.div>
  );
};

export default AwardWon;
