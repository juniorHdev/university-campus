const ClassInfoCard = () => {
  return (
    <article
      className="flex flex-col gap-2 shadow-sm min-w-[200px] h-[100px] rounded-md p-2 border-2 border-gray-300/10"
    >
      <span className="rounded-xl bg-orange-200 text-[0.625rem] px-2 py-1 max-w-max ">
        {" "}
        miercoles 19:00 - 20:00
      </span>
      <p className="font-bold w-full text-xs ">Desarrollo móvil</p>
      <span className="flex gap-2  text-xs justify-start w-full">
        <span>aula 010</span>
        <span>profesor</span>
      </span>
    </article>
  );
};
export default ClassInfoCard;
