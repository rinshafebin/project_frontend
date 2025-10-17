import axios from 'axios';
import { store } from '../redux/store';
import { logout } from '../redux/slices/authSlice';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL ,
  timeout: 15000, 
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {

      if (error.response.status === 401) {
        store.dispatch(logout());
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
