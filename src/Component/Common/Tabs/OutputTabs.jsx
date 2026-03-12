import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, Globe } from "lucide-react";
import CreatePost from "./CreatePost/CreatePost";
import MyBlogs from "./MyBlogs/MyBlogs";
import Settings from "./Setteng/Settings";

const OutputTabs = () => {
  const [activeTab, setActiveTab] = useState("my-blogs"); // ডিফল্ট ট্যাব
  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div variants={itemVars} className="md:col-span-12 mt-10">
      {/* Tab Buttons - Glassmorphism Style */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8 bg-white/5 p-2 rounded-[2rem] border border-white/10 w-fit mx-auto backdrop-blur-md">
        {[
          {
            id: "my-blogs",
            label: "My Blogs",
            icon: <BookOpen size={18} />,
          },
          {
            id: "create-post",
            label: "Create Post",
            icon: <Sparkles size={18} />,
          },
          { id: "settings", label: "Settings", icon: <Globe size={18} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center space-x-2 px-6 py-3 rounded-2xl font-bold transition-all duration-500 ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl -z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              />
            )}
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 min-h-[400px] shadow-inner"
        >
          {activeTab === "my-blogs" && <MyBlogs />}

          {activeTab === "create-post" && <CreatePost />}

          {activeTab === "settings" && <Settings />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default OutputTabs;
