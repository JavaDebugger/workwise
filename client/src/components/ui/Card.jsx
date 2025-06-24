import React from "react";

export const Card = ({ children, className }) => <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>{children}</div>;
export const CardHeader = ({ children, className }) => <div className={`p-4 border-b ${className}`}>{children}</div>; // Added className prop
export const CardTitle = ({ children, className }) => <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>; // Added className prop
export const CardDescription = ({ children, className }) => <p className={`text-sm text-gray-600 ${className}`}>{children}</p>; // Added className prop
export const CardContent = ({ children, className }) => <div className={`p-4 ${className}`}>{children}</div>; // Added className prop
export const CardFooter = ({ children, className }) => <div className={`p-4 bg-gray-50 border-t flex justify-end space-x-2 ${className}`}>{children}</div>; // Added className prop
