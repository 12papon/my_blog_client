import axiosInstance from "../AxiosInstance/AxiosInstance";

export const createLike = async ({ postId, uId }) => {
  const response = await axiosInstance.post(`/like/${postId}`, { uId });
  return response.data.data;
};
