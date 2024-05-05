import React from "react";
import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function AddProject({ onAdd, onCancel }) {
  const EmptyWarnModal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSaveProject() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      EmptyWarnModal.current.open();
      return;
      //if it doesnot contains any value in input field then it should render the error EmptyWarnModal with backdrop
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={EmptyWarnModal} buttonCaption="Okay">
        <h2 className="text-2xl font-semibold text-slate-950 my-4">
          Invalid input!
        </h2>
        <p className="text-lg text-slate-950 mb-4">
          Please enter the valid input for every field!
        </p>
      </Modal>

      <div>
        <menu className="flex items-end justify-end mb-4">
          <button
            onClick={handleSaveProject}
            className="text-right mt-10 bg-slate-800 hover:bg-slate-950 hover:text-white py-2 px-4 text-slate-300 rounded-lg "
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className=" mt-10 ml-2 border border-black py-2 px-4 rounded-lg hover:bg-slate-950 hover:text-white"
          >
            Cancel
          </button>
        </menu>
        <div className="border border-black p-8 rounded-xl">
          <Input type="text" ref={title} label="Title" textarea={false} />
          <Input type="text" ref={description} label="Description" textarea />
          <Input type="date" ref={date} label="Date" textarea={false} />
        </div>
      </div>
    </>
  );
}
