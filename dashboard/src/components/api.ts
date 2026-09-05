import axios from "axios";

const configuredApiUrl =
  import.meta.env.VITE_API_URL?.trim() ||
  "https://full-stack-stock-trading-platform-js09.onrender.com";

const baseURL = configuredApiUrl.replace(/\/+$/, "");

export const api = axios.create({
  baseURL,
  withCredentials: true,
});
