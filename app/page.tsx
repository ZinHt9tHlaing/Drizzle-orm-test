import CustomButton from "@/components/custom-button";
import { createTodo, readTodo } from "@/server/actions";

export default async function Home() {
  const { error, success } = await readTodo();

  if (error) throw new Error(error);

  return (
    <main>
      <h1 className="text-xl font-bold">Todos</h1>
      {success?.map((todo) => (
        <p key={todo.id} className="text-sm">
          {todo.title}
        </p>
      ))}
      <div className="mt-2">
        <form action={createTodo}>
          <input
            type="text"
            name="todoTitle"
            className="bg-transparent border-2 border-white"
          />
          <CustomButton label="Add new todo" />
        </form>
      </div>
    </main>
  );
}
