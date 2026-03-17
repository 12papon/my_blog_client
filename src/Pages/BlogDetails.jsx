import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBlogById } from "../Hooks/PostHooks/useGetBlogPost";
import { useParams } from "react-router";
import { useAuth } from "../Context/AuthorContext/AuthorContext";
import {
  Clock,
  User,
  Calendar,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Heart,
  Share2,
  Sparkles,
} from "lucide-react";
import RecommendedSection from "../Component/FeaturedSection/RecommendedSection"; // আলাদা ফাইলে থাকবে
import { useComment } from "../Hooks/Comment/PostComment/PostComment";
import { usePostComment } from "../Hooks/Comment/GetComment/GetCom";

const post = {
  id: 1,
  title: "২০২৬ সালের আধুনিক ওয়েব ডিজাইন এবং লাক্সারি ইউআই ট্রেন্ডস",
  category: "Design & Tech",
  author: "আরিফ রহমান",
  date: "১০ মার্চ, ২০২৬",
  readTime: "৮ মিনিট",
  image: "https://images.unsplash.com",
  content: `২০২৬ সালে ওয়েব ডিজাইন শুধুমাত্র তথ্যের আদান-প্রদান নয়, বরং এটি একটি ডিজিটাল অভিজ্ঞতা। আধুনিক প্রযুক্তির ছোঁয়ায় এখন ইন্টারফেসগুলো হয়ে উঠছে আরও বেশি 'ইমার্সিভ'। গ্লাস মরফিজম থেকে শুরু করে লিকুইড অ্যানিমেশন—সবকিছুই এখন ইউজারকে সাইটে আটকে রাখার জন্য ব্যবহার করা হচ্ছে। 

    এই আর্টিকেলে আমরা আলোচনা করবো কীভাবে পিক্সেল পারফেক্ট বর্ডার অ্যানিমেশন এবং ৩ডি প্যারাল্যাক্স ইফেক্ট আপনার সাধারণ ওয়েবসাইটকে একটি মাস্টারপিসে রূপান্তর করতে পারে। এছাড়া রিয়েক্ট রাউটার ভার্সন ৭ এবং ফ্রেমার মোশন ব্যবহারের মাধ্যমে কীভাবে হাই-এন্ড লাক্সারি ফিল আনা সম্ভব, তা আমরা বিস্তারিত দেখবো। 

    আপনি যদি একজন ডেভেলপার হিসেবে নিজেকে আগামী প্রজন্মের জন্য প্রস্তুত করতে চান, তবে আপনাকে শুধু কোডিং নয়, বরং ইউজার সাইকোলজি এবং ভিজ্যুয়াল হারমোনি নিয়েও কাজ করতে হবে। বর্তমান সময়ে ডার্ক মোড এবং নিয়ন গ্লো এর ব্যবহার বহুগুণ বেড়ে গেছে, যা ইউজারকে একটি প্রিমিয়াম ডিভাইসের অনুভূতি দেয়।`,
  likes: "১.৫K",
  comments: [
    {
      user: "সায়মা আহমেদ",
      text: "অসাধারণ আর্টিকেল! ইমেজ প্রিভিউ সেকশনটা জাস্ট অসাধারণ লেগেছে।",
    },
    {
      user: "তানজিল হোসেন",
      text: "রিড মোর এবং রিড লেস ফিচারটা ইউজার এক্সপেরিয়েন্স অনেক সহজ করে দিয়েছে।",
    },
    {
      user: "রকিবুল ইসলাম",
      text: "২০২৬ সালের ট্রেন্ড নিয়ে আরও এমন আর্টিকেল চাই। বিশেষ করে ৩ডি ইফেক্ট নিয়ে।",
    },
    {
      user: "ফারহানা হক",
      text: "কমেন্ট সেকশনের ডিজাইনটা অনেক ক্লিন এবং মডার্ন।",
    },
    {
      user: "জাহিদ হাসান",
      text: "অপূর্ব প্রেজেন্টেশন! গ্লাস মারফিজম ইফেক্টগুলো দারুণ কাজ করছে।",
    },
  ],
};

const BlogDetails = () => {
  const { user } = useAuth();
  const { mutate } = useComment();
  const BASE_URL = "http://localhost:8000";
  const { id } = useParams();
  const { data: comment } = usePostComment(id);
  const { data, isLoading } = useBlogById(id);
  const [comData, setComData] = useState("");

  console.log(comment);

  const date = new Date(data?.createdAt);
  const month = date?.toLocaleString("bn-BD", { month: "long" });
  const year = date?.toLocaleString("bn-BD", { year: "numeric" });
  const getDate = date?.toLocaleString("bn-BD", { day: "numeric" });

  const [isReadMore, setIsReadMore] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);

  // কন্টেন্ট স্লাইসিং লজিক
  // const displayContent = isReadMore
  //   ? post.content
  //   : post.content.slice(0, 400) + "...";

  const commentSectionRef = useRef(null); // কমেন্ট সেকশনের জন্য রেফারেন্স

  // স্ক্রল করার ফাংশন
  const scrollToComments = () => {
    commentSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      user: user?._id,
      post: data?._id,
      text: comData,
    };
    console.log(commentData);

    mutate(commentData);
    setComData("");
  };
  return (
    <div className="min-h-screen  bg-transparent text-white pt-30 md:pt-40 pb-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* --- ১. প্রিমিয়াম হেডার সেকশন --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            <Sparkles size={12} /> {data?.categories?.[0]}
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-8 italic">
            {data?.title}
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-xs font-bold uppercase tracking-widest border-y border-white/5 py-6">
            <span className="flex items-center gap-2">
              <User size={16} className="text-blue-500" /> {data?.author?.name}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-purple-500" /> {post.readTime}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-pink-500" />{" "}
              {`${getDate} ${month} ${year}`}
            </span>
          </div>
        </motion.div>

        {/* --- ২. সিনেমাটিক ইমেজ প্রিভিউ --- */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative h-[400px] md:h-[600px] rounded-[4rem] overflow-hidden mb-16 group shadow-2xl"
        >
          <img
            src={`${BASE_URL}${data?.featuredimage?.url}`}
            alt="Cover"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* --- ৩. ইন্টারঅ্যাকশন বার (Floating Style) --- */}
        <div className="flex items-center justify-between mb-12 bg-white/[0.02] backdrop-blur-xl border border-white/10 p-4 rounded-3xl">
          <div className="flex gap-6 pl-4">
            <button className="flex items-center gap-2 hover:text-pink-500 transition-colors">
              <Heart size={20} />{" "}
              {data?.likes?.length
                ? data?.likes?.length > 999
                  ? data?.likes?.length + "K"
                  : data?.likes?.length
                : "1.5K"}
            </button>
            <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <MessageSquare onClick={scrollToComments} size={20} />{" "}
              {comment?.length}
            </button>
          </div>
          <button className="p-3 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all">
            <Share2 size={18} />
          </button>
        </div>

        {/* --- ৪. কন্টেন্ট এরিয়া (Read More/Less) --- */}
        <div className="relative mb-20">
          <div className="text-lg md:text-xl text-gray-300 leading-[1.8] space-y-6">
            {data?.content}
          </div>

          <button
            onClick={() => setIsReadMore(!isReadMore)}
            className="mt-8 flex items-center gap-2 text-blue-400 font-black uppercase tracking-[0.2em] text-xs hover:gap-4 transition-all"
          >
            {isReadMore ? "Read Less" : "Read More"}
            {isReadMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* --- ৫. অ্যাডভান্সড কমেন্ট সেকশন --- */}
        <section
          ref={commentSectionRef}
          id="comment"
          className="bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-8 md:p-12 mb-20"
        >
          <h3 className="text-3xl font-black mb-10 flex items-center gap-4">
            Comments{" "}
            <span className="text-gray-600 text-lg">({comment?.length})</span>
          </h3>

          {/* কমেন্ট ইনপুট বক্স */}
          <div className="mb-12 relative group">
            <textarea
              onChange={(e) => setComData(e.target.value)}
              value={comData}
              placeholder="আপনার মতামত লিখুন..."
              className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 focus:outline-none focus:border-blue-500/50 transition-all text-white min-h-[120px]"
            />
            <button
              onClick={handleSubmit}
              className="absolute bottom-4 right-4 bg-blue-600 px-6 py-2 rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors"
            >
              Post
            </button>
          </div>

          <div className="space-y-8">
            {(showAllComments ? comment : comment?.slice(0, 3))?.map(
              (comm, i) => (
                <div
                  key={i}
                  className="flex gap-4 border-b border-white/5 pb-6"
                >
                  <img
                    src={comm.user.avatar}
                    alt={comm.user.name}
                    className="w-12 h-12 rounded-2xl bg-blue-500/20 flex-shrink-0"
                  />

                  <div>
                    <h4 className="font-bold text-white mb-1">
                      {comm.user.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{comm.text}</p>
                  </div>
                </div>
              ),
            )}
          </div>

          <button
            onClick={() => setShowAllComments(!showAllComments)}
            className="w-full py-4 mt-8 border border-white/5 rounded-2xl text-gray-500 font-bold hover:bg-white/5 transition-all text-sm"
          >
            {showAllComments ? "Show Less Comments" : "Load More Comments"}
          </button>
        </section>

        {/* --- ৬. রিকমেন্ডেড সেকশন (আলাদা ফাইল থেকে) --- */}
        <RecommendedSection />
      </div>
    </div>
  );
};

export default BlogDetails;
