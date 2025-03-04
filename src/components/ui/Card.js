import React from "react";

export default function Card({ children, className }) {
  return (
    <div className={`border shadow-md rounded-md p-4 bg-white ${className}`}>
      {children}
    </div>
  );
}
