import React from "react";

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 ${className}`} ref={ref} {...props} />
));
Textarea.displayName = "Textarea"; // Adding display name

export default Textarea;
