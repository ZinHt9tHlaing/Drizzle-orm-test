"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className=" font-bold text-5xl mb-3">404 Not Found</h1>
        <p className=" w-96 mb-5 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          commodi!
        </p>
        <Link
          href={"/"}
          className=" border-2 border-white bg-gray-800 text-white font-medium px-4 py-1 active:scale-95 hover:font-bold hover:bg-gray-700 hover:text-white duration-200"
        >
          Return To Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
