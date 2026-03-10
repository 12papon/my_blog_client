import React from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Chrome, Github, Sparkles } from "lucide-react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-transparent overflow-hidden font-sans px-6">
      {/* --- অসামান্য ব্যাকগ্রাউন্ড আর্ট --- */}
      <div className="absolute inset-0 pointer-events-none ">
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/15 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-600/15 blur-[120px] rounded-full"
        />
      </div>

      {/* --- মেইন লাক্সারি কার্ড --- */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[460px] bg-white/[0.02] backdrop-blur-[50px] border border-white/10 rounded-[4rem] p-10 md:p-14 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]"
      >
        <div className="text-center mb-12">
          {/* --- নিখুঁত রাউন্ডেড বর্ডার এনিমেশন (SVG) --- */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* এনিমেটেড স্ট্রোক যা কোণা দিয়ে ঘুরবে */}
              <motion.rect
                x="0.5"
                y="0.5"
                width="99"
                height="99"
                rx="10" // এটি আপনার rounded-[4rem] এর সাথে নিখুঁতভাবে মিলবে
                fill="none"
                stroke="url(#luxury-grad)"
                strokeWidth="0.5"
                strokeDasharray="30 100" // লাইনের সাইজ ও গ্যাপ
                animate={{ strokeDashoffset: [-130, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <defs>
                <linearGradient
                  id="luxury-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#3b82f6" /> {/* Blue */}
                  <stop offset="100%" stopColor="#a855f7" /> {/* Purple */}
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Sparkles size={12} /> Secure Portal
          </div>
          <h2 className="text-5xl font-black text-white tracking-tighter leading-none mb-4">
            Welcome <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Back.
            </span>
          </h2>
          <p className="text-gray-500 text-sm font-medium italic">
            আপনার ডিজিটাল জগতে পুনরায় প্রবেশ করুন
          </p>
        </div>

        <form className="space-y-6">
          <div className="relative group">
            <Mail
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-400 transition-all"
              size={18}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/[0.03] border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-white focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="relative group">
            <Lock
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-indigo-400 transition-all"
              size={18}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white/[0.03] border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-white focus:outline-none focus:border-indigo-500/40 focus:bg-white/[0.06] transition-all placeholder:text-gray-700"
            />
          </div>

          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-5 rounded-3xl font-black text-white tracking-widest uppercase shadow-2xl flex justify-center items-center gap-3 transition-all"
          >
            Sign In <ArrowRight size={20} />
          </motion.button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-white hover:text-blue-400 underline underline-offset-4 ml-1 transition-colors"
            >
              Create One
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
