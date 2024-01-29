"use client"
import { useState } from "react";


const CurrentSubjects = () => {
  
  const [items, setItems] = useState(6);

  const handlePrev = ()=>{
    setItems(items-1)
  }
  const handleNext = ()=>{
    setItems(items+1)
  }
  
  return (
    <div className="flex flex-col gap-4 w-full h-[200px] text-black px-4 py-5 shadow-sm bg-white">
      <div className="">
        <h1 className="font-bold text-2xl">Materias en curso</h1>
      </div>
      <div
        className="w-full flex  gap-4 overflow-x-hidden relative"
        data-carousel="static"
        id="default-carousel"
      >
        {Array(items)
          .fill(0)
          .map((_, i) => (
            <article
              key={i}
              className="flex flex-col gap-2 bg-yellow-200 min-w-[200px] h-[100px] rounded-md p-2"
              data-carousel-item
            >
              <span className="rounded-xl bg-orange-200 text-xs px-2 py-1 max-w-max ">
                {" "}
                miercoles 19:00 - 20:00
              </span>
              <strong>Desarrollo movil</strong>
              <span className="flex gap-2  text-xs justify-start w-full">
                <span>aula 010</span>
                <span>profesor</span>
              </span>
            </article>
          ))}

        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrev}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNext}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};
export default CurrentSubjects;
