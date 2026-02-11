import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Button from "../component/Button";
import { Link, useNavigate } from "react-router-dom";

export default function VerificationPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id_number: "",
    id_type: "nid",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [isVerified, setIsVerified] = useState(false);

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

  const validateForm = () => {
    if (!formData.id_number.trim()) {
      return `${formData.id_type === "nid" ? "NID" : "Passport"} number is required`;
    }
    if (formData.id_type === "nid" && formData.id_number.length < 10) {
      return "NID number must be at least 10 digits";
    }
    if (formData.id_type === "passport" && formData.id_number.length < 6) {
      return "Passport number must be at least 6 characters";
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

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsVerified(true);
      setMessage("Verification submitted successfully! We'll review your information.");

      setTimeout(() => {
        setIsVerified(false);
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Verification error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isButtonDisabled = loading || !formData.id_number.trim();

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#0A122C] px-4 pt-24">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg rounded-lg w-full max-w-md p-4 hover:shadow-blue-900/50 transition-shadow duration-600">
          
          {/* Icon */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="
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
              🔐
            </h1>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-[#FFFFFF] text-center">
            Identity Verification
          </h2>

          <p className="text-gray-400 text-sm text-center mb-6 px-4">
            To comply with regulatory requirements, please provide your government-issued ID information
          </p>

          <form className="space-y-4 p-8" onSubmit={handleSubmit}>
            
            {/* ID Type Selection */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                name="id_type"
                onClick={() => {
                  setFormData({ ...formData, id_type: "nid" });
                  setErrors((prev) => prev.filter((err) => err.field !== "id_number"));
                  setMessage("");
                }}
                className={`relative p-4 rounded-xl border transition-all duration-300 ${
                  formData.id_type === "nid"
                    ? "bg-blue-500/20 border-blue-500/50 shadow-lg shadow-blue-500/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className={`text-2xl mb-2 ${formData.id_type === "nid" ? "text-blue-400" : "text-gray-400"}`}>
                  🪪
                </div>
                <div className={`text-sm font-semibold ${formData.id_type === "nid" ? "text-white" : "text-gray-400"}`}>
                  National ID
                </div>
              </button>

              <button
                type="button"
                name="id_type"
                onClick={() => {
                  setFormData({ ...formData, id_type: "passport" });
                  setErrors((prev) => prev.filter((err) => err.field !== "id_number"));
                  setMessage("");
                }}
                className={`relative p-4 rounded-xl border transition-all duration-300 ${
                  formData.id_type === "passport"
                    ? "bg-cyan-500/20 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <div className={`text-2xl mb-2 ${formData.id_type === "passport" ? "text-cyan-400" : "text-gray-400"}`}>
                  🛂
                </div>
                <div className={`text-sm font-semibold ${formData.id_type === "passport" ? "text-white" : "text-gray-400"}`}>
                  Passport
                </div>
              </button>
            </div>

            {/* Input Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {formData.id_type === "nid" ? "National ID Number" : "Passport Number"}
              </label>
              <input
                type="text"
                name="id_number"
                value={formData.id_number}
                placeholder={formData.id_type === "nid" ? "Enter your NID number" : "Enter your passport number"}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/5 border-white/10 text-white placeholder-gray-500"
                onChange={handleChange}
              />
              {errors.find((e) => e.field === "id_number") && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.find((e) => e.field === "id_number").message}
                </p>
              )}
            </div>

            {/* Success Message */}
            {isVerified && (
              <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <p className="text-sm text-green-400">{message}</p>
              </div>
            )}

            {/* Error Message */}
            {message && !isVerified && (
              <p className="text-center text-sm text-red-500">{message}</p>
            )}

            {/* Info Box */}
            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-lg">ℹ️</span>
                <div className="text-sm text-gray-400">
                  <p className="mb-1">
                    Your information is encrypted and securely stored.
                  </p>
                  <p className="text-xs text-gray-500">
                    Verification typically takes 1-2 business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                disabled={isButtonDisabled} 
                variant="gradient"
              >
                {loading ? "Submitting..." : "Submit for Verification"}
              </Button>
            </div>

            {/* Bottom text */}
            <p className="text-center text-sm text-white pt-2">
              Already verified?{" "}
              <Link
                to="/dashboard"
                className="text-[#00CFF5] cursor-pointer hover:underline font-bold"
              >
                Go to Dashboard
              </Link>
            </p>
            
            <p className="text-center text-sm text-gray-500 pt-1">
              <Link
                to="/login"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back to Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}