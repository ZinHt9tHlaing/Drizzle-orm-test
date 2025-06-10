import CustomButton from "@/components/custom-button";
import { updateTodo } from "@/server/actions";
import React from "react";

type ParamProps = {
  params: {
    id: string;
  };
};

const EditTodo = ({ params }: ParamProps) => {
  return (
    <main>
      <h1>Update Todo</h1>
      <form action={updateTodo} className="flex gap-2">
        <input type="text" name="id" value={params.id} readOnly hidden />
        <input
          type="text"
          name="todoTitle"
          required
          className="bg-transparent border-2 border-white"
        />
        <CustomButton label="Update todo" />
      </form>
    </main>
  );
};

export default EditTodo;
