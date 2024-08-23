import axios from "axios";
export const BACKEND_URL = "https://bnpl-store-be.onrender.com";
const axiosInstance = axios.create({
  baseURL: `${BACKEND_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const getErrorMessage = (msg) => {
  if (axios.isAxiosError(msg) && msg.response) {
    return msg.response.data.message || msg.response.data.error;
  }
  return "An unknown error occurred";
};

export { axiosInstance, getErrorMessage };
