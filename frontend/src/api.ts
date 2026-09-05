import axios from "axios";

const apiUrl =
  import.meta.env.VITE_API_URL?.trim() ||
  "https://full-stack-stock-trading-platform-js09.onrender.com";

export const dashboardUrl =
  import.meta.env.VITE_DASHBOARD_URL?.trim() ||
  `${window.location.protocol}//${window.location.hostname}:5174`;

export const api = axios.create({
  baseURL: apiUrl.replace(/\/+$/, ""),
  withCredentials: true,
});
