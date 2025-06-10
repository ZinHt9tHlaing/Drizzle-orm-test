"use server";

import { revalidatePath } from "next/cache";
import { db } from ".";
import { posts, todos } from "./schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const getPosts = async () => {
  const posts = await db.query.posts.findMany();

  if (!posts) {
    return { error: "No posts found" };
  }

  return { success: posts };
};

export const getDetailPost = async (id: number) => {
  const post = await db.query.posts.findFirst({ where: eq(posts.id, id) });
  if (!post) {
    redirect("/");
  }
  return { title: post.title, description: post.description };
};

export const createPost = async (formData: FormData): Promise<any> => {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  if (!title || !description) return { error: "Invalid data format" };

  await db.insert(posts).values({ title, description });
  revalidatePath("/");
  redirect("/");
};

export const deletePost = async (formData: FormData): Promise<any> => {
  const id = Number(formData.get("id"));
  if (!id) return { error: "No Todo id found" };

  await db.delete(posts).where(eq(posts.id, id));

  revalidatePath("/");
  return { success: "Todo deleted successfully" };
};

export const updateTodo = async (formData: FormData): Promise<any> => {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const id = Number(formData.get("id"));

  if (!title || !description) {
    return { error: "No Todo title found" };
  }

  await db.update(posts).set({ title, description }).where(eq(posts.id, id));

  revalidatePath("/");
  redirect("/");
};
