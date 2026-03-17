import { useState, useEffect } from "react";
import BlogCard from "../Component/SingleBlog/BlogCard";
import SingleCardLoader from "../Component/Common/SingleCardLoader";
import Pagination from "../Component/Common/Pagination/BlogPagePagination/Pagination";
import { useBlog } from "../Hooks/PostHooks/useGetBlogPost";
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
  const [page, setPage] = useState(1);
  const { data, isLoading } = useBlog(page);
  console.log(data?.totalPage);

  // ৩. পেজিনেশন প্রপসগুলো তৈরি করা (এগুলোই তুমি পাস করবে)
  const paginationProps = {
    page: data?.currentPage || page, // বর্তমান পেজ নম্বর
    totalPages: data?.totalPage || 1, // মোট পেজ সংখ্যা (সার্ভার থেকে আসা)
    setPage: setPage, // পেজ পরিবর্তনের ফাংশন
    hasNextPage: (data?.currentPage || page) < (data?.totalPage || 1), // পরের পেজ আছে কি না
    hasPrevPage: (data?.currentPage || page) > 1, // আগের পেজ আছে কি না
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:pt-35 pt-25 p-10 bg-transparent">
        {
          isLoading
            ? [1, 2, 3, 4, 5, 6].map((n) => <SingleCardLoader key={n} />) // লোডিং অবস্থায় স্কেলিটন দেখাবে
            : data?.data.map((post) => <BlogCard key={post.id} post={post} />) // ডাটা আসলে কার্ড দেখাবে
        }
      </div>
      <Pagination {...paginationProps} />
    </>
  );
};

export default Blog;
