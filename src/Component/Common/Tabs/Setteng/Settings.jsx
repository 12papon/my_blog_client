import React from "react";
import { motion } from "framer-motion"; // এনিমেশনের জন্য
import { LogIn, ShieldAlert, User, Globe } from "lucide-react"; // আইকনগুলোর জন্য

const Settings = () => {
  return (
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
              <LogIn size={20} className="rotate-180" /> Logout from Account
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
  );
};

export default Settings;
