import { createLike } from "../../Api/Like/Like";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ postId, uId }) => createLike({ postId, uId }),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
    onError: (err) => {
      toast.error(err.message || "Like has Problem");
    },
  });
};
