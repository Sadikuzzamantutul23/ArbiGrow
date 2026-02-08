import React, { useState } from "react";
import Button from "../component/Button";
import Navbar from "../component/Navbar";
import { loginUser } from "../api/auth.api"; // API function
import useUserStore from "../store/userStore"; // zustand store

export default function LoginForm() {
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setMessage("");
      const res = await loginUser(formData);
      console.log(res, "login api response");

      // Save user & token to zustand
      setUser(res.data.user);
      setToken(res.data.token);

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      console.log("User:", res.data.user);
      console.log("Token:", res.data.token);

      setMessage("Login successful 🎉");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-gray-10 w-full max-w-md rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
          {/* Top Header */}
          <div className="flex flex-col items-center justify-center py-8">
            <div className="text-[#4171AD] rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold shadow">
              👤
            </div>
            <h2 className="text-black text-xl font-semibold mt-3">
              Customer Login
            </h2>
          </div>

          {/* Form */}
          <div className="p-8 space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4171AD]"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4171AD]"
              onChange={handleChange}
            />

            {message && (
              <p className="text-center text-sm text-red-500">{message}</p>
            )}

            <p className="text-sm text-right text-[#4171AD] cursor-pointer hover:underline">
              Forgot password?
            </p>

            <div className="flex justify-center pt-2">
              <Button type="submit" disabled={loading} onClick={handleSubmit}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
