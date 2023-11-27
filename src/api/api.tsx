import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const api = axios.create({
  baseURL: 'http://localhost:8080'
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error status is 401 (UNAUTHORIZED) and there is no _retry flag on the original request,
    // it means the token has expired and we need to refresh it.
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await api.post('/auth/refresh-token', { refreshToken });
        const { token } = response.data;

        localStorage.setItem('token', token);

        originalRequest.headers.Authorization = `Bearer ${token}`;
        
        return api(originalRequest);
      } catch (error) {
        const navigate = useNavigate()

        navigate('/login')
      }
    }

    return Promise.reject(error);
  }
);