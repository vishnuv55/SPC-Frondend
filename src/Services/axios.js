import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: '/api',
  responseType: 'json',
});

export default api;
