import { createComment } from "../../../Api/comment/get/post/PostCom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
export const useComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["comment"],
    mutationFn: (commentData) => createComment(commentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment"] });
      toast.success("কমেন্ট সফলভাবে যোগ করা হয়েছে!");
    },
    onError: (error) => {
      toast.error(error.message || "কিছু একটা ভুল হয়েছে");
    },
  });
};
