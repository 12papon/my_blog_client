import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  MapPin,
  Calendar,
  Award,
  Code,
  BookOpen,
  Globe,
  Github,
  Twitter,
  ExternalLink,
  Sparkles,
  Edit3,
  Trash2,
  Eye,
  EyeOff,
  LogIn,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import { useAuth } from "../Context/AuthorContext/AuthorContext";
const Profile = () => {
  const { user } = useAuth();
  const date = new Date(user.joinDate);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  console.log(user.socialLinks);

  const [activeTab, setActiveTab] = useState("my-blogs"); // ডিফল্ট ট্যাব
  // এনিমেশন ভ্যারিয়েন্ট
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white md:pt-40 pt-25 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Animated Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10"
      >
        {/* --- Left Column: Main Profile Card (4 Columns) --- */}
        <motion.div variants={itemVars} className="md:col-span-4 space-y-6">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Avatar with Glow */}
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-spin-slow" />
              <div className="relative w-32 h-32 rounded-full border-4 border-white/20 overflow-hidden bg-slate-800">
                <img
                  src="https://placehold.co"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -bottom-2 -right-2 bg-blue-500 p-2 rounded-xl shadow-lg"
              >
                <Sparkles size={16} className="text-white" />
              </motion.div>
            </div>

            <h1 className="text-3xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {user.name.toUpperCase()}
            </h1>
            <p className="text-blue-400 font-medium mb-6">{user.designation}</p>

            <div className="space-y-3 text-left border-t border-white/10 pt-6">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin size={16} /> <span>{user.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Calendar size={16} />{" "}
                <span>Joined {`${month} ${year.toString()}`}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} /> <span>{user.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-8">
              {["Github", "Twitter", "Globe"].map((Icon, i) => (
                <motion.a
                  key={i}
                  href={user?.socialLinks?.[Icon.toLowerCase()] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 bg-white/5 rounded-2xl hover:bg-blue-500/20 transition-all border border-white/5 z-50"
                >
                  {Icon === "Github" && (
                    <Github
                      size={20}
                      className="text-gray-300 hover:text-blue-400"
                    />
                  )}
                  {Icon === "Twitter" && (
                    <Twitter
                      size={20}
                      className="text-gray-300 hover:text-blue-400"
                    />
                  )}
                  {Icon === "Globe" && (
                    <Globe
                      size={20}
                      className="text-gray-300 hover:text-blue-400"
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Right Column: Bento Grid (8 Columns) --- */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Bio Box */}
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
              I am a passionate developer who loves building digital experiences
              that merge functionality with stunning design. Constantly
              exploring the future of web technologies in 2026.
            </p>
          </motion.div>

          {/* Stats Boxes */}
          <motion.div
            variants={itemVars}
            className="bg-gradient-to-br from-blue-600/20 to-transparent backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center justify-center"
          >
            <h3 className="text-4xl font-black text-white">{`${user?.awardswon}+`}</h3>
            <p className="text-blue-400 uppercase tracking-widest text-xs font-bold mt-2">
              Projects Done
            </p>
          </motion.div>

          <motion.div
            variants={itemVars}
            className="bg-gradient-to-br from-purple-600/20 to-transparent backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center justify-center"
          >
            <h3 className="text-4xl font-black text-white">
              {user?.projectDone}
            </h3>
            <p className="text-purple-400 uppercase tracking-widest text-xs font-bold mt-2">
              Awards Won
            </p>
          </motion.div>

          {/* Skills / Tech Stack */}
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
        </div>
        {/* --- Interactive Tabs Section --- */}
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
              {activeTab === "my-blogs" && (
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
                        <h4 className="text-xl font-bold mb-2">
                          Modern Web Trends 2026
                        </h4>
                        <p className="text-sm text-gray-400 mb-4">
                          Exploring the future of React and Vite...
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-blue-400">
                            March 10, 2026
                          </span>
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
                            {i % 2 === 0 ? (
                              <Eye size={18} />
                            ) : (
                              <EyeOff size={18} />
                            )}
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
              )}

              {activeTab === "create-post" && (
                <div className="max-w-2xl mx-auto space-y-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    Create New Masterpiece{" "}
                    <Sparkles className="text-yellow-400" />
                  </h3>
                  <input
                    type="text"
                    placeholder="Post Title"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all"
                  />
                  <textarea
                    placeholder="Write your story..."
                    rows="6"
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-blue-500 text-white transition-all"
                  />
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-2xl font-black text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all">
                    Publish Post
                  </button>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="max-w-xl mx-auto space-y-8">
                  <div className="flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div>
                      <p className="font-bold">Public Profile</p>
                      <p className="text-sm text-gray-500">
                        Make your profile visible to everyone
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm text-gray-400 px-2">
                      Update Display Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-purple-500"
                      defaultValue="Tanvir Ahmed"
                    />
                  </div>
                  {/* --- Danger Zone: Logout Section --- */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-red-500/5 backdrop-blur-xl rounded-[2.5rem] border border-red-500/20 group hover:bg-red-500/10 transition-all duration-500">
                      <div className="text-center md:text-left mb-6 md:mb-0">
                        <h4 className="text-xl font-bold text-red-400 flex items-center justify-center md:justify-start gap-2">
                          <LogIn size={20} className="rotate-180" /> Logout from
                          Account
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Are you sure you want to end your current session?
                        </p>
                      </div>

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 30px rgba(239, 68, 68, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          // এখানে আপনার লগআউট লজিক (যেমন: localStorage.clear()) থাকবে
                          console.log("Logged out successfully");
                        }}
                        className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-black rounded-2xl shadow-xl flex items-center gap-3 transition-all"
                      >
                        <LogIn size={18} className="rotate-180" />
                        Logout Now
                      </motion.button>
                    </div>

                    <p className="text-center text-[10px] text-gray-600 mt-6 uppercase tracking-[0.2em]">
                      End of settings • Secure Session 2026
                    </p>
                  </div>
                  <button className="px-8 py-3 border border-red-500/30 text-red-400 rounded-2xl hover:bg-red-500/10 transition-all text-sm">
                    Deactivate Account
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
