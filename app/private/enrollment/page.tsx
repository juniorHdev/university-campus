import RegisteredSubjects from "@/app/components/subjects/RegisteredSubjects";
import Title from "@/app/components/ui/Title";

const Enrollment = () => {
  return (
    <section className="w-full h-full bg-white  shadow-md px-4 py-5 flex flex-col text-black">
      <Title type="h1">Matricula Academica</Title>
      <div className="w-full h-full border-2 border-gray-200/20 flex flex-wrap p-2">
        <div className="w-full  h-1/5">
            ariba
        </div>
        <div className="w-[50%] h-4/5">
           <RegisteredSubjects/>
        </div>
        <div className="w-[50%] h-4/5 bg-slate-400">
             ver detalles de la materia 
        </div>
      </div>
    </section>
  );
};
export default Enrollment;
