import React from "react";

type PostProps = {
  params: {
    id: string;
  };
};

const Post = ({ params }: PostProps) => {
  return <h1>Post id - {params.id} </h1>;
};

export default Post;
