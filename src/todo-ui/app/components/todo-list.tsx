import TodoView from "@/app/components/todo";

interface Todo {
  _id: string;
  title: string;
  desc: string;
  completed?: boolean;
}

export default async function TodoList() {
  async function getTodos(): Promise<[Todo]> {
    const response = await fetch("http://localhost:8080/api/todos");
    if (!response.ok) {
      throw new Error(
        `Failed to get TODOs: HTTP Status ${response.status} ${response.statusText}`
      );
    }
    return (await response.json()).data as [Todo];
  }

  let todos: [Todo] | null = null;

  try {
    todos = await getTodos();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      {todos?.map((todo) => (
        <TodoView key={todo._id} {...todo} />
      ))}
    </>
  );
}
