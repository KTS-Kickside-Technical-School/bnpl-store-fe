// axiosConfig.js
import axios from "axios";

// Get token from localStorage
const getToken = () => {
    return localStorage.getItem("token");
};

// Create Axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,  // Vite env variables should start with VITE_
    timeout: 100000, // Set a timeout (optional)
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${getToken()}` // Call the function to get the token
    }
});

export default axiosInstance;
