import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authEndpoints = [
      '/auth/login/',
      '/auth/register/',
      '/auth/forget-password/',
      '/auth/mfa/generate/', 
      '/auth/mfa/verify/',   
      '/auth/mfa/disable/'   
    ];

    const isAuthEndpoint = authEndpoints.some(endpoint => config.url?.includes(endpoint));

    if (!isAuthEndpoint) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
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

export default axiosInstance;



