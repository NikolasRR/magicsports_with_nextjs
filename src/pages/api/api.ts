import axios from "axios";

axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

export default instance;