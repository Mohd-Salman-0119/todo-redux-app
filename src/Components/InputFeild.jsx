import React from "react";

const InputFeild = ({type, placeholder, onChange, value}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="p-2 border border-black rounded-sm w-[250px] m-1"
    />
  );
};

export default InputFeild;
