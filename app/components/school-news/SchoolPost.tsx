const SchoolPost = () => {
  return (
    <article className="max-w-[300px] bg-orange-200 shadow-md min-h-[300px] rounded-lg flex flex-col text-black">
      <div className="bg-red-200 h-[40%] rounded-tl-lg rounded-tr-lg"></div>
      <div className="p-2 h-[60%] bg-white flex flex-col rounded-bl-lg rounded-br-lg">
        <span className="text-xs flex justify-between p-1">
          <span className="text-orange-600 font-medium">categoria</span>
          <span>1 hora</span>
        </span>
        <h1 className="text-xl font-bold">Noticia 1</h1>
        <p className="text-xs text-pretty w-full mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <span className="text-xs bg-orange-400 px-4 py-1 rounded-full mt-auto max-w-max self-end">
          leer mas
        </span>
      </div>
    </article>
  );
};
export default SchoolPost;
