import React from "react";

const Button = ({ className, type, name, onClick }) => {
  return (
    <button
      type={type}
      className={`p-2 text-center rounded-sm ${className} text-white border-0`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
