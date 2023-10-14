import axios from 'axios';

// eslint-disable-next-line react-refresh/only-export-components
export const HTTP = axios.create({
  baseURL: 'https://back-draft.onrender.com/',
});

HTTP.defaults.headers.common['Authorization'] = localStorage.getItem('token');
