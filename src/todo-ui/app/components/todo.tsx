import clsx from "clsx";
interface TodoProps {
  title: string;
  desc: string;
  completed?: boolean;
}

export default function Todo({ title, desc, completed = false }: TodoProps) {
  return (
    <div className={clsx("rounded p-4 bg-neutral-300", {
      '!bg-green-300': completed
    })}>
      <label className="text-2xl">{title}</label>
      <div className="flex items-stretch">
        <p className="grow">{desc}</p>
        <span className="self-center">
          {completed ? "Completed" : "Pending"}
        </span>
      </div>
    </div>
  );
}
