import TodoList from "@/app/components/todo-list";
import CreateTodoForm from "@/app/components/create-todo";
import { getTodosAction } from "@/app/action";

export default async function Home() {
  const todos = await getTodosAction();

  return (
    <main className="md:container md:mx-auto md:w-2/5 p-1 bg-white h-screen rounded">
      <p className="text-3xl my-6 text-cyan-700">TODO Webapp</p>
      <TodoList todos={todos} />
      <CreateTodoForm />
    </main>
  );
}
