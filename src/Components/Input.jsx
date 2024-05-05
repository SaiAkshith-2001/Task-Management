import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <p className="flex flex-col gap-1">
      <label className="text-lg font-medium mr-8 gap-4 ">{label}</label>
      {textarea ? (
        <textarea
          ref={ref}
          cols={70}
          rows={10}
          {...props}
          className="bg-slate-100 p-2 ml-2 mt-2 w-full h-full  border border-black text-pretty focus:bg-slate-300 rounded-md mb-8"
        />
      ) : (
        <input
          ref={ref}
          {...props}
          className="ml-2 mt-2 p-2 bg-slate-100  focus:bg-slate-300  border border-black gap-4 w-full rounded-md mb-4"
        />
      )}
    </p>
  );
});
export default Input;
