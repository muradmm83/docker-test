"use server";

import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) : Promise<any> {
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
