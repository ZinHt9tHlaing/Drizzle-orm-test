import { readTodo } from "@/server/actions";

export default async function Home() {
  const { error, success } = await readTodo();

  if (error) throw new Error(error);

  return (
    <main>
      <h1 className="text-xl font-bold">Todos</h1>
      {success?.map((todo) => (
        <div key={todo.id}>
          <p className="text-sm">{todo.title}</p>
        </div>
      ))}
    </main>
  );
}
