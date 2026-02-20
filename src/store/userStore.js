// /store/userStore.js
import { create } from "zustand";

// Safe parse for user

let savedUser = null;
let savedUserDetails = null;
try {
  savedUser = JSON.parse(localStorage.getItem("user") || "null");
  // savedUserDetails = JSON.parse(localStorage.getItem("userDetails") || "null");
} catch (err) {
  console.warn("Invalid user in localStorage", err);
  localStorage.removeItem("user");
}

const savedToken = localStorage.getItem("token") || null;

const useUserStore = create((set) => ({
  user: savedUser,
  token: savedToken,
  userDetails: null,

  setUser: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData });
  },

  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },

  setUserDetails: (details) => {
    // localStorage.setItem("userDetails", JSON.stringify(details));
    set({ userDetails: details });
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));

export default useUserStore;
