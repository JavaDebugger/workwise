import React from "react";

const Button = ({ children, variant, size, className, onClick, disabled, type = "button", ...props }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-md font-medium transition-colors
      ${variant === "outline" ? "border border-gray-300 text-gray-700 hover:bg-gray-50" : ""}
      ${variant === "ghost" ? "text-gray-700 hover:bg-gray-100" : ""}
      ${!variant || variant === "default" ? "bg-blue-600 text-white hover:bg-blue-700" : ""}
      ${size === "sm" ? "text-sm px-3 py-1.5" : ""}
      ${size === "lg" ? "text-lg px-6 py-3" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
