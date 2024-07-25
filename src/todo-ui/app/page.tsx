import TodoList from "@/app/components/todo-list";
import CreateTodoForm from "@/app/components/create-todo";

export default function Home() {
  return (
    <main className="md:container md:mx-auto md:w-2/5 p-1 bg-white h-screen rounded">
      <TodoList />
      <CreateTodoForm />
    </main>
  );
}
