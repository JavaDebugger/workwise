import React from "react";
import { Label } from "./Label";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./Tooltip";
import { Info } from "lucide-react";

const FormField = ({ id, label, children, error, required = false, hint, className = "" }) => (
  <div className={`space-y-1.5 ${className}`}>
    <div className="flex items-center gap-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {hint && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-black text-white p-2 rounded shadow-lg text-xs">
              <p>{hint}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
    {children}
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

export default FormField;
