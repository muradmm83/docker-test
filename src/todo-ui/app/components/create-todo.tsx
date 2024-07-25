"use client";

import { useState } from "react";
import { createTodo } from "@/app/action";

export default function CreateTodoForm() {
  const [show, setShow] = useState(false);
  const showForm = () => setShow(true);
  const hideForm = () => setShow(false);

  const submitAction = async (formData: FormData) => {
    const res = await createTodo(formData);
    if (res?.error) {
      console.error(`Error addiing TODO: ${res.error}`);
    } else {
      hideForm();
    }
  };

  return show ? (
    <form
      action={submitAction}
      className="grid gap-1 grid-cols-4 p-2 rounded border-2 border-slate-500"
    >
      <label className="text-xl col-span-3">New TODO</label>
      <button className="btn justify-self-end" onClick={() => hideForm()}>
        X
      </button>
      <label>Title</label>
      <input
        id="title"
        name="title"
        type="text"
        className="border-2 col-span-3 border-slate-500 focus:border-sky-500 default:border-sky-500 outline-none"
      />
      <label>Description</label>
      <textarea
        id="desc"
        name="desc"
        className="border-2 col-span-3 border-slate-500  focus:border-sky-500 default:border-sky-500 outline-none"
      ></textarea>
      <div className="col-span-2">
        <input
          id="completed"
          name="completed"
          type="checkbox"
          value="completed"
        />
        <label className="ml-1">Is Completed</label>
      </div>
      <button type="submit" className="col-span-4 justify-self-end btn">
        Add
      </button>
    </form>
  ) : (
    <button 
    className="floating-btn fixed top-[90%] left-1/2" 
    onClick={() => showForm()}>
      +
    </button>
  );
}
