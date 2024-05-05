import React from "react";
import Button from "./Button.jsx";
import Icon from "../assets/Banner.png";
export default function HomePage({ onClickStartNewProjet }) {
  return (
    <div className="px-4 w-2/3 text-center">
      <img
        className="justify-center mx-auto my-auto w-24 h-24 object-contain"
        src={Icon}
        alt="notes..."
      />
      <h3 className="text-2xl text-slate-800 mb-4">
        Select a project or get started with a new one
      </h3>
      <Button onClick={onClickStartNewProjet}>Create new Project</Button>
    </div>
  );
}
