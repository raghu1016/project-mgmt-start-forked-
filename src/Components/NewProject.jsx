import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const des = useRef();
  const dd = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredtt = title.current.value;
    const entereddes = des.current.value;
    const entereddd = dd.current.value;

    if (enteredtt === "" || entereddes === "" || entereddd === "") {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredtt,
      descripton: entereddes,
      duedate: entereddd,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCap="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          {" "}
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you have forget enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input
        </p>
      </Modal>
      <div className="w-[35rem] mt-6">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <Input ref={title} label="title" />
        <Input ref={des} label="Description" textarea />
        <Input type="date" ref={dd} label="Due date " />
      </div>
    </>
  );
}
