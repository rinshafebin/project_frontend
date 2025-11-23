// ✅ Improved axiosInstance.js
import axios from 'axios';
import apiConfig from '../config/apiConfig.js';

const createAxiosInstance = (serviceName) => {
  const BASE_URL = apiConfig[serviceName];

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: false, 
  });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) config.headers.Authorization = `Bearer ${token}`;
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
