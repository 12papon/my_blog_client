import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { signUp, login } from "../Api/Auth/Auth";
import { useAuth } from "../Context/AuthorContext/AuthorContext";
import toast from "react-hot-toast";

export const useSignup = () => {
  const navigate = useNavigate();
  const { Login } = useAuth();
  return useMutation({
    mutationFn: signUp, // এপিআই ফাংশনটি এখানে পাস করো
    onSuccess: (data) => {
      console.log(data);
      toast.success("অ্যাকাউন্ট তৈরি সফল হয়েছে!");
      //if (data.user) Login(data.user); // সাকসেস হলে অটো লগইন
      // ৩. একটু সময় ধরে "প্রসেসিং" রাখার জন্য setTimeout (যেমন: ১.৫ সেকেন্ড)
      setTimeout(() => {
        if (data.data) {
          Login(data.data); // ৪. অটো লগইন (Context আপডেট)
        }
        navigate("/"); // ৫. হোম পেজে পাঠিয়ে দেওয়া
      }, 1500);
    },
  });
};

//login hook
export const useLogin = () => {
  const navigate = useNavigate();
  const { Login } = useAuth();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.message);

      setTimeout(() => {
        if (data.data) {
          Login(data.data);
        }
        navigate("/", { replace: true });
      }, 1000);
    },
  });
};
