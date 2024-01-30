import ClassInfoCard from "../cards/ClassInfoCard";

const CurrentSubjects = () => {
 



  return (
    <div className="flex flex-col gap-4 w-full h-[200px] text-black px-4 py-5 shadow-sm bg-white">
      <div className="">
        <h1 className="font-bold text-2xl">Materias en curso</h1>
      </div>
      <div
        className="w-full flex gap-4 overflow-x-hidden"
      >
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <ClassInfoCard key={i}  />
          ))}
      </div>
    </div>
  );
};
export default CurrentSubjects;
