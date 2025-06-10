import { deletePost, getDetailPost } from "@/server/actions";
import Link from "next/link";
import React from "react";

type PostProps = {
  params: {
    id: string;
  };
};

const Post = async ({ params }: PostProps) => {
  const { title, description } = await getDetailPost(Number(params.id));

  return (
    <div className="mt-7">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-700">{description}</p>
      <div className="flex gap-2 mt-4">
        <Link
          href={`/update/${params.id}`}
          className="text-white bg-teal-600 font-medium text-sm p-2 rounded active:scale-95 duration-200"
        >
          Edit Post
        </Link>
        <form action={deletePost}>
          <input type="text" name="id" value={params.id} hidden readOnly />
          <button className="text-white bg-red-600 font-medium text-sm p-2 rounded active:scale-95 duration-200">
            Delete Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
