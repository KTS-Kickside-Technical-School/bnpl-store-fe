import axios from "axios";

const getToken = () => {
    return localStorage.getItem("token");
};

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${getToken()}`
    }
});

export default axiosInstance;
