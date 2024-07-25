"use server";

import { revalidatePath } from "next/cache";
import { Todo } from "@/app/components/models";

export async function createTodoAction(formData: FormData): Promise<any> {
  const title = formData.get("title") as string;
  const desc = formData.get("desc") as string;
  const completed = formData.get("completed") as string;

  try {
    const res = await fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc,
        completed: completed === "completed",
      }),
    });

    if (res.ok) {
      revalidatePath("/");
    }
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function removeTodoAction(id: string) {
  try {
    const res = await fetch(`http://localhost:8080/api/todos/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      revalidatePath("/");
    }
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function getTodosAction(): Promise<[Todo]> {
  const response = await fetch("http://localhost:8080/api/todos");
  if (!response.ok) {
    throw new Error(
      `Failed to get TODOs: HTTP Status ${response.status} ${response.statusText}`
    );
  }
  return (await response.json()).data as [Todo];
}
