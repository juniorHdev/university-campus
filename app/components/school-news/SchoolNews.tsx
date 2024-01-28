import SchoolPost from "./SchoolPost";

const SchoolNews = () => {
  return (
    <div className="flex flex-col p-2 w-full h-full bg-white shadow-sm">
      <header>
        <h1 className="p-4 font-bold text-2xl">Noticias</h1>
      </header>
      <div id="container" className="w-full mt-2 flex gap-2">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <SchoolPost key={i}/>
          ))}
      </div>
    </div>
  );
};
export default SchoolNews;
