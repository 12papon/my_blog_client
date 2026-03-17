import { useQuery } from "@tanstack/react-query";
import { getComment } from "../../../Api/comment/get/GetComment";

export const usePostComment = (id) => {
  return useQuery({
    queryKey: ["comment", id],
    queryFn: () => getComment(id),
  });
};
