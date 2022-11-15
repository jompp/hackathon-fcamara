import axios from "axios";

const env = import.meta.env;

const api = axios.create({
  baseURL: env.VITE_BASE_URL_API,
});

api.interceptors.request.use((config) => {
  console.log(env.TOKEN);
  config.headers["x-auth-token"] =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM2YjBhZWY2ODllNzliOWVkNTlhZGFjIn0sImlhdCI6MTY2ODQ5MDU3MCwiZXhwIjoxNjY4ODUwNTcwfQ.1juA1jSUSVTFJ_tL_hpGrVywuMPexfBDwADy_0OlQdI";

  return config;
});

export default api;
