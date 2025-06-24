import React from "react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input type={type} className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 ${className}`} ref={ref} {...props} />
));
Input.displayName = "Input"; // Adding display name for better debugging

export default Input;
