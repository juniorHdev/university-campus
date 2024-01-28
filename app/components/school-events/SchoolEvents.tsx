import { getNextSevenDays } from "@/app/lib/day-of-week";

const SchoolEvents = () => {
  const currentDay = new Date();
  const month = currentDay.toLocaleString("default", { month: "long" });
  const year = currentDay.getFullYear();
  const getWeek = getNextSevenDays();

  return (
    <div className="flex flex-col p-4 w-full h-full bg-white shadow-sm text-black gap-4">
      <header className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl">{`${month} ${year}`}</h2>
        <div className="w-full h-[75px] flex  justify-around">
          {getWeek.map(({ day, dayOfWeek, isToday }, i) => (
            <span
              key={i}
              className={`w-[50px]  shadow-lg border-gray-500/20 border  
              
              p-2 rounded-t-full rounded-b-full grid place-content-center ${
                isToday ? "bg-orange-400 border-white" : "opacity-70"
              }`}
            >
              <span className="text-xs">{dayOfWeek}</span>
              <strong className="text-lg">{day}</strong>
            </span>
          ))}
        </div>
      </header>
      <div className="flex flex-col gap-1">
        <h2 className="text-1xl font-bold">Eventos</h2>
        <div >
          <article className="w-full min-h-[50px] flex items-center  gap-2 p-2 rounded-lg">
            <span className="min-w-10 min-h-10 bg-orange-400 p-1 rounded-md"></span>
            <p className="text-xs flex flex-col ">
              <h3 className="text-lg">titulo</h3>
              <span className="text-[12px] text-gray-700/70">
                aula | hora: 00:00 - 00:00 | profesor
              </span>
            </p>
          </article>
          <article className="w-full min-h-[50px] flex items-center  gap-2 p-2 rounded-lg">
            <span className="min-w-10 min-h-10 bg-orange-400 p-1 rounded-md"></span>
            <p className="text-xs flex flex-col ">
              <h3 className="text-lg">titulo</h3>
              <span className="text-[12px] text-gray-700/70">
                aula | hora: 00:00 - 00:00 | profesor
              </span>
            </p>
          </article> <article className="w-full min-h-[50px] flex items-center  gap-2 p-2 rounded-lg">
            <span className="min-w-10 min-h-10 bg-orange-400 p-1 rounded-md"></span>
            <p className="text-xs flex flex-col ">
              <h3 className="text-lg">titulo</h3>
              <span className="text-[12px] text-gray-700/70">
                aula | hora: 00:00 - 00:00 | profesor
              </span>
            </p>
          </article>
          
        </div>
      </div>
    </div>
  );
};
export default SchoolEvents;
