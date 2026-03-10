import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Target, Users, Award, Rocket, CheckCircle2 } from "lucide-react";

const About = () => {
  // মাউসের পজিশন ধরার জন্য ভ্যালু
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // মুভমেন্টটাকে স্মুথ (Smooth) করার জন্য স্প্রিং ইফেক্ট
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  // ১. ইমেজ কার্ড কতটুকু ঘুরবে (Rotation)
  const rotateX = useTransform(dy, [-300, 300], [15, -15]); // ১০-১৫ ডিগ্রির বেশি দেবেন না
  const rotateY = useTransform(dx, [-300, 300], [-15, 15]);

  // ২. ব্যাকগ্রাউন্ড ব্লব বা টেক্সট কতটুকু নড়বে (Movement)
  const shiftX = useTransform(dx, [-300, 300], [30, -30]);
  const shiftY = useTransform(dy, [-300, 300], [30, -30]);

  // মাউস নাড়ালে পজিশন আপডেট করার ফাংশন
  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  }
  const stats = [
    {
      label: "Active Readers",
      value: "50K+",
      icon: <Users className="text-blue-400" />,
    },
    {
      label: "Total Articles",
      value: "1.2K+",
      icon: <Award className="text-purple-400" />,
    },
    {
      label: "Daily Visits",
      value: "10K+",
      icon: <Rocket className="text-pink-400" />,
    },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative z-10 min-h-screen pt-32 pb-20 px-6 overflow-hidden  "
    >
      {/* Background Blobs for Atmosphere */}

      <motion.div
        style={{ x: shiftX, y: shiftY }} // মাউস মুভমেন্ট লজিক
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-0"
      />
      <motion.div
        style={{ x: shiftY, y: shiftX }} // বিপরীত মুভমেন্টের জন্য X এবং Y অদলবদল
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-0"
      />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section of About Page */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
              আমাদের গল্প
            </h4>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              আমরা কেন <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                ভিন্নধর্মী?
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              ২০২৬ সালের আধুনিক প্রযুক্তির সাথে তাল মিলিয়ে আমরা তৈরি করেছি এমন
              একটি প্ল্যাটফর্ম, যেখানে তথ্য শুধু শেয়ার হয় না, বরং এক একটি
              অভিজ্ঞতা হিসেবে উপস্থাপিত হয়। আমাদের লক্ষ্য হলো জটিল কোডিং এবং
              ডিজাইনকে সহজভাবে সবার কাছে পৌঁছে দেওয়া।
            </p>
            <div className="space-y-4">
              {[
                "হাই-কোয়ালিটি কন্টেন্ট",
                "আধুনিক ইউআই/ইউএক্স",
                "কমিউনিটি সাপোর্ট",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-white font-medium"
                >
                  <CheckCircle2 size={20} className="text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract Glass Image Card */}
          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }} // ৩ডি ইফেক্টের জন্য perspective জরুরি
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20"></div>
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-4 rounded-[3rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1761839258239-2be2146f1605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                alt="Our Team"
                className="w-full h-[400px] object-cover rounded-[2.5rem]"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] text-center group hover:bg-white/10 transition-all duration-500"
            >
              <div className="mb-6 flex justify-center scale-150 group-hover:scale-125 transition-transform">
                {stat.icon}
              </div>
              <h2 className="text-4xl font-black text-white mb-2">
                {stat.value}
              </h2>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission (Glass Box) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Target size={200} />
          </div>
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">
              আমাদের লক্ষ্য
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed italic">
              "আমরা বিশ্বাস করি প্রযুক্তি সবার জন্য উন্মুক্ত এবং সহজ হওয়া উচিত।
              আমাদের এই ব্লগ সাইটটি শুধু একটি ওয়েবসাইট নয়, এটি একটি জ্ঞান
              ভিত্তিক ডিজিটাল লাইব্রেরি যা ভবিষ্যৎ প্রজন্মের ডেভেলপারদের
              অনুপ্রাণিত করবে।"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
