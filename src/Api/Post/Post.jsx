import axiosInstance from "../AxiosInstance/AxiosInstance";

export const post = async (postData) => {
  const response = await axiosInstance.post("/createpost", postData, {
    headers: {
      "Content-Type": undefined,
    },
  });
  return response.data;
};
