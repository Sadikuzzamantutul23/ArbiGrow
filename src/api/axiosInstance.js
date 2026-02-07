import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/`,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("From axios file",import.meta.env);
console.log("From axios file",import.meta.env.VITE_BACKEND_URL);

export default api;

