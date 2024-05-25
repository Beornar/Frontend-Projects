import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000,
});

export const baseService = {

    get: async (endpoint, configs = {}) => {
        try {
            const response = await axiosInstance.get(endpoint, configs);
            return response;

        } catch (error) {
            console.log(`GET ERROR ${endpoint}, ${error}`);

        }

    },

    post: async(endpoint, data, configs) => {
        try {
            const response = await axiosInstance.post(endpoint, data, configs);
            return response;
            
        } catch (error) {
            console.log(`POST ERROR ${endpoint}, ${error}`);
            
        }
    }
}