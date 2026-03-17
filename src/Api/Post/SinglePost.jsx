import axiosInstance from "../AxiosInstance/AxiosInstance";

export const getBlogById = async (id) => {
  const response = await axiosInstance.get(`post/${id}`);
  return response.data.data;
};
