import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const dashboardUrl =
  import.meta.env.VITE_DASHBOARD_URL?.trim().replace(/\/+$/, "") ||
  (import.meta.env.DEV
    ? `${window.location.protocol}//${window.location.hostname}:5174`
    : "");

export const api = axios.create({
  baseURL: API_URL?.trim().replace(/\/+$/, "") || undefined,
  withCredentials: true,
});
