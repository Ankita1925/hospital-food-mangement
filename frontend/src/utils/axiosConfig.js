import axios from "axios";

// Create an Axios instance with a base URL
const apiClient = axios.create({
    baseURL: "http://localhost:8080", // Replace with your backend URL
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
