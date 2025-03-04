import React from "react";

export default function Input({ placeholder, className }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}
