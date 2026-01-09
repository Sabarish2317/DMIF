import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  required?: boolean;
  className?: string;
  options: DropdownOption[];
}

const DropdownSelect: React.FC<DropdownProps> = ({
  label,
  value: propValue,
  onChange,
  required,
  options,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(propValue || "");

  const value = propValue ?? internalValue;

  const handleSelect = (val: string) => {
    setInternalValue(val);   // update local state
    onChange?.(val);         // also notify parent if provided
    setOpen(false);
  };

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || "-- Select an option --";

  return (
    <div className="flex flex-col gap-2 w-full relative">
            {label && (
        <label className="text-gray-800 text-sm font-medium">
          {label}
          {required && <span className="text-[#003579] ml-1">*</span>}
        </label>
      )}

      <div
        className={`border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white cursor-pointer flex justify-between items-center focus-within:ring-2 focus-within:ring-blue-500 transition ${className}`}
        onClick={() => setOpen(!open)}
      >
        <span>{selectedLabel}</span>
        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </div>

      {open && (
        <ul className="absolute top-full left-0 z-10 mt-1 w-full border border-gray-200 bg-white rounded-md shadow-lg max-h-48 overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`px-3 py-2 text-sm cursor-pointer hover:bg-blue-100 ${
                value === opt.value ? "bg-blue-50 text-blue-600 font-medium" : ""
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default DropdownSelect;
