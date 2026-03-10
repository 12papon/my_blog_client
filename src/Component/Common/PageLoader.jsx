import React from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]">
      {/* ১. ব্যাকগ্রাউন্ডে হালকা গ্লো (Atmosphere) */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"
      />

      <div className="relative flex flex-col items-center">
        {/* ২. লিকুইড আউটার রিং (Rotating Border) */}
        <div className="relative w-24 h-24">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "conic-gradient(from 0deg, transparent 40%, #3b82f6 60%, #a855f7 90%, transparent 100%)",
            }}
            className="absolute inset-0 rounded-full p-[2px] mask-content"
          >
            <div className="w-full h-full bg-[#030712] rounded-full" />
          </motion.div>

          {/* ৩. ভেতরের পালসিং লোগো বা আইকন (Heartbeat Effect) */}
          <motion.div
            animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-4 h-4 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
          </motion.div>
        </div>

        {/* ৪. প্রিমিয়াম টেক্সট অ্যানিমেশন (Shimmer Effect) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 overflow-hidden"
        >
          <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-[length:200%_auto] animate-shimmer">
            Experience Loading
          </h2>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
