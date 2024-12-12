import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles = "py-2 px-4 rounded-lg font-semibold outline-none ";
  const variants = {
    primary: "bg-[#1789FB]",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline:
      "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-100 focus:ring-blue-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
