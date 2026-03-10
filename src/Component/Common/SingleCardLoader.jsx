import React from "react";
import { motion } from "framer-motion";

const SingleCardLoader = () => {
  return (
    <div className="relative w-full max-w-[400px] bg-white/[0.02] backdrop-blur-3xl rounded-[3rem] overflow-hidden border border-white/5 p-3 shadow-2xl">
      {/* ১. ইমেজ এরিয়া স্কেলিটন */}
      <div className="relative h-[260px] w-full bg-white/5 rounded-[2.5rem] overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
        />
      </div>

      {/* ২. কন্টেন্ট এরিয়া স্কেলিটন */}
      <div className="p-8 pt-6 space-y-5">
        {/* মেটা ডাটা (Author/Time) */}
        <div className="flex gap-4">
          <div className="h-3 w-20 bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
          </div>
          <div className="h-3 w-16 bg-white/5 rounded-full" />
        </div>

        {/* টাইটেল স্কেলিটন */}
        <div className="space-y-3">
          <div className="h-6 w-full bg-white/10 rounded-xl relative overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
          </div>
          <div className="h-6 w-[70%] bg-white/10 rounded-xl" />
        </div>

        {/* ডেসক্রিপশন স্কেলিটন */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-white/5 rounded-full" />
          <div className="h-3 w-full bg-white/5 rounded-full" />
        </div>

        {/* বাটন স্কেলিটন */}
        <div className="pt-4 flex justify-between items-center">
          <div className="h-4 w-24 bg-white/10 rounded-full" />
          <div className="w-10 h-10 rounded-full bg-white/5" />
        </div>
      </div>
    </div>
  );
};

export default SingleCardLoader;
