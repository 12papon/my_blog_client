import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Target,
  Users,
  Award,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

const AboutSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const rotateX = useTransform(dy, [-300, 300], [10, -10]);
  const rotateY = useTransform(dx, [-300, 300], [-10, 10]);

  function handleMouseMove(e) {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  }

  const team = [
    {
      name: "আরিফ রহমান",
      role: "Lead Developer",
      img: "https://i.pravatar.cc",
    },
    {
      name: "সায়মা আহমেদ",
      role: "UI/UX Designer",
      img: "https://i.pravatar.cc",
    },
    {
      name: "তানজিল হোসেন",
      role: "Content Specialist",
      img: "https://i.pravatar.cc",
    },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full py-24 px-6 bg-transparent overflow-hidden text-white"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ১ম অংশ: হিরো ও ইমেজ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">
              Explore Our Story
            </h4>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1]">
              ভবিষ্যতের প্রযুক্তিতে{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                এক ধাপ এগিয়ে
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              আমরা শুধু কোড করি না, আমরা ডিজিটাল অভিজ্ঞতা গড়ি। ২০২৬ সালের আধুনিক
              টুলস এবং ফ্রেমওয়ার্ক ব্যবহার করে আমরা আপনার স্বপ্নকে বাস্তবে রূপ
              দিই।
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-bold text-white shadow-lg shadow-blue-500/20 group transition-all"
            >
              আমাদের সাথে যোগ দিন{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </motion.button>
          </motion.div>

          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-[3rem] group-hover:bg-purple-500/20 transition-colors duration-500" />
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-3 rounded-[3rem]">
              <img
                src="https://images.unsplash.com/photo-1761839258575-038fef381ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-[450px] object-cover rounded-[2.5rem]"
                alt="Team Working"
              />
            </div>
          </motion.div>
        </div>

        {/* ২য় অংশ: টিম মেম্বারস */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">আমাদের দক্ষ কারিগর</h2>
            <p className="text-gray-500 uppercase tracking-widest text-sm">
              Meet the minds behind the magic
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-center hover:bg-white/10 transition-all group"
              >
                <img
                  src={member.img}
                  className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-blue-500/30 p-1 group-hover:border-purple-500 transition-colors"
                  alt={member.name}
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-6">{member.role}</p>
                <div className="flex justify-center gap-4 text-gray-500">
                  <Github
                    size={18}
                    className="hover:text-white cursor-pointer"
                  />
                  <Twitter
                    size={18}
                    className="hover:text-white cursor-pointer"
                  />
                  <Linkedin
                    size={18}
                    className="hover:text-white cursor-pointer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ৩য় অংশ: ভিশন কার্ড (Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 text-center relative overflow-hidden"
        >
          <Target className="absolute -top-10 -right-10 text-white/5 w-64 h-64" />
          <h2 className="text-3xl font-bold mb-6 italic">
            "আমাদের লক্ষ্য হলো প্রযুক্তির মাধ্যমে মানুষের জীবনকে সহজ এবং সুন্দর
            করে তোলা।"
          </h2>
          <div className="flex justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} /> উদ্ভাবন
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} /> সততা
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} /> শ্রেষ্ঠত্ব
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
