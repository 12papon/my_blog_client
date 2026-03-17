import { useQuery } from "@tanstack/react-query";
import { getFeatured } from "../../Api/Post/Featured";

export const useFeatured = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getFeatured,
  });
};
