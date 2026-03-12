import axiosInstance from "../AxiosInstance/AxiosInstance";

export const post = async (postData) => {
  const response = await axiosInstance.post("/createpost", postData);
  return response.data;
};
