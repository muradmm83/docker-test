import TodoList from "@/app/components/todo-list";
import CreateTodoForm from "@/app/components/create-todo";
import { getTodosAction } from "@/app/action";

export default async function Home() {
  const todos = await getTodosAction();

  return (
    <main className="md:container md:mx-auto md:w-2/5 p-1 bg-white h-screen rounded">
      <TodoList todos={todos} />
      <CreateTodoForm />
    </main>
  );
}
