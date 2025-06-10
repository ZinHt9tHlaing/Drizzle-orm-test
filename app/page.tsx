import { resolve } from "path";

// export const revalidate = 2;
export const dynamic = "force-dynamic";

export default async function Home() {
  // const data = await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve("Data loaded!");
  //   }, 3000)
  // );

  return (
    <main>
      {/* <h1>{data as string}</h1> */}
      <h1>Home Page</h1>
      <h2 className="text-red-600 font-bold">{Date.now()}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut
        asperiores quos delectus a odio, ab pariatur ipsa sapiente voluptas
        assumenda inventore, cupiditate alias obcaecati nulla eaque, maxime
        dolor praesentium.
      </p>
    </main>
  );
}
