"use client";

import clsx from "clsx";
import { FaRegCheckCircle, FaCheck } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked, MdDeleteForever } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { removeTodoAction, toggleTodoAction } from "@/app/action";

interface TodoProps {
  _id: string;
  title: string;
  desc: string;
  completed?: boolean;
  shouldDelete: boolean;
  resetDelete: any;
  markForDelete: any;
}

export default function Todo({
  _id,
  title,
  desc,
  completed = false,
  shouldDelete,
  resetDelete,
  markForDelete,
}: TodoProps) {
  return (
    <div
      className={clsx("flex items-center my-4 p-2", {
        "text-gray-400": completed,
        "border-red-300 border-2": shouldDelete,
      })}
    >
      <button
        onClick={() => toggleTodoAction({ _id, title, desc, completed })}
        className={clsx("justify-self-start", {
          "text-green-500": completed,
        })}
      >
        {completed ? <FaRegCheckCircle /> : <MdOutlineRadioButtonUnchecked />}
      </button>
      <div className="flex-1 mx-4">
        <label>{title}</label>
        <p className="grow text-xs">{desc}</p>
      </div>
      <div className="justify-self-end text-sky-500 text-xl">
        {shouldDelete ? (
          <>
            <button
              className="justify-self-end mr-2 text-red-600"
              title="Delete"
              onClick={() => removeTodoAction(_id)}
            >
              <FaCheck />
            </button>
            <button
              className="justify-self-end text-red-600"
              title="Delete"
              onClick={() => resetDelete()}
            >
              <IoCloseSharp />
            </button>
          </>
        ) : (
          <button
            className="justify-self-end"
            title="Delete"
            onClick={() => markForDelete()}
          >
            <MdDeleteForever />
          </button>
        )}
      </div>
    </div>
  );
}
