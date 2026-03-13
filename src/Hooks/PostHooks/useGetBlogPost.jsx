import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../../Api/Post/blogPostGet";

export const useBlog = (page, limit = 10) => {
  return useQuery({
    queryKey: ["posts", page, limit], // পেজ নম্বর চেঞ্জ হলে অটোমেটিক ডাটা রি-ফেচ হবে
    queryFn: () => getBlog(page, limit),

    // ৩. (ঐচ্ছিক কিন্তু জরুরি) পেজ চেঞ্জ করার সময় আগের ডাটা ধরে রাখতে
    placeholderData: (previousData) => previousData,
  });
};
