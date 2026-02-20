import api from "./axiosInstance.js";


export const getAllUsers = async (token) => {
//   const token = useUserStore.getState().token;
  const res = await api.get(`v1/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
//   console.log("API response:", res.data);
  return res || []; // Ensure array
};

 export const getUser = async (token, user_Id) => {
  const res = await api.get(`v1/admin/users/${user_Id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // return only user data
  return res.data || {}; // single user object
}; 