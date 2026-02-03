import React from "react";

export default function Button({ children, onClick, color = "red", type = "button", className = "" }) {
  // Tailwind color classes based on prop
  const bgColor = color === "red" ? "bg-red-500 hover:bg-red-600" : "bg-gray-500 hover:bg-gray-600";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 text-white font-bold rounded-full shadow transition-all ${bgColor} ${className}`}
    >
      {children}
    </button>
  );
}
