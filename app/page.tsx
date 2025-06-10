import BlogCards from "@/components/blog-cards";
import { getPosts } from "@/server/actions";

export default async function Home() {
  const { error, success } = await getPosts();

  if (error) throw new Error(error);

  return (
    <main className="mt-4">
      <h1 className="title-text">Recent Blogs</h1>
      {success?.length === 0 && (
        <p className="text-sm font-medium">No posts to show.</p>
      )}
      {success?.map((post) => (
        <BlogCards
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </main>
  );
}
