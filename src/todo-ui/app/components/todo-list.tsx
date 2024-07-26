"use client";

import { useState } from "react";
import TodoView from "@/app/components/todo";
import { Todo } from "@/app/components/models";

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  const [deleteId, setDeleteForId] = useState<string>("");

  const resetDelete = () => setDeleteForId("");

  return (
    <div className="p-4">
      {todos.length ? (
        todos.map((todo) => (
          <TodoView
            key={todo._id}
            {...todo}
            resetDelete={resetDelete}
            shouldDelete={todo._id === deleteId}
            markForDelete={() => setDeleteForId(todo._id)}
          />
        ))
      ) : (
        <span className="text-3xl">You've got nothing to do 😉</span>
      )}
    </div>
  );
}
