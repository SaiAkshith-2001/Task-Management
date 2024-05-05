import React from "react";
import Button from "./Button";
import Task from "./Task";

export default function ProjectDisplay({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] ">
      <header className="pb-8 mb-4 border-b-2 border-stone-900">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-slate-950">{project.title}</h1>
          <Button onClick={onDelete}>Delete</Button>
        </div>
      </header>
      <p className="mb-4 text-slate-950">{formattedDate}</p>
      <p className=" text-slate-950 whitespace-pre-wrap">
        {project.description}
      </p>
      <Task tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
}
