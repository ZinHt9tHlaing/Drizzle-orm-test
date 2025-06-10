"use server";

import { db } from ".";

export const readTodo = async () => {
  const todos = await db.query.todos.findMany();

  if (!todos) {
    return { error: "No todos found" };
  }

  return { success: todos };
};
