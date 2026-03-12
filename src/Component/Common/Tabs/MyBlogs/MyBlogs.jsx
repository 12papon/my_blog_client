import React from "react";
import { motion } from "framer-motion"; // এনিমেশনের জন্য
import { Link } from "react-router"; // রাউটিংয়ের জন্য
import {
  ExternalLink,
  Edit3,
  Trash2,
  Eye,
  EyeOff,
  Heart,
  MessageCircle,
  Share2,
  BookOpen,
} from "lucide-react"; // সব আইকন একসাথে

const MyBlogs = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* এখানে আপনার ব্লগের লিস্ট ম্যাপ করবেন */}
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white/5 rounded-3xl p-5 border border-white/10 hover:border-blue-500/50 transition-all group"
          >
            <div className="h-40 bg-slate-800 rounded-2xl mb-4 overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-1772442088907-463f166cf1f2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <h4 className="text-xl font-bold mb-2">Modern Web Trends 2026</h4>
            <p className="text-sm text-gray-400 mb-4">
              Exploring the future of React and Vite...
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-blue-400">March 10, 2026</span>
              <button className="p-2 bg-white/10 rounded-lg">
                <ExternalLink size={14} />
              </button>
            </div>

            {/* --- Action Buttons (Edit, Delete, Toggle) --- */}
            <div className="flex items-center justify-between pt-5 mt-1 border-t border-white/10 gap-3">
              {/* Edit Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-xl text-xs font-bold text-blue-400 transition-all cursor-pointer"
              >
                <Edit3 size={14} />
                <span>Edit</span>
              </motion.button>

              {/* Delete Button - Neon Red Feel */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-xl text-xs font-bold text-red-400 transition-all cursor-pointer"
              >
                <Trash2 size={14} />
                <span>Delete</span>
              </motion.button>

              {/* Privacy Toggle Button - Multi-state Icon */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all cursor-pointer"
                title={i % 2 === 0 ? "Make Private" : "Make Public"}
              >
                {i % 2 === 0 ? <Eye size={18} /> : <EyeOff size={18} />}
              </motion.button>
            </div>
            {/* --- Social Engagement Stats --- */}
            <div className="flex items-center justify-center mt-3 gap-6 mb-6 px-2">
              {/* Likes */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 group/stat cursor-pointer"
              >
                <div className="p-2 bg-pink-500/10 rounded-lg group-hover/stat:bg-pink-500/20 transition-colors">
                  <Heart
                    size={16}
                    className="text-pink-500 fill-pink-500/20 group-hover/stat:fill-pink-500 transition-all"
                  />
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover/stat:text-pink-400">
                  2.4k
                </span>
              </motion.div>

              {/* Comments */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 group/stat cursor-pointer"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover/stat:bg-blue-500/20 transition-colors">
                  <MessageCircle
                    size={16}
                    className="text-blue-500 group-hover/stat:fill-blue-500/20 transition-all"
                  />
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover/stat:text-blue-400">
                  128
                </span>
              </motion.div>

              {/* Shares */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 group/stat cursor-pointer"
              >
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover/stat:bg-purple-500/20 transition-colors">
                  <Share2 size={16} className="text-purple-500" />
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover/stat:text-purple-400">
                  56
                </span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      {/* --- View All Blogs Button --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center items-center w-full mt-12 mb-10"
      >
        <Link to="/my-blogs">
          {" "}
          {/* আপনার মাই ব্লগ পেজের রাউট এখানে দিন */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
              backgroundColor: "rgba(59, 130, 246, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center space-x-3 px-12 py-5 bg-white/5 border border-blue-500/30 rounded-[2rem] backdrop-blur-xl transition-all duration-500"
          >
            <div className="p-2 bg-blue-500 rounded-xl group-hover:rotate-12 transition-transform">
              <BookOpen size={20} className="text-white" />
            </div>

            <span className="text-xl font-black bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent tracking-tight">
              View All My Stories
            </span>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ExternalLink size={20} className="text-blue-400" />
            </motion.div>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-[2rem] bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default MyBlogs;
