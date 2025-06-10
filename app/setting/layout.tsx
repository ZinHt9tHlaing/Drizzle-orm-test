import Link from "next/link";
import React from "react";

type childrenProps = {
  children: React.ReactNode;
};

const SettingLayout = ({ children }: childrenProps) => {
  return (
    <main>
      <nav className="underline space-x-4">
        <Link href={"/setting/profile"}>Profile</Link>
      </nav>
      {children}
    </main>
  );
};

export default SettingLayout;
