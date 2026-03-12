import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import {
  Plus,
  Search,
  Filter,
  BookOpen,
  Sparkles,
  Edit3,
  Trash2,
  Eye,
  EyeOff,
  ArrowRight,
  Flame,
  ChevronDown,
  ChevronUp,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";

const MyBlogs = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  const allPosts = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `The Future of React in 2026: Story ${i + 1}`,
    desc: "Exploring the future of React, Vite, and the evolution of Glassmorphism in 2026.",
    status: i % 2 === 0 ? "Public" : "Private",
  }));

  const showMore = () => setVisibleCount(allPosts.length);
  const showLess = () => setVisibleCount(6);

  return (
    <div className="min-h-screen bg-[#020617] text-white md:pt-35 pt-28 pb-20 px-4 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-blue-400 font-black tracking-[0.3em] uppercase text-xs">
              <Sparkles size={16} /> <span>Your Creative Universe</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-none italic">
              MY{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                STORIES.
              </span>
            </h1>
          </motion.div>

          <Link to="/profile">
            <button className="relative group p-[2px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
              <div className="relative px-8 py-5 bg-slate-950 rounded-[1.4rem] flex items-center gap-4 group-hover:bg-transparent transition-all duration-500">
                <Plus size={24} />
                <span className="text-xl font-black text-white">
                  Create New Post
                </span>
              </div>
            </button>
          </Link>
        </div>

        {/* --- Interactive Search & Filter Bar (Added Back) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-1 relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
            <input
              type="text"
              placeholder="গল্পের সাগরে হারিয়ে যান..."
              className="w-full bg-white/5 border border-white/10 py-5 pl-14 pr-6 rounded-2xl focus:outline-none focus:border-blue-500/50 backdrop-blur-xl transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center gap-3 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all font-bold">
            <Filter size={20} /> Filter
          </button>
        </motion.div>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {allPosts.slice(0, visibleCount).map((post, i) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-6 hover:border-blue-500/30 transition-all duration-500 relative"
              >
                <div className="h-60 rounded-[2.5rem] overflow-hidden mb-6 relative">
                  <img
                    src={`https://images.unsplash.com/photo-1761839258623-e232e15f7ff3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt="Blog"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${post.status === "Public" ? "bg-green-500 shadow-[0_0_10px_#22c55e]" : "bg-yellow-500 shadow-[0_0_10px_#eab308]"}`}
                    />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-200">
                      {post.status}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-black mb-4 leading-tight group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-5 border-t border-white/10 gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-xl text-xs font-bold text-blue-400 transition-all">
                    <Edit3 size={14} /> Edit
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-xl text-xs font-bold text-red-400 transition-all">
                    <Trash2 size={14} /> Delete
                  </button>
                  <button className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all">
                    {post.status === "Public" ? (
                      <Eye size={18} />
                    ) : (
                      <EyeOff size={18} />
                    )}
                  </button>
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- Toggle Buttons --- */}
        <div className="mt-24 flex justify-center pb-10">
          {visibleCount < allPosts.length ? (
            <button
              onClick={showMore}
              className="group flex items-center gap-4 px-14 py-5 bg-white/5 border border-blue-500/30 rounded-full backdrop-blur-xl hover:bg-blue-500/20 transition-all font-black text-2xl"
            >
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />{" "}
              Show More Stories
            </button>
          ) : (
            <button
              onClick={showLess}
              className="group flex items-center gap-4 px-14 py-5 bg-white/5 border border-purple-500/30 rounded-full backdrop-blur-xl hover:bg-purple-500/20 transition-all font-black text-2xl"
            >
              <ChevronUp className="group-hover:-translate-y-1 transition-transform" />{" "}
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBlogs;
