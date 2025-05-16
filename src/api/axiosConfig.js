import axios from "axios";
import { getCookie } from "cookies-next";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

// Get token from cookies
const token = getCookie("accesstoken");

// Get the base URL from environment variables
const apiBaseURL = process.env.SERVER_URL;

// Create Axios instance
const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://rapidpay-server-1.onrender.com",
  headers: {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

export default axiosInstance;
