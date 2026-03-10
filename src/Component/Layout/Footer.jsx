import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 px-4 pb-10">
      {/* Glassmorphism Main Container */}
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block"
            >
              MyBlog
            </motion.h2>
            <p className="text-gray-300 leading-relaxed">
              ২০২৬ সালের আধুনিক প্রযুক্তিতে তৈরি আপনার পছন্দের ব্লগিং
              প্ল্যাটফর্ম। যেখানে জ্ঞান শেয়ার করা হয় একদম নতুন আঙ্গিকে।
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                  className="p-3 bg-white/10 rounded-xl text-white transition-all border border-white/10"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-300">
              {["Home", "Latest Blogs", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="h-[2px] w-0 bg-blue-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span>support@myblog.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span>+৮৮০ ১২৩৪৫৬৭৮৯০</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              নতুন সব পোস্টের আপডেট পেতে সাবস্ক্রাইব করুন।
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-500 p-1.5 rounded-lg text-white transition-all">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear}{" "}
            <span className="text-blue-400 font-medium">MyBlog</span>. All
            Rights Reserved.
            <br className="md:hidden" /> Developed with ❤️ by Papon khan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
