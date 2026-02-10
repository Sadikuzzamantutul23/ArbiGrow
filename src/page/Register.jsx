import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Button from "../component/Button";
import { registerUser } from "../api/auth.api.js";
import useUserStore from "../store/userStore.js";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);

  const [agree, setAgree] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    referral_code: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prev) => prev.filter((err) => err.field !== name));
    setMessage(""); 
  };

  const handleAgree = (e) => {
    setAgree(e.target.checked);
  };

  
   const validateForm = () => {
  if (!formData.email.trim()) {
    return "Email is required";
  }
  if (!formData.referral_code.trim()) {
    return "Referral code is required";
  };
 
  if (!formData.password.trim()) {
    return "Password is required";
  }
  if (!agree) {
    return "You must agree to terms & conditions";
  }
  return null;
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMsg = validateForm();
    if (errorMsg) {
      setMessage(errorMsg);
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      setErrors([]);

      const payload = { ...formData };
      const res = await registerUser(payload);

      setUser(res.data.user);
      setToken(res.data.token);
      setMessage(res.data.message || "Registration successful");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      const res = error.response;
      console.log("❌ FULL ERROR OBJECT:", error);

      if (!res) {
        setMessage("Network error or server not reachable");
        setLoading(false);
        return;
      }

      // 422 
      if (res.status === 422 && Array.isArray(res.data?.detail)) {
        const serverErrors = res.data.detail.map((err) => ({
          field: err.loc?.[1] || "unknown",
          message: err.msg,
        }));
        console.log("Validation Errors:", serverErrors);
        setErrors(serverErrors);
        setMessage("");
        setLoading(false);
        return;
      }

      const msg = res.data?.message || res.data?.detail || "Something went wrong";
      setMessage(msg);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };


  const isButtonDisabled = loading || !agree || errors.length > 0;

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#0A122C] px-4 pt-24">

       <div className="bg-white/5 backdrop-blur-sm border  border-white/10 shadow-lg rounded-lg w-full max-w-md p-4 hover:shadow-blue-900/50 transition-shadow duration-600">

          {/* Icon */}
          <div className="flex flex-col items-center justify-center">
            <h1   className="
           w-12 h-12 sm:w-14 sm:h-14 
            flex items-center justify-center
             rounded-full
           bg-white/5 
           border border-white/10
           text-white text-xl sm:text-2xl
           shadow-lg shadow-blue-500/10
           hover:shadow-blue-500/40
           hover:scale-105
           transition-all duration-300
         ">
              👤
            </h1>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-[#FFFFFF] text-center">
            Registration Form
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
              {errors.find((e) => e.field === "email") && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.find((e) => e.field === "email").message}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="referral_code"
                placeholder="Enter referral code"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
              {errors.find((e) => e.field === "referral_code") && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.find((e) => e.field === "referral_code").message}
                </p>
              )}
            </div>

            <div className="relative w-full">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4171AD]"
                onChange={handleChange}
              />
              {errors.find((e) => e.field === "password") && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.find((e) => e.field === "password").message}
                </p>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="agree"
                className="mt-1 h-4 w-4 rounded border-gray-300"
                checked={agree}
                onChange={handleAgree}
              />
              <p>
                I agree to the{" "}
                <span className="text-blue-500 cursor-pointer hover:underline">
                  Terms & Conditions
                </span>
              </p>
            </div>

            {message && (
              <p className="text-center text-sm text-red-500">{message}</p>
            )}

            <div className="flex justify-center pt-1">
              <Button type="submit" disabled={isButtonDisabled} gradient={true}>
                {loading ? "Registering..." : "Register"}
              </Button>
            </div>

            {/* Bottom text */}
            <p className="text-center text-sm text-gray-500 pt-2">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#4171AD] cursor-pointer hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
