// src/config/apiConfig.js

const apiConfig = {
  auth: import.meta.env.VITE_AUTH_SERVICE_URL,
  chat: import.meta.env.VITE_CHAT_SERVICE_URL,
  advocate: import.meta.env.VITE_PAYMENT_SERVICE_URL,
  client: import.meta.env.VITE_PRODUCT_SERVICE_URL,
};

export default apiConfig;
