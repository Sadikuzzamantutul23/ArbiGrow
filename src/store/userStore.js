import { create } from "zustand";

// check localStorage for saved user & token
const savedUser = JSON.parse(localStorage.getItem("user"));
const savedToken = localStorage.getItem("token");

console.log("User from localStorage:", savedUser);
console.log("Token from localStorage:", savedToken);

const useUserStore = create((set) => ({
  user: savedUser || null,
  token: savedToken || null,

  setUser: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData });
  },

  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));

export default useUserStore;
