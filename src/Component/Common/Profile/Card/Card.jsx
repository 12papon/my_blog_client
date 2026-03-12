import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../../Context/AuthorContext/AuthorContext";
import {
  Sparkles,
  MapPin,
  Calendar,
  Mail,
  Github,
  Twitter,
  Globe,
} from "lucide-react";

const Card = () => {
  const { user } = useAuth();
  const date = new Date(user.joinDate);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  console.log(user.socialLinks);
  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
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
  );
};

export default Card;
