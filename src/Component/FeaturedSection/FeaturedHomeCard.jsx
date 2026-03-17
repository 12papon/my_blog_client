import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";

const FeaturedHomeCard = ({ data }) => {
  console.log(data);
  const BASE_URL = "http://localhost:8000";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[450px] w-full cursor-pointer rounded-[2.5rem] overflow-hidden shadow-2xl"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${BASE_URL}${data?.featuredimage?.url}`}
          alt={data?.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent group-hover:via-blue-900/40 transition-colors duration-500"></div>
      </div>

      {/* Glassmorphism Content Box (Floating Style) */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-6 rounded-[2rem] shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2">
          {/* Badge & Meta */}
          <div className="flex items-center justify-between mb-4">
            <span className="flex items-center gap-2 bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              <Zap size={12} fill="white" />{" "}
              {data?.categories?.[0] || "Trending"}
            </span>
            <span className="text-white/60 text-xs font-medium flex items-center gap-1">
              {data?.readTime || "4 min"} Read
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors">
            {data?.title}
          </h3>

          {/* Short Excerpt */}
          <p className="text-white/70 text-sm line-clamp-2 mb-6 font-light leading-relaxed">
            {data?.excerpt ||
              "একটি প্রিমিয়াম রিডিং অভিজ্ঞতা যা আপনাকে দেবে নতুন সব তথ্য..."}
          </p>

          {/* Bottom Action */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-blue-400 p-0.5">
                <img
                  src="https://images.unsplash.com/photo-1761839259488-2bdeeae794f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                  className="w-full h-full rounded-full object-cover"
                  alt="author"
                />
              </div>
              <span className="text-white text-xs font-semibold">
                {data?.author?.name || "Admin"}
              </span>
            </div>
            <Link to={`/post/${data?._id}`}>
              <motion.div
                whileHover={{ rotate: 45 }}
                className="p-2.5 bg-blue-600 rounded-full text-white shadow-lg shadow-blue-500/50"
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default FeaturedHomeCard;
