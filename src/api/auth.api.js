import api from "./axiosInstance.js";

export const registerUser = (data) => {
  // console.log("DATA that would be submitted:", data);
  return api.post("v1/auth/signup", data);
};
export const loginUser = (data) => {
  // console.log("DATA that would be submitted:", data);
  return api.post("v1/auth/login", data);
};
export const forgotPassword = (data) => {
  return api.post("v1/auth/forgot-password", data);
};
 export const resetPassword = (newPassword, token) => {
  return api.post(
    "v1/auth/reset-password",
    { new_password: newPassword },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
