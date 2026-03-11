import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router";

const Signup = () => {
  //formData put
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  //put Error
  const [error, setError] = useState({});

  //Validation function
  const validate = () => {
    let newErrors = {};
    // নাম চেক (কমপক্ষে ৩ অক্ষর)
    if (!formData.name.trim()) {
      newErrors.name = "নাম অবশ্যই দিতে হবে";
    } else if (formData.name.length < 3) {
      newErrors.name = "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
    }

    // ইমেইল প্যাটার্ন চেক
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "ইমেইল প্রয়োজন";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "সঠিক ইমেইল ফরম্যাট দিন";
    }
    // পাসওয়ার্ড প্যাটার্ন (কমপক্ষে ৬ অক্ষর, ১টি বড় হাতের অক্ষর ও ১টি সংখ্যা)
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!formData.password) {
      newErrors.password = "পাসওয়ার্ড দিতে হবে";
    } else if (!passwordPattern.test(formData.password)) {
      newErrors.password =
        "পাসওয়ার্ডে অন্তত ৬ অক্ষর, ১টি বড় হাতের অক্ষর ও ১টি সংখ্যা থাকতে হবে";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0; // কোনো এরর না থাকলে true দিবে
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("সব ঠিক আছে! API কল করা যাবে:", formData);
    } else {
      console.log("ভ্যালিডেশন ফেইল করেছে", error);
    }
  };
  return (
    <div className="relative min-h-screen py-20 w-full flex items-center justify-center bg-transparent overflow-hidden font-sans px-6">
      {/* --- ডায়নামিক মেশ ব্যাকগ্রাউন্ড --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -50, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-pink-600/10 blur-[130px] rounded-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-[480px] bg-white/[0.01] backdrop-blur-[60px] border border-white/5 rounded-[4.5rem] p-12 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.8)]"
      >
        <div className="text-center mb-10">
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
          <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg rotate-12">
            <Zap className="text-white fill-white" size={32} />
          </div>
          <h2 className="text-4xl font-black text-white tracking-tight mb-2 uppercase">
            Create Space
          </h2>
          <p className="text-gray-500 text-xs font-bold tracking-[0.4em] uppercase">
            নতুন দিগন্তের শুরু
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <div className="relative">
              <User
                className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600"
                size={18}
              />
              <input
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
                name="name"
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-5 pl-16 pr-6 text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-700 font-medium"
              />
            </div>
            {error.password && (
              <p className="text-red-500 text-sm text-center font-medium px-4">
                {error.name}
              </p>
            )}
          </div>
          <div>
            <div className="relative">
              <Mail
                className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600"
                size={18}
              />
              <input
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-5 pl-16 pr-6 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-700 font-medium"
              />
            </div>
            {error.password && (
              <p className="text-red-500 text-sm text-center font-medium px-4">
                {error.email}
              </p>
            )}
          </div>
          <div>
            <div className="relative">
              <Lock
                className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600"
                size={18}
              />
              <input
                type="password"
                placeholder="Create Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
                className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-5 pl-16 pr-6 text-white focus:outline-none focus:border-pink-500/50 transition-all placeholder:text-gray-700 font-medium"
              />
            </div>
            {error.password && (
              <p className="text-red-500 text-sm text-center font-medium px-4">
                {error.password}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-500/5 rounded-xl border border-green-500/10 w-fit">
            <ShieldCheck size={14} className="text-green-500" />
            <span className="text-[9px] text-green-500 font-black uppercase tracking-widest">
              End-to-End Encrypted
            </span>
          </div>

          <motion.button
            whileHover={{
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(219, 39, 119, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 py-5 rounded-[2rem] font-black text-white uppercase tracking-widest shadow-2xl transition-all mt-4"
          >
            Join Evolution
          </motion.button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            Already a member?{" "}
            <Link
              to="/login"
              className="text-white hover:text-purple-400 transition-colors ml-1 border-b border-white/20"
            >
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
