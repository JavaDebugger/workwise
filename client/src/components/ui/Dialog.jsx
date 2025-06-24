import React from "react";
import Button from "./Button"; // If DialogFooter uses Button

export const Dialog = ({ children, open, onOpenChange, className }) => {
  if (!open) return null;
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 ${className}`}
      onClick={() => onOpenChange(false)}
    >
      {children}
    </div>
  );
};

export const DialogTrigger = ({ children, asChild, onClick }) => {
  if (asChild && React.isValidElement(children)) {
    const originalOnClick = children.props.onClick;
    return React.cloneElement(children, {
      onClick: (e) => {
        onClick?.(e);
        originalOnClick?.(e);
      }
    });
  }
  return <button type="button" onClick={onClick}>{children}</button>;
};

export const DialogContent = ({ children, className }) => (
  <div
    className={`bg-white p-6 rounded-lg shadow-xl max-w-lg w-full mx-auto ${className}`}
    onClick={e => e.stopPropagation()}
  >
    {children}
  </div>
);
export const DialogHeader = ({ children, className }) => <div className={className}>{children}</div>; // Added className prop
export const DialogTitle = ({ children, className }) => <h2 className={`text-lg font-semibold text-gray-900 mb-2 ${className}`}>{children}</h2>; // Added className prop
export const DialogDescription = ({ children, className }) => <p className={`text-sm text-gray-600 mb-4 ${className}`}>{children}</p>; // Added className prop
export const DialogFooter = ({ children, className }) => <div className={`mt-6 flex justify-end space-x-2 ${className}`}>{children}</div>; // Added className prop
