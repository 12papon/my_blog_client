import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CommentPopupStyle.css";
import {
  X,
  Send,
  MessageSquare,
  Heart,
  Sparkles,
  Smile,
  Image as ImageIcon,
} from "lucide-react";
import { useAuth } from "../../Context/AuthorContext/AuthorContext";
import { useComment } from "../../Hooks/Comment/PostComment/PostComment";
import toast from "react-hot-toast";

const CommentPopup = ({ isOpen, onClose, postTitle, commentData, id, img }) => {
  const { user } = useAuth();
  const { mutate } = useComment();

  const [comment, setComment] = useState("");

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // ১২ ঘণ্টার ফরম্যাটে (AM/PM) দেখানোর জন্য
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      user: user?._id,
      post: id,
      text: comment,
    };
    if(!commentData.text){
      toast.error("কোন কমেন্ট লিক্ষা")
    }
    mutate(commentData);
    setComment("");
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* ১. ব্যাকগ্রাউন্ড ওভারলে (ব্লার ইফেক্ট) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* ২. মেইন কমেন্ট পোর্টাল (লাক্সারি কার্ড) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[500px] bg-white/[0.03] backdrop-blur-[50px] border border-white/10 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] overflow-hidden"
          >
            {/* ৩. অ্যানিমেটেড বর্ডার ফ্লো (আপনার সিগনেচার স্টাইল) */}
            <div className="absolute inset-0 p-[1.5px] rounded-[3.5rem] overflow-hidden pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-30"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 40%, #3b82f6 50%, #a855f7 60%, transparent 80%)",
                }}
              />
              <div className="absolute inset-[1.5px] bg-[#030712]/95 rounded-[3.4rem]" />
            </div>

            {/* ৪. কন্টেন্ট এরিয়া */}
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                    <MessageSquare size={12} /> Discussion Portal
                  </div>
                  <div className="flex items-center space-x-3">
                    <h2 className="text-2xl font-black text-white leading-tight">
                      আপনার চিন্তা{" "}
                      <span className="text-gray-500 text-lg">শেয়ার করুন</span>
                    </h2>
                    <p className="text-gray-700 w-9 h-9 p-1.5 bg-gray-50 font-bold flex items-center justify-center rounded-full text-[12px] italic">
                      {commentData?.length || 45}
                    </p>
                  </div>

                  <p className="text-gray-500 text-[10px] mt-1 italic">
                    Post: {postTitle}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* কমেন্ট লিস্ট (Scrollable) */}
              <div className="max-h-[350px] overflow-y-auto mb-8 pr-2 custom-scrollbar space-y-6">
                {commentData?.map((data) => {
                  return (
                    <div
                      key={data?._id}
                      className="max-h-[300px] overflow-y-auto mb-8 pr-4 space-y-6 custom-scrollbar"
                    >
                      {/* ডামি কমেন্ট ১ */}
                      <div className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px]">
                          <div className="w-full h-full bg-[#030712] rounded-[14px] flex items-center justify-center font-bold text-white text-xs">
                            <img
                              className="w-full h-full bg-[#030712] rounded-[14px] flex items-center justify-center font-bold text-white text-xs"
                              src={img}
                              alt={img}
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm font-black mb-1 group-hover:text-blue-400 transition-colors">
                            {data?.user?.name}
                            <span className="text-gray-600 text-[9px] font-medium ml-2">
                              {new Date(data?.createdAt).toLocaleString(
                                "bn-BD",
                                options,
                              )}
                            </span>
                          </p>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {data?.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ইনপুট সেকশন */}
              <div className="relative mt-auto">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="এখানে লিখুন..."
                  className="w-full bg-white/5 border border-white/10 rounded-[2rem] p-6 pr-20 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none placeholder:text-gray-700"
                />

                <div className="absolute right-4 bottom-4 flex items-center gap-2">
                  <button
                    onClick={() => {
                      console.log("emoiji clicked");
                    }}
                    className="p-2 text-gray-500 hover:text-white transition-colors"
                  >
                    <Smile size={20} />
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSubmit}
                    className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-600/20"
                  >
                    <Send size={18} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommentPopup;
