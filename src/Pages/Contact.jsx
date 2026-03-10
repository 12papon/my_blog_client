import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
  Sparkles,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const Contact = () => {
  // মাউস ট্র্যাকিং লজিক (৩ডি ইফেক্টের জন্য)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center bg-transparent overflow-hidden px-4 py-20 font-sans"
    >
      {/* --- ব্যাকগ্রাউন্ড লিকুইড অ্যানিমেশন --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.4, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[160px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.4, 1, 1.4], x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 blur-[160px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* --- বাম পাশ: ইমার্সিভ কন্টেন্ট --- */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 text-blue-400 text-xs font-black uppercase tracking-[0.4em]"
            >
              <Sparkles size={14} /> Available for Projects
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              চলো কথা <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 italic">
                বলি!
              </span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-md font-medium leading-relaxed">
              আপনার কল্পনাকে বাস্তবে রূপ দিতে আমরা প্রস্তুত। ২০২৬ সালের আধুনিক
              প্রযুক্তিতে আপনার ব্র্যান্ডকে সাজান।
            </p>
          </div>

          {/* কন্টাক্ট ইনফো কার্ডস */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Mail />,
                title: "Email Us",
                val: "hello@future.com",
                color: "blue",
              },
              {
                icon: <MessageCircle />,
                title: "Live Chat",
                val: "Start Now",
                color: "purple",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all cursor-pointer group"
              >
                <div
                  className={`mb-4 text-${item.color}-400 group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                  {item.title}{" "}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100"
                  />
                </h4>
                <p className="text-gray-500 text-sm font-medium">{item.val}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- ডান পাশ: ৩ডি লিকুইড ফর্ম --- */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="relative group"
        >
          {/* ফর্মের পেছনে গ্লো ইফেক্ট */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-[100px] rounded-[4rem] group-hover:scale-110 transition-transform duration-700" />

          <div className="relative bg-white/[0.02] backdrop-blur-[80px] border border-white/10 rounded-[4rem] p-10 md:p-14 shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest flex items-center gap-3">
              ম্যাসেজ পাঠান <div className="h-px flex-grow bg-white/10" />
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="নাম"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-700"
                />
                <input
                  type="email"
                  placeholder="ইমেইল"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="relative">
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-gray-500 appearance-none focus:outline-none focus:border-pink-500/50 transition-all">
                  <option>সার্ভিস সিলেক্ট করুন</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Branding</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                  ▼
                </div>
              </div>

              <textarea
                rows="4"
                placeholder="আপনার আইডিয়াটি লিখুন..."
                className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all placeholder:text-gray-700"
              />

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-[0.3em] flex justify-center items-center gap-3 hover:bg-blue-500 hover:text-white transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
              >
                সেন্ড করুন <Send size={18} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
