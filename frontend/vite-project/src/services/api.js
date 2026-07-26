import axios from "axios";

const API_URL = "http://localhost:4000/api";

const api = axios.create({
    baseURL: API_URL
});

api.interceptors.request.use(
    (config) => {
        try {
            const token = localStorage.getItem("token");
            console.log(token);

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        } catch (error) {
            console.error("Error in request interceptor:", error);
            return config;
        }
    }
);

export default api;