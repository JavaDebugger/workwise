import React, { useState, useMemo, useContext } from "react";

// Minimal ChevronDown, replace with lucide-react if available and not causing issues
const ChevronDown = (props) => <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>;

const SelectContext = React.createContext(null);

export const Select = ({ children, value, onValueChange, onOpenChange: onOpenChangeProp }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (onOpenChangeProp) {
      onOpenChangeProp(open);
    }
  };

  const contextValue = useMemo(() => ({
    value,
    onValueChange,
    isOpen,
    setIsOpen: handleOpenChange,
  }), [value, onValueChange, isOpen]);

  return <SelectContext.Provider value={contextValue}><div className="relative">{children}</div></SelectContext.Provider>;
};

export const SelectTrigger = ({ children, id, className }) => {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectTrigger must be used within a Select");
  const { isOpen, setIsOpen } = context;

  return (
    <button
      type="button"
      id={id}
      className={`w-full text-left p-2 border border-gray-300 rounded-md bg-white flex justify-between items-center ${className}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
};

export const SelectValue = ({ placeholder, children }) => {
  const hasActualChildren = React.Children.count(children) > 0 && (React.Children.toArray(children)[0] !== null && React.Children.toArray(children)[0] !== undefined);
  if (hasActualChildren) {
    const childArray = React.Children.toArray(children);
    const validChildren = childArray.filter(c => c !== null && c !== undefined && c !== '');
    if (validChildren.length > 0) return <>{validChildren}</>;
  }
  return <span className="text-gray-500">{placeholder}</span>;
};

export const SelectContent = ({ children }) => {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectContent must be used within a Select");
  const { isOpen, value, onValueChange, setIsOpen } = context;

  if (!isOpen) return null;

  const processChild = (childNode) => {
    if (!React.isValidElement(childNode)) return childNode;

    if (childNode.type === SelectItem) { // Assuming SelectItem is also exported or defined here
      return React.cloneElement(childNode, {
        onSelect: () => {
          onValueChange(childNode.props.value);
          setIsOpen(false);
        },
        isSelected: childNode.props.value === value
      });
    }
    if (childNode.props.children) {
      return React.cloneElement(childNode, {
        children: React.Children.map(childNode.props.children, processChild)
      });
    }
    return childNode;
  };

  const itemsWithHandler = React.Children.map(children, processChild);

  return (
    <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
      {itemsWithHandler}
    </div>
  );
};

export const SelectItem = ({ children, value, onSelect, isSelected, className }) => (
  <div
    onClick={onSelect}
    className={`p-2 hover:bg-gray-100 cursor-pointer text-sm ${isSelected ? 'bg-gray-100 font-semibold' : ''} ${className}`}
    role="option"
    aria-selected={isSelected}
  >
    {children}
  </div>
);
