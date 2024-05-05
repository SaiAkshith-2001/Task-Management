import React from "react";
import NewTask from "./NewTask";
export default function Task({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-3xl my-8">Tasks</h2>
      <NewTask onAdd={onAdd} onDelete={onDelete} />
      {tasks.length === 0 && (
        <p className="text-2xl my-4">This project doesn't have any tasks.</p>
      )}
      {tasks.length > 0 && (
        <ul className="bg-stone-400 p-4 rounded-md mt-4">
          {tasks.map((task) => (
            <li className="flex justify-between my-4 " key={task.id}>
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className=" hover:text-red-600"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
