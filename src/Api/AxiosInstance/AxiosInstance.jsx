import axios from "axios";
import toast from "react-hot-toast";

// ১. বেস কনফিগারেশন তৈরি
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // .env থেকে URL নেবে
  timeout: 10000, // ১০ সেকেন্ড পর রিকোয়েস্ট ক্যানসেল হয়ে যাবে
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// // ২. Request Interceptor (টোকেন পাঠানোর জন্য)
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const token = user?.token; // তোমার লোকাল স্টোরেজ থেকে টোকেন নিচ্ছে

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`; // প্রতি রিকোয়েস্টে টোকেন যোগ করবে
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// ৩. Response Interceptor (এরর হ্যান্ডেল করার জন্য)
axiosInstance.interceptors.response.use(
  (response) => response, // সফল হলে ডাটা সরাসরি পাঠিয়ে দেবে
  (error) => {
    // ২. ব্যাকএন্ড থেকে আসা মেসেজটি ধরো
    const message =
      error.response?.data?.message || "সার্ভারের সাথে যোগাযোগ করা যাচ্ছে না!";
    if (error.response?.status === 401) {
      // টোকেন এক্সপায়ার হলে বা ইউজার আন-অথরাইজড হলে অটো লগআউট
      localStorage.removeItem("user");
      // টোস্ট দেখিয়ে তারপর রিডিরেক্ট করা ভালো
      toast.error("সেশন শেষ! আবার লগইন করুন।");
      window.location.href = "/login";
    } else {
      // ৩. অন্য সব ধরনের এপিআই এররের জন্য টোস্ট দেখাও
      toast.error(message);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
