// components/ui/Button.jsx
import React from "react"

export function Button({ children, onClick, type = "button", variant = "default", className = "" }) {
  const baseStyle = "px-6 py-3 rounded-md font-semibold text-md transition duration-200";

  const variants = {
    default: "bg-purple-600 hover:bg-purple-700 text-white",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
