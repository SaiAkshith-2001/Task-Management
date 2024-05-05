import React from "react";
import { useState, useRef } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd, onDelete }) {
  const EmptyWarnModal = useRef();
  const [task, setTask] = useState("");
  function handleChangeTask(event) {
    setTask(event.target.value);
  }
  function handleClickAddTask() {
    if (task.trim() === "") {
      EmptyWarnModal.current.open();
      return;
    }
    onAdd(task);
    setTask("");
  }
  return (
    <div className="flex items-center ">
      <Modal ref={EmptyWarnModal} buttonCaption="Okay">
        <h2 className="text-2xl font-semibold text-slate-950 my-4">
          Invalid input!
        </h2>
        <p className="text-lg text-slate-950 mb-4">
          Please enter the any valid character field!
        </p>
      </Modal>
      <input
        className=" p-2  bg-slate-100  focus:bg-slate-300  border border-black mr-4 w-64 rounded-md mt-8"
        type="text"
        placeholder="enter new tasks..."
        onChange={handleChangeTask}
        value={task}
      />
      <button
        onClick={handleClickAddTask}
        className="mt-8 bg-slate-800 text-gray-300 hover:bg-slate-950 hover:text-white p-2   rounded-md  "
      >
        Add Task
      </button>
    </div>
  );
}
