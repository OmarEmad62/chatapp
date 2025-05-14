const BaseUrl = import.meta.env.VITE_API_BASE_URL;

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: BaseUrl,
  withCredentials: true,
});