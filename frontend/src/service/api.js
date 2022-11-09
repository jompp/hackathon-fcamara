import axios from "axios"
import 'dotenv/config'

const api = axios.create({
  baseURL: process.env.BASE_URL_API,
});

export default api;