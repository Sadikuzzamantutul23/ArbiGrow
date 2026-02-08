import api from "./axiosInstance.js";

export const registerUser = (data) => {
  // console.log("DATA that would be submitted:", data);
  return api.post("v1/auth/signup", data);
};
export const loginUser = (data) => {
  // console.log("DATA that would be submitted:", data);
  return api.post("/v1/auth/login", data);
};
