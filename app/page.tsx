import CustomButton from "@/components/custom-button";
import { createTodo, deleteTodo, readTodo } from "@/server/actions";

export default async function Home() {
  const { error, success } = await readTodo();

  if (error) throw new Error(error);

  return (
    <main>
      <h1 className="text-xl font-bold">Todos</h1>
      {success?.map((todo) => (
        <div key={todo.id} className="flex items-center gap-2">
          <p>{todo.title}</p>
          <form action={deleteTodo}>
            <input type="text" name="id" value={todo.id} hidden />
            <button type="submit" className="text-red-600 underline">
              Delete
            </button>
          </form>
        </div>
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
