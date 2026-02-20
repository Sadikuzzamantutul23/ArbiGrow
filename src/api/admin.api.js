import api from "./axiosInstance.js";

export const getAllUsers = async (
  token,
  { page = 1, search = "", status = "" } = {},
) => {
  const params = new URLSearchParams();

  params.append("page", page);

  // Only include search if it has value
  if (search && search.trim() !== "") {
    params.append("search", search.trim());
  }

  // Only include status if not "all"
  if (status && status !== "all") {
    params.append("status", status);
  }

  const res = await api.get(`v1/admin/users?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res || [];
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

export const updateKYCStatus = async (token, user_Id, statusValue) => {
  const res = await api.patch(
    `v1/admin/users/${user_Id}/kyc-status`,
    { status: statusValue },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  // return only user data
  return res.data || {};
};
