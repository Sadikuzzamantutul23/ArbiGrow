import api from "./axiosInstance.js";  


export const registerUser = (data) => {
   console.log("DATA:",data)
  return api.post("v1/auth/signup", data);
   
};
export const loginUser = (data) => {
  return api.post("/login", data);
};