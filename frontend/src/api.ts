import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL?.trim();

export const dashboardUrl =
  import.meta.env.VITE_DASHBOARD_URL?.trim() ||
  `${window.location.protocol}//${window.location.hostname}:5174`;

export const api = axios.create({
  // In development, Vite proxies relative /api requests to the backend.
  // Production can use VITE_API_URL when the API is on another origin.
  baseURL: apiUrl ? apiUrl.replace(/\/+$/, "") : undefined,
  withCredentials: true,
});
