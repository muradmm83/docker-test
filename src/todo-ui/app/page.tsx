import TodoList from "@/app/components/todo-list";

export default function Home() {
  return (
    <main className="md:container md:mx-auto md:w-2/5 grid grid-cols-1 gap-2">
      <div className="grid gap-1 grid-cols-4 p-2 rounded border-2 border-slate-300">
        <label className="col-span-4 text-xl">New TODO</label>
        <label>Title</label>
        <input type="text" className="border-2 col-span-3 border-slate-300 focus:border-sky-300 default:border-sky-300 outline-none" />
        <label>Description</label>
        <textarea className="border-2 col-span-3 border-slate-300  focus:border-sky-300 default:border-sky-300 outline-none"></textarea>
        <button className="col-span-4 rounded  text-sky-300 hover:bg-sky-300 hover:text-white justify-self-end">
          Create
        </button>
      </div>
      <TodoList />
    </main>
  );
}
