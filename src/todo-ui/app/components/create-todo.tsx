"use client";

import { useState, useRef } from "react";
import { createTodoAction } from "@/app/action";
import {
  Modal,
  Button,
  TextInput,
  Textarea,
  ToggleSwitch,
} from "flowbite-react";

export default function CreateTodoForm() {
  const [show, setShow] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const showForm = () => setShow(true);
  const hideForm = () => {
    setIsCompleted(false);
    setShow(false);
  };
  const formRef = useRef<HTMLFormElement>(null);

  const submitAction = async (formData: FormData) => {
    const res = await createTodoAction(formData);
    if (res?.error) {
      console.error(`Error addiing TODO: ${res.error}`);
    } else {
      hideForm();
    }
  };

  return (
    <>
      <Modal show={show} onClose={hideForm}>
        <Modal.Header>Create New TODO</Modal.Header>
        <Modal.Body>
          <form action={submitAction} className="flex flex-col" ref={formRef}>
            <label>Title</label>
            <TextInput id="title" name="title" />
            <div className="my-4">
              <label>Description</label>
              <Textarea id="desc" name="desc" />
            </div>
            <div className="flex">
              <ToggleSwitch
                id="completed"
                name="completed"
                checked={isCompleted}
                onChange={(checked) => setIsCompleted(checked)}
              />
              <label className="ml-1">Is Completed</label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => formRef?.current?.requestSubmit()}>OK</Button>
          <Button color="gray" onClick={hideForm}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <button
        className="floating-btn fixed top-[90%] left-1/2"
        onClick={() => showForm()}
      >
        +
      </button>
    </>
  );
}
