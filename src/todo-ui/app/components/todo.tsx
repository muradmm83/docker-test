'use client';

import clsx from "clsx";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineRadioButtonUnchecked, MdDeleteForever } from "react-icons/md";

interface TodoProps {
  _id: string;
  title: string;
  desc: string;
  completed?: boolean;
}

export default function Todo({
  _id,
  title,
  desc,
  completed = false,
}: TodoProps) {
  return (
    <div
      className={clsx("flex items-center my-4", {
        "text-gray-400": completed,
      })}
    >
      <button
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
      <button
        className="justify-self-end text-sky-500 text-2xl"
        title="Delete"
        onClick={() => alert(`Removing ${_id}`)}
      >
        <MdDeleteForever />
      </button>
    </div>
  );
}
