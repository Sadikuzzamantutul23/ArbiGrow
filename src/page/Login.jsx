import React from "react";
import Button from "../component/Button";
import Navbar from "../component/Navbar";

export default function LoginForm() {
  return (
      <>
        <Navbar />

            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 ">
      <div className=" bg-gray-10 w-full max-w-md rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">

        {/* Top Header */}
        <div
          className="flex flex-col items-center justify-center py-8"
         
        >
          {/* Icon */}
          <div className=" text-[#4171AD] rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold shadow">
            👤
          </div>

          {/* Title */}
          <h2 className="text-black text-xl font-semibold mt-3">
            Customer Login
          </h2>
        </div>

        {/* Form */}
        <div className=" p-8 space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4171AD]"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4171AD]"
          />

          {/* Forgot text */}
          <p className="text-sm text-right text-[#4171AD] cursor-pointer hover:underline">
            Forgot password?
          </p>

          {/* Button */}
          <div className="flex justify-center pt-2">
             <Button>Login</Button>
          </div>

        </div>
      </div>
    </div>
      </>
  );
}
