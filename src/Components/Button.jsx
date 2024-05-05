import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-slate-800 text-gray-300 hover:bg-slate-950 hover:text-white p-2 rounded-md "
      {...props}
    >
      {children}
    </button>
  );
}
