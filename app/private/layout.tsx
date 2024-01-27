import React, { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";
import HomeIcon from "@/public/icons/HomeIcon";
import Header from "../components/header/Header";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white dark:bg-gray-800 w-full h-[100dvh] flex gap-2 p-2">
      <aside className="h-full w-1/5 bg-[#F7F7F7] p-6 flex flex-col gap-6 ">
        <h1 className="flex gap-2  text-lg font-bold text-black w-full mt-4 px-3">
          <HomeIcon />
          Campus
        </h1>
        <Navbar />
        <span className="w-full mt-auto self-end text-gray-800 px-3">
          cerrar sesion
        </span>
      </aside>
      <main className="w-4/5 bg-blue-300 h-full flex flex-col">
        <Header />
        {
      children
      }</main>
    </div>
  );
};
export default layout;
