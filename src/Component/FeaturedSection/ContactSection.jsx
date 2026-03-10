import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const ContactSection = () => {
  const [focused, setFocused] = useState(null);

  const contactInfo = [
    {
      icon: <Mail />,
      label: "Email",
      value: "hello@yourbrand.com",
      color: "text-blue-400",
    },
    {
      icon: <Phone />,
      label: "Phone",
      value: "+880 1234 567890",
      color: "text-purple-400",
    },
    {
      icon: <MapPin />,
      label: "Office",
      value: "Dhaka, Bangladesh",
      color: "text-pink-400",
    },
  ];

  return (
    <section className="relative min-h-screen bg-transparent py-24 px-6 overflow-hidden flex items-center">
      {/* অসামান্য ব্যাকগ্রাউন্ড অ্যানিমেশন */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/20 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 w-full">
        {/* বাম পাশ: কন্টাক্ট ডিটেইলস ও টেক্সট */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full w-fit mb-6">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
              Get In Touch
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none">
            চলো নতুন কিছু <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              তৈরি করি!
            </span>
          </h2>

          <p className="text-gray-400 text-xl mb-12 max-w-lg leading-relaxed">
            আপনার আইডিয়া শেয়ার করুন, আমরা সেটিকে ২০২৬ সালের আধুনিক প্রযুক্তিতে
            রূপান্তর করবো।
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 20 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div
                  className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/30 transition-all ${info.color}`}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase font-bold tracking-widest">
                    {info.label}
                  </p>
                  <p className="text-white text-lg font-medium">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ডান পাশ: ম্যাজিকাল গ্লাস ফর্ম */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-[3.5rem] shadow-2xl"
        >
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
                rx="7" // এটি আপনার rounded-[4rem] এর সাথে নিখুঁতভাবে মিলবে
                fill="none"
                stroke="url(#luxury-grad)"
                strokeWidth="0.8"
                strokeDasharray="30 100" // লাইনের সাইজ ও গ্যাপ
                animate={{ strokeDashoffset: [0, -130] }}
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
          <div>
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* নাম ইনপুট */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="আপনার নাম"
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white placeholder:text-gray-600"
                  />
                </div>
                {/* ইমেইল ইনপুট */}
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="ইমেইল অ্যাড্রেস"
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white placeholder:text-gray-600"
                  />
                </div>
              </div>

              {/* সার্ভিস সিলেকশন (Interactive) */}
              <div className="space-y-4">
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
                  আপনি কি খুঁজছেন?
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Web Design", "Development", "Branding", "UI/UX"].map(
                    (tag) => (
                      <button
                        key={tag}
                        type="button"
                        className="px-6 py-2 rounded-full border border-white/10 hover:bg-blue-600 hover:border-blue-600 transition-all text-sm font-medium text-gray-300 hover:text-white"
                      >
                        {tag}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* মেসেজ এরিয়া */}
              <div className="relative">
                <textarea
                  rows="4"
                  placeholder="আপনার প্রজেক্ট সম্পর্কে কিছু বলুন..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-pink-500 transition-all text-white placeholder:text-gray-600"
                />
              </div>

              {/* সাবমিট বাটন (Liquid Effect) */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-5 rounded-2xl font-black text-white uppercase tracking-[0.2em] shadow-xl shadow-purple-500/20 flex justify-center items-center gap-3 group"
              >
                সেন্ড করুন{" "}
                <Send
                  size={20}
                  className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>
            </form>
          </div>
          {/* নিচের ডেকোরেশন */}
          <div className="mt-10 flex justify-center gap-8 text-gray-600">
            <Globe
              size={20}
              className="hover:text-blue-400 cursor-pointer transition-colors"
            />
            <MessageSquare
              size={20}
              className="hover:text-purple-400 cursor-pointer transition-colors"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
