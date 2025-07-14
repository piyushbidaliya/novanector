import axios from 'axios';

const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000', // fallback
  withCredentials: true,
});

export default Axios;
