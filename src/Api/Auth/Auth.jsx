import axiosInstance from "../AxiosInstance/AxiosInstance";

// সাইনআপ এপিআই কল
export const signUp = async (formData) => {
  const response = await axiosInstance.post("/signup", formData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axiosInstance.post("/login", credentials);
  return response.data;
};
