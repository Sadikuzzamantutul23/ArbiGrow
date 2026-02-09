import React, { useState } from "react";
import Button from "../component/Button";
import Navbar from "../component/Navbar";
import { loginUser } from "../api/auth.api";
import useUserStore from "../store/userStore";

export default function LoginForm() {
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // field error remove
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });

    setMessage(""); 
  };

  const validateForm = () => {
    let tempErrors = {};

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      tempErrors.password = "Password is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      setMessage("");

      const res = await loginUser(formData);
      console.log(res, "login api response");

      setUser(res.data.user);
      setToken(res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      // ✅ server message show
      setMessage(res.data.message || "Login successful");
       setLoading(false);

    } catch (err) {
  console.log("Full error:", err.response);

  // 422 validation error
  if (err.response?.status === 422 && Array.isArray(err.response.data?.detail)) {
    let fieldErrors = {};
    err.response.data.detail.forEach((item) => {
      const field = item.loc?.[1];
      fieldErrors[field] = item.msg;
    });
    setErrors(fieldErrors);
    setMessage("");
    console.log(err.response.data);
  }


  else if (err.response?.status === 400) {
    setMessage(err.response.data?.detail||
       err.response.data?.message ||
        "Invalid login");
  }
      else {
      setMessage(
        err.response?.data?.detail ||
        err.response?.data?.message ||
        "Login failed"
      );
    }
      setLoading(false);
}

  };

  const isButtonDisabled =
    loading ||
    !formData.email ||
    !formData.password ||
    errors.email ||
    errors.password;

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
          <form onSubmit={handleSubmit} className="p-8 space-y-4">

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4171AD]"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4171AD]"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}

            {/* server message */}
            {message && (
              <p className="text-center text-sm text-red-500">{message}</p>
            )}

            <p className="text-sm text-right text-[#4171AD] cursor-pointer hover:underline">
              Forgot password?
            </p>

            <div className="flex justify-center pt-2">
              <Button type="submit" disabled={isButtonDisabled}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
