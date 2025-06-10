"use server";

import { revalidatePath } from "next/cache";
import { db } from ".";
import { todos } from "./schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

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

export const deleteTodo = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  if (!id) return { error: "No Todo id found" };

  await db.delete(todos).where(eq(todos.id, id));

  revalidatePath("/");
  return { success: "Todo deleted successfully" };
};

export const updateTodo = async (formData: FormData) => {
  const todoTitle = formData.get("todoTitle")?.toString();
  const todoId = Number(formData.get("id"));

  if (!todoTitle) {
    return { error: "No Todo title found" };
  }

  await db.update(todos).set({ title: todoTitle }).where(eq(todos.id, todoId));

  revalidatePath("/");
  redirect("/");
};
