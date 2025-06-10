"use server";

import { revalidatePath } from "next/cache";
import { db } from ".";
import { todos } from "./schema";

export const readTodo = async () => {
  const todos = await db.query.todos.findMany();

  if (!todos) {
    return { error: "No todos found" };
  }

  return { success: todos };
};

export const createTodo = async (formData: FormData) => {
  const todoTitle = formData.get("todoTitle")?.toString();
  if (!todoTitle) return { error: "No Todo title found" };

  await db.insert(todos).values({ title: todoTitle });
  revalidatePath("/");

  return { success: "Todo created successfully" };
};
