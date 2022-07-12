import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AXIOS_URL ,
  timeout: 10000,
});

export default api;