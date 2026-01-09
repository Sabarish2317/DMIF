import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
  className?: string; // custom styling if needed
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  required = false,
  className = "",
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-gray-800 text-sm font-medium">
          {label}
          {required && <span className="text-[#003579] ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${className}`}
      />
    </div>
  );
};

export default Input;
