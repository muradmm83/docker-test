"use server";

import { revalidatePath } from "next/cache";
import { Todo } from "@/app/components/models";

const API_BASE_URI = process.env.API_BASE_URI || "http://localhost:8080";

export async function createTodoAction(formData: FormData): Promise<any> {
  const title = formData.get("title") as string;
  const desc = formData.get("desc") as string;
  const completed = formData.get("completed") as string;

  try {
    const res = await fetch(`${API_BASE_URI}/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc,
        completed: completed === "on",
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
    const res = await fetch(`${API_BASE_URI}/api/todos/${id}`, {
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

export async function getTodosAction(): Promise<[Todo] | []> {
  try {
    const response = await fetch(`${API_BASE_URI}/api/todos`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get TODOs: HTTP Status ${response.status} ${response.statusText}`
      );
    }
    return (await response.json()).data as [Todo];
  } catch (error) {
    console.error("Error Fetching TODOs", error);
    return [];
  }
}

export async function toggleTodoAction({
  _id,
  title,
  desc,
  completed,
}: Todo): Promise<void> {
  const response = await fetch(`${API_BASE_URI}/api/todos/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      desc,
      completed: !completed,
    }),
  });
  if (!response.ok) {
    throw new Error(
      `Failed to get TODOs: HTTP Status ${response.status} ${response.statusText}`
    );
  }
  revalidatePath("/");
}
