import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../../Api/Post/blogPostGet";
import { getBlogById } from "../../Api/Post/SinglePost";

export const useBlog = (page, limit = 6) => {
  return useQuery({
    queryKey: ["posts", page, limit], // পেজ নম্বর চেঞ্জ হলে অটোমেটিক ডাটা রি-ফেচ হবে
    queryFn: () => getBlog(page, limit),
    // ৩. (ঐচ্ছিক কিন্তু জরুরি) পেজ চেঞ্জ করার সময় আগের ডাটা ধরে রাখতে
    placeholderData: (previousData) => previousData,
  });
};

export const useBlogById = (id) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getBlogById(id),
    enabled: !!id, // আইডি থাকলে তবেই কোয়েরি চলবে
  });
};
