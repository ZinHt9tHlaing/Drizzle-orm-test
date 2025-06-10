import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  description: varchar("description").notNull(),
});
