import React from "react";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    onClick={onClick}
  >
    {label}
  </button>
);