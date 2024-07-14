import React from "react";
import "../styles.css";

const Button = ({ children, ...props }) => {
  return (
    <button className="bg-blue-500 text-white py-2 px-4 rounded" {...props}>
      {children}
    </button>
  );
};

export default Button;
