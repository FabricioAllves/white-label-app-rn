import axios from "axios";
import Constants from "expo-constants";
import { useAuthStore } from "@/src/core/auth/auth.store";

const apiClient = axios.create({
  baseURL: Constants.expoConfig?.extra?.apiBaseUrl ?? "https://api.example.com",
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // TODO: implement token refresh when backend is available
      useAuthStore.getState().clearSession();
    }
    return Promise.reject(error);
  },
);

export { apiClient };
