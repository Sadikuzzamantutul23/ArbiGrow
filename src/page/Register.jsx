import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Button from "../component/Button";
import { registerUser } from "../api/auth.api.js"; 
 import useUserStore from "../store/userStore.js";

export default function RegisterForm() {
    const setUser = useUserStore((state) => state.setUser);
    const setToken = useUserStore((state) => state.setToken);
    const [agree, setAgree] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    nid_passport: "",
    referral_code: "",
    password: "",
    
  });
  

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // const [apiData, setApiData] = useState(null);

  // handle input change
  const handleChange = (e) => {
    const { name, value,  } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
   const handleAgree = (e) => {
   setAgree(e.target.checked);
  };

  // handle form submit
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!agree) {
    setMessage("You must agree to terms & conditions");
    return;
  }

  try {
    setLoading(true);
    setMessage("");

    const res = await registerUser(formData);

    setUser(res.data.user);
    setToken(res.data.token);

    setMessage(res.data.message || "Registration successful 🎉");
  } catch (error) {
    setMessage(error.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-start justify-center bg-gray-100 p-4 pt-8">
        <div className="bg-gray-10 shadow-lg rounded-lg w-full max-w-md p-8 hover:shadow-2xl transition-shadow">

          {/* Icon */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#4171AD] rounded-full w-14 h-14 flex items-center justify-center text-center text-2xl font-bold shadow">
              👤
            </h1>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
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
            </div>

            <div>
              <input
                type="text"
                name="nid_passport"
                placeholder="Enter NID or Passport number"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="text"
                name="reference"
                placeholder="Enter Reference name"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>

            <div className="relative w-full">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4171AD]"
                onChange={handleChange}
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="agree"
                className="mt-1 h-4 w-4 rounded border-gray-300"
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
              <Button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </Button>
            </div>

            {/* Bottom text */}
            <p className="text-center text-sm text-gray-500 pt-2">
              Already have an account?{" "}
              <span className="text-[#4171AD] cursor-pointer hover:underline">
                Login
              </span>
            </p>
          </form>

    

        </div>
      </div>
    </>
  );
}


      // {/* Optional: show API data */}
      //     {apiData && (
      //       <div className="mt-4 bg-gray-100 p-2 rounded text-sm">
      //         <h3 className="font-bold mb-1">API Response:</h3>
      //         <pre>{JSON.stringify(apiData, null, 2)}</pre>
      //       </div>
      //     )}