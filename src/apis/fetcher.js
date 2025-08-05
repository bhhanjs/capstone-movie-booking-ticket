import {
  API_BASE_URL,
  TOKEN_CYBERSOFT,
  USER_LOCAL_STORAGE,
} from "@/constants/config";
import axios from "axios";

// Fetcher function
const fetcher = axios.create({
  baseURL: API_BASE_URL,
  headers: {
   tokencybersoft: TOKEN_CYBERSOFT,
  },
});

// axio interceptors to intercept requuest before sending
fetcher.interceptors.request.use((config) => {
  console.log("config request object:", config);

  // Adding the token from the localStorage if it exists
  let token = "";
  try {
    const user = JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE));
    token = user?.accesstoken || "";
  } catch (error) {
    console.log("Error intercepting request token:", error);
    throw error;
  }

  // If token exists, add it to the config.headers, adding an Authorization property
  if (!token) return config;
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

export default fetcher