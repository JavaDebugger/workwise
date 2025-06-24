import React, { useState } from "react";

export const Tabs = ({ children, defaultValue, className, onValueChange }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value) => {
    setActiveTab(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return <div className={className}>{React.Children.map(children, child => React.cloneElement(child, { activeTab, setActiveTab: handleTabChange }))}</div>;
};

export const TabsList = ({ children, className, activeTab, setActiveTab }) => <div className={`flex border-b ${className}`}>{React.Children.map(children, child => React.cloneElement(child, { activeTab, setActiveTab }))}</div>;

export const TabsTrigger = ({ children, value, activeTab, setActiveTab }) => (
  <button
    type="button"
    onClick={() => setActiveTab(value)}
    className={`px-4 py-2 -mb-px border-b-2 font-medium text-sm ${activeTab === value ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
  >
    {children}
  </button>
);

export const TabsContent = ({ children, value, activeTab, className }) => activeTab === value ? <div className={`py-4 ${className}`}>{children}</div> : null;
