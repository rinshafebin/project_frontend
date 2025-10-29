// src/utils/axiosInstance.js
import axios from 'axios';
import apiConfig from '../config/apiConfig.js';

const createAxiosInstance = (serviceName) => {
  const BASE_URL = apiConfig[serviceName];

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const authEndpoints = [
        '/auth/login/',
        '/auth/register/',
        '/auth/forget-password/',
        '/auth/mfa/generate/',
        '/auth/mfa/verify/',
        '/auth/mfa/disable/',
      ];

      const isAuthEndpoint = authEndpoints.some(endpoint => config.url?.includes(endpoint));
      if (!isAuthEndpoint) {
        const token = localStorage.getItem('token');
        if (token) config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      if (import.meta.env.DEV) {
        console.error('API Error:', error.response?.data || error.message);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance;
