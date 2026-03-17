import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  ArrowUpRight,
  Clock,
  User,
  Sparkles,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";
import CommentPopup from "../Common/CommentPopup";
import { usePostComment } from "../../Hooks/Comment/GetComment/GetCom";

const BlogCard = ({ post }) => {
  const { data, idLoading } = usePostComment(post._id);

  // ১. পপআপ খোলা বা বন্ধ রাখার জন্য স্টেট
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  // ২. পপআপ খোলার ফাংশন
  const openModal = () => setIsCommentOpen(true);

  // ৩. পপআপ বন্ধ করার ফাংশন
  const closeModal = () => setIsCommentOpen(false);
  const BASE_URL = "http://localhost:8000";
  console.log(post);

  return (
    <>
      <Link to={`/post/${post._id}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="relative group w-full max-w-[400px] bg-white/[0.01] backdrop-blur-3xl rounded-[3rem] overflow-hidden border border-white/10 transition-all duration-500 shadow-2xl"
        >
          {/* --- ১. লাক্সারি বর্ডার এনিমেশন (হোভার করলে জ্বলে উঠবে) --- */}
          <div className="absolute inset-0 rounded-[3rem] p-[1.5px] pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 50%, #3b82f6 70%, #a855f7 90%, transparent 100%)",
              }}
              className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%]"
            />
            <div className="absolute inset-[1.5px] bg-[#030712]/80 rounded-[2.9rem]" />
          </div>

          {/* --- ২. ইমেজ সেকশন (ইন্টারেক্টিভ) --- */}
          <div className="relative h-[260px] overflow-hidden m-3 rounded-[2.5rem]">
            <img
              src={`${BASE_URL}${post.featuredimage?.url}`}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* ক্যাটাগরি ব্যাজ */}
            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-center gap-2">
              <Sparkles size={12} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">
                {post.categories?.[0]}
              </span>
            </div>
          </div>

          {/* --- ৩. কন্টেন্ট সেকশন --- */}
          <div className="relative z-10 p-8 pt-4">
            <div className="flex items-center gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-4">
              <span className="flex items-center gap-1">
                <User size={12} /> {post.author?.name}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {post.readTime || 5}
              </span>
            </div>

            <h3 className="text-2xl font-black text-white leading-tight mb-4 group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
              {post.excerpt}
            </p>
            {/* --- ৪. ইন্টারেক্টিভ সেকশন (Like, Comment, Share) --- */}
            <div className="flex items-center justify-between py-6 border-y border-white/5 mb-6 group-hover:border-white/10 transition-colors">
              <div className="flex items-center gap-6">
                {/* লাইক বাটন */}
                <motion.button
                  whileTap={{ scale: 1.5 }}
                  className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors group/like"
                >
                  <Heart
                    size={18}
                    className="group-hover/like:fill-pink-500 transition-all"
                  />
                  <span className="text-xs font-black tracking-widest">
                    {post.likes?.length > 999
                      ? post.likes?.length + "K"
                      : post.likes?.length || "1.2K"}
                  </span>
                </motion.button>

                {/* কমেন্ট বাটন */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openModal();
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors group/comm"
                >
                  <MessageCircle
                    size={18}
                    className="group-hover/comm:fill-blue-400/20"
                  />
                  <span className="text-xs font-black tracking-widest">
                    {data?.length || "45"}
                  </span>
                </button>

                {/* শেয়ার বাটন */}
                <button className="flex items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors">
                  <Share2 size={18} />
                </button>
              </div>

              {/* সেভ বা বুকমার্ক */}
              <button className="text-gray-500 hover:text-yellow-500 transition-colors">
                <Bookmark size={18} />
              </button>
            </div>

            {/* রিড মোর বাটন */}
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-[0.2em] group/btn"
            >
              Read Article
              <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover/btn:bg-blue-600 transition-all hover:rotate-45">
                <ArrowUpRight size={14} />
              </div>
            </motion.button>
          </div>
        </motion.div>
      </Link>
      <CommentPopup
        isOpen={isCommentOpen}
        onClose={closeModal}
        postTitle={post?.title}
        commentData={data}
      />
    </>
  );
};

export default BlogCard;
