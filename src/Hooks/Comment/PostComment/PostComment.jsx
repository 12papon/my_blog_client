import { createCom } from "../../../../../Server/services/comment/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
export const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createCom(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment"] });
      toast.success("কমেন্ট সফলভাবে যোগ করা হয়েছে!");
    },
    onError: (error) => {
      toast.error(error.message || "কিছু একটা ভুল হয়েছে");
    },
  });
};
