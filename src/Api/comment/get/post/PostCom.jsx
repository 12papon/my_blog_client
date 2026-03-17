import axiosInstance from "../../../AxiosInstance/AxiosInstance";

export const createComment = async (data) => {
  const response = await axiosInstance.post("/postcomment", data);
  return response.data.data;
};
