"use client";

import { useState, useEffect } from "react";
import TodoView from "@/app/components/todo";
import { Todo } from "@/app/components/models";
import { getTodosAction } from "@/app/action";

export default function TodoList() {
  const [update, setUpdate] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [deleteId, setDeleteForId] = useState<string>("");

  const resetDelete = () => setDeleteForId("");

  const getTodos = async () => {
    setTodos(await getTodosAction());
  };

  useEffect(() => {
    console.log("[todoList - useEffect] ::", update);
    getTodos();
  }, [update]);

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
            updateTodos={() => setUpdate((p) => !p)}
          />
        ))
      ) : (
        <span className="text-3xl">You've got nothing to do 😉</span>
      )}
    </div>
  );
}
