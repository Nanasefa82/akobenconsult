import axios from 'axios';

// Determine the API URL based on the environment
const API_URL = import.meta.env.PROD 
  ? 'https://aquabconsult-api.onrender.com/api'  // Production API URL
  : 'http://localhost:3000/api';                 // Development API URL

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
