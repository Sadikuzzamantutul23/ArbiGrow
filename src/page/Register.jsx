import React from "react";
import Navbar from "../component/Navbar";
import Button from "../component/Button";

export default function RegisterForm() {
  return (

  <>
   <Navbar/>
         <div className="min-h-screen flex items-start justify-center bg-gray-100 p-4 pt-8">
      <div className="bg-gray-10 shadow-lg rounded-lg w-full max-w-md p-8 hover:shadow-2xl transition-shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Registration Form
          
        </h2>
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
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
                 />
  
             </div>

                 <div className="flex justify-center ">
                    <Button>Register</Button>
    
                   </div>


        </form>
      </div>
    </div>
  </>
  );
}
