import React, { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";
import HomeIcon from "@/public/icons/HomeIcon";
import Header from "../components/header/Header";
import SingOut from "@/public/icons/SingOut";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#f7f7f7dc]  w-full h-[100dvh] flex gap-1 p-2">
      <aside className="h-full w-[15%] bg-[#F7F7F7] p-6 flex flex-col gap-6 shadow-md">
        <h1 className="flex gap-2  text-lg font-bold text-black w-full mt-4 px-3">
          <HomeIcon />
          Campus
        </h1>
        <Navbar />
        <span className="w-full mt-auto self-end text-gray-800 px-3 flex items-center gap-2 text-sm">
          <SingOut />
          cerrar sesion
        </span>
      </aside>
      <main className="w-[85%] h-full flex flex-col px-2 gap-2">
        <Header />
        <section className="h-[90%]">
        {children}
        </section>
      </main>
    </div>
  );
};
export default layout;
