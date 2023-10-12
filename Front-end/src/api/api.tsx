import axios from 'axios';

// eslint-disable-next-line react-refresh/only-export-components
export const HTTP = axios.create({
  baseURL: 'http://localhost:3000/',
});

HTTP.defaults.headers.common['Authorization'] = localStorage.getItem('token');
