import React from "react";

export const TooltipProvider = ({ children }) => <>{children}</>;

export const Tooltip = ({ children }) => <div className="relative inline-block group">{children}</div>;

export const TooltipTrigger = ({ children, asChild }) => asChild ? children : <span className="cursor-help">{children}</span>;

export const TooltipContent = ({ children, className }) => <div className={`absolute z-20 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 mt-1 ${className}`}>{children}</div>;
