import React, { useState, useEffect } from "react";
import Hero from "../Component/FeaturedSection/Hero";
import FeaturedHomeCard from "../Component/FeaturedSection/FeaturedHomeCard";
import AboutSection from "../Component/FeaturedSection/AboutSection";
import ContactSection from "../Component/FeaturedSection/ContactSection";
import Login from "./Login";
import Signup from "./Signup";
import CommentPopup from "../Component/Common/CommentPopup";
import BlogDetails from "./BlogDetails";
import PageLoader from "../Component/Common/PageLoader";
import Profile from "./Profile";
const featuredPosts = [
  {
    _id: "1",
    title: "২০২৬ সালে ওয়েব ডেভেলপমেন্টের ভবিষ্যৎ ও AI এর প্রভাব",
    desc: "কিভাবে আর্টিফিশিয়াল ইন্টেলিজেন্স আমাদের কোডিং করার স্টাইল এবং ফ্রেমওয়ার্ক ব্যবহারের ধরন বদলে দিচ্ছে...",
    image: "https://thumbs.dreamstime.com/front/img/heroes/free/143461628.jpg",
    category: "Technology",
    author: "Zaman Tech",
    readTime: "5 min",
    createdAt: "2026-03-09T10:00:00.000Z",
  },
  {
    _id: "2",
    title: "গ্লাস-মরফিজম: মডার্ন ইউআই ডিজাইনের নতুন ট্রেন্ড",
    desc: "ওয়েবসাইটে কিভাবে প্রিমিয়াম গ্লাস ইফেক্ট এবং ফ্রেমার মোশন ব্যবহার করে ইউজারকে আটকে রাখা যায়...",
    image:
      "https://static.vecteezy.com/system/browse_category/image/45/large_People_cb1.jpg",
    category: "Design",
    author: "Creative Soul",
    readTime: "4 min",
    createdAt: "2026-03-08T12:30:00.000Z",
  },
  {
    _id: "3",
    title: "রিঅ্যাক্ট এবং নোড জেএস দিয়ে রিয়েল-অয়ার্ল্ড প্রজেক্ট",
    desc: "একটি পূর্ণাঙ্গ ব্লগ সাইট তৈরির ধাপগুলো এবং ডাটাবেজ ম্যানেজমেন্টের সেরা উপায়গুলো জানুন...",
    image:
      "https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01.jpg",
    category: "Coding",
    author: "Dev Master",
    readTime: "7 min",
    createdAt: "2026-03-07T09:15:00.000Z",
  },
];
const posts = [
  {
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
  },
];
const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  if (loading) return <PageLoader />;
  return (
    <div>
      <Hero />
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {featuredPosts.map((post) => (
          <FeaturedHomeCard key={post._id} data={post} />
        ))}
      </section>
      <AboutSection />
      <section>
        <ContactSection />
      </section>
      <Login />
      <Signup />
      <CommentPopup />
      <BlogDetails post={posts[0]} />
      <Profile />
    </div>
  );
};

export default Home;
