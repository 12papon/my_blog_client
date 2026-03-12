import { useMutation, useQueryClient } from "@tanstack/react-query";
import { post } from "../../Api/Post/Post";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export const useCreatePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: post,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("পোস্ট সফলভাবে তৈরি হয়েছে! 🎉");

      //   if (data.data?._id) {
      //     navigate(`/blogdetails/${data.data?._id}`);
      //   }
    },
    onError: (error) => {
      const message = error.response?.data?.message || "কিছু একটা ভুল হয়েছে!";
      toast.error(message);
      console.log(message);
      
    },
  });
};
