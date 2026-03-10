import React from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background Animated Blobs - সৌন্দর্য বাড়ানোর জন্য */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-bounce"></div>

      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Badge Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8"
        >
          <Sparkles size={16} className="text-yellow-400" />
          <span className="text-gray-200 text-sm font-medium">
            ২০২৬ সালের সেরা ব্লগিং অভিজ্ঞতা
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-white leading-tight mb-6"
        >
          কল্পনার দুনিয়ায় <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            ডুব দিন কোডিংয়ে
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          এখানে প্রতিটি আর্টিকেল একটি গল্প বলে। আধুনিক প্রযুক্তি, ডিজাইন এবং
          বুদ্ধিবৃত্তিক আলোচনার একমাত্র ঠিকানা।
        </motion.p>

        {/* Glassmorphism Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative max-w-2xl mx-auto mb-10"
        >
          <div className="flex items-center bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-2 shadow-2xl focus-within:ring-2 focus-within:ring-blue-500 transition-all">
            <Search className="text-gray-400 ml-4" />
            <input
              type="text"
              placeholder="পছন্দের টপিক খুঁজুন..."
              className="w-full bg-transparent border-none outline-none px-4 py-3 text-white placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg flex items-center space-x-2">
              <span>খুঁজুন</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Stats / Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm font-medium"
        >
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-lg">৫০কে+</span>{" "}
            <span>রিডার্স</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-lg">৫০০+</span>{" "}
            <span>আর্টিকেল</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-lg">২৪/৭</span>{" "}
            <span>সাপোর্ট</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
