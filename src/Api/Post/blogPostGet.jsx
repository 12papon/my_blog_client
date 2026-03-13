import axiosInstance from "../AxiosInstance/AxiosInstance";

export const getBlog = async (page, limit) => {
  const response = await axiosInstance.get("/post", {
    params: {
      page: page,
      limit: limit,
    },
  });

  return response.data;
};
