import React from "react";
import Navbar from "../component/Navbar";
import Button from "../component/Button";

export default function RegisterForm() {
  return (

  <>
   <Navbar/>
         <div className="min-h-screen flex items-start justify-center bg-gray-100 p-4 pt-8">
      <div className="bg-gray-10 shadow-lg rounded-lg w-full max-w-md p-8 hover:shadow-2xl transition-shadow">
              {/* Icon */}
            
                <div className="flex flex-col items-center justify-center">
                    <h1 className=" text-[#4171AD] rounded-full w-14 h-14 flex items-center justify-center text-center text-2xl font-bold shadow">
                       👤
                    </h1>
                </div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Registration Form
          
        </h2>
        
        <form className="space-y-4">
       

          <div>
          
            <input type="email" placeholder="Enter your email" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
           
          </div>

          <div>
         
            <input type="text" placeholder="Enter NID or Passport number" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
            <div>
          
            <input type="text" placeholder="Enter Reference name" className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
            <div className="relative w-full">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4171AD]"
          />
  
             </div>

                              {/* Checkbox */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />
              <p>
                I agree to the{" "}
                <span className="text-blue-500 cursor-pointer hover:underline">
                  Terms & Conditions
                </span>
              </p>
            </div>

                 <div className="flex justify-center pt-1 ">
                    <Button>Register</Button>
    
                   </div>
                           {/* Bottom text */}
                   <p className="text-center text-sm text-gray-500 pt-2">
                    All Ready have a account?{" "}
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
