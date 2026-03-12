import Hero from "../Component/FeaturedSection/Hero";
import FeaturedHomeCard from "../Component/FeaturedSection/FeaturedHomeCard";
import AboutSection from "../Component/FeaturedSection/AboutSection";
import ContactSection from "../Component/FeaturedSection/ContactSection";
import BlogDetails from "./BlogDetails";
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
const Home = () => {
  return (
    <div className="md:pt-30">
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
    </div>
  );
};

export default Home;
