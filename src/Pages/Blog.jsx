import { useState, useEffect } from "react";
import BlogCard from "../Component/SingleBlog/BlogCard";
import SingleCardLoader from "../Component/Common/SingleCardLoader";
import Pagination from "../Component/Common/Pagination/BlogPagePagination/Pagination";
const posts = [
  {
    id: 1,
    title: "২০২৬ সালের আধুনিক রিয়েক্ট রাউটিং গাইড",
    description:
      "নতুন পিক্সেল-পারফেক্ট রাউটিং সিস্টেম নিয়ে বিস্তারিত আলোচনা যা আপনার অ্যাপকে করবে সুপার ফাস্ট।",
    image: "https://images.unsplash.com",
    category: "Development",
    author: "Arif Rahman",
    readTime: "5 min",
    likes: 45,
    comments: "nice",
  },
  {
    id: 1,
    title: "২০২৬ সালের আধুনিক রিয়েক্ট রাউটিং গাইড",
    description:
      "নতুন পিক্সেল-পারফেক্ট রাউটিং সিস্টেম নিয়ে বিস্তারিত আলোচনা যা আপনার অ্যাপকে করবে সুপার ফাস্ট।",
    image: "https://images.unsplash.com",
    category: "Development",
    author: "Arif Rahman",
    readTime: "5 min",
  },
  {
    id: 1,
    title: "২০২৬ সালের আধুনিক রিয়েক্ট রাউটিং গাইড",
    description:
      "নতুন পিক্সেল-পারফেক্ট রাউটিং সিস্টেম নিয়ে বিস্তারিত আলোচনা যা আপনার অ্যাপকে করবে সুপার ফাস্ট।",
    image: "https://images.unsplash.com",
    category: "Development",
    author: "Arif Rahman",
    readTime: "5 min",
  },

  // আরও ডাটা...
];
const Blog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ডাটা ফেচ করার ডামি লজিক
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:pt-35 pt-25 p-10 bg-transparent">
        {
          loading
            ? [1, 2, 3, 4, 5, 6].map((n) => <SingleCardLoader key={n} />) // লোডিং অবস্থায় স্কেলিটন দেখাবে
            : posts.map((post) => <BlogCard key={post.id} post={post} />) // ডাটা আসলে কার্ড দেখাবে
        }
      </div>
      <Pagination />
    </>
  );
};

export default Blog;
