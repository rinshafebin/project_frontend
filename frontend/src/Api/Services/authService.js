import axios from '../axiosInstance';
import { API_ENDPOINTS } from '../endpoints';

const login = async (email, password) => {
  const response = await axios.post(API_ENDPOINTS.LOGIN, { email, password });
  return response.data;
};

const registerClient = async (userData) => {
  const response = await axios.post(API_ENDPOINTS.CLIENT_REGISTER, userData);
  return response.data;
};

const registerAdvocate = async (userData) => {
  const response = await axios.post(API_ENDPOINTS.ADVOCATE_REGISTER, userData);
  return response.data;
};

const forgetPassword = async (email) => {
  const response = await axios.post(API_ENDPOINTS.FORGET_PASSWORD, { email });
  return response.data;
};

const resetPassword = async (data) => {
  const response = await axios.post(API_ENDPOINTS.RESET_PASSWORD, data);
  return response.data;
};

const enableMFA = async () => {
  const response = await axios.post(API_ENDPOINTS.ENABLE_MFA);
  return response.data;
};

const verifyMFA = async (otp) => {
  const response = await axios.post(API_ENDPOINTS.VERIFY_MFA, { otp });
  return response.data;
};

const logout = async () => {
  const response = await axios.post(API_ENDPOINTS.LOGOUT);
  return response.data;
};

export const authService = {
  login,
  registerClient,
  registerAdvocate,
  forgetPassword,
  resetPassword,
  enableMFA,
  verifyMFA,
  logout,
};
