import axios from "axios"

const env = import.meta.env

const api = axios.create({
  baseURL: env.VITE_BASE_URL_API
});

export default api;