import axiosInstance from "../../AxiosInstance/AxiosInstance";

export const getComment = async (id) => {
  const response = await axiosInstance.get(`comment/${id}`);
  return response.data.data;
};
