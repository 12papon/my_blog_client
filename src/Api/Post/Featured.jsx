import axiosInstance from "../AxiosInstance/AxiosInstance";

export const getFeatured = async () => {
  const response = await axiosInstance.get("/featured");
  return response.data.data;
};
