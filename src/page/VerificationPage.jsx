import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Button from "../component/Button";
import { Link, useNavigate } from "react-router-dom";

export default function VerificationPage() {
  const navigate = useNavigate();

  const [idNumber, setIdNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const validateForm = () => {
    if (!idNumber.trim()) {
      return "ID number is required";
    }
    if (idNumber.length < 6) {
      return "ID number must be at least 6 characters";
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

  const isButtonDisabled = loading || !idNumber.trim();

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-[#0A122C] px-4 pt-24">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg rounded-lg w-full max-w-md p-6 hover:shadow-blue-900/50 transition-shadow duration-600">

          {/* Icon */}
          <div className="flex flex-col items-center justify-center mb-4">
            <h1 className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white text-2xl shadow-lg">
              🔐
            </h1>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-white text-center">
            Identity Verification
          </h2>

          <p className="text-gray-400 text-sm text-center mb-6 px-4">
            Provide your government-issued ID number for verification.
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* Input Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                ID Number
              </label>
              <input
                type="text"
                value={idNumber}
                placeholder="Enter your ID number or passport number"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/5 border-white/10 text-white placeholder-gray-500"
                onChange={(e) => {
                  setIdNumber(e.target.value);
                  setMessage("");
                }}
              />
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
            <div className="flex justify-center pt-2">
              <Button type="submit" disabled={isButtonDisabled} variant="gradient">
                {loading ? "Submitting..." : "Submit for Verification"}
              </Button>
            </div>

            {/* Bottom text */}
            <p className="text-center text-sm text-white pt-2">
              Already verified?{" "}
              <Link
                to="/dashboard"
                className="text-[#00CFF5] hover:underline font-bold"
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
