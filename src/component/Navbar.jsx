import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl text-gray-800">
            ArbiGrow
          </div>

      

          {/* Menu Icons */}
          <div className="flex space-x-4 gap-4 text-gray-600">
                {/* Draft Text */}

            <button className="hover:text-gray-800">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
       
          </div>

        </div>
      </div>
    </nav>
  );
}
