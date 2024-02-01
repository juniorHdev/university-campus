import BtnLink from "@/app/components/button/BtnLink";
import RegisteredSubjects from "@/app/components/subjects/RegisteredSubjects";
import Title from "@/app/components/ui/Title";

const Enrollment = () => {
  return (
    <div className="w-full h-full bg-white  shadow-md px-4 py-5 flex flex-col text-black">
        <Title type="h1" size="md">Matricula Academica</Title>
      <div className="w-full h-full flex flex-wrap p-2">
        <div className="w-full h-1/5 ">
          <div className="w-full h-full flex gap-4 items-center">
        <BtnLink/>
        <BtnLink/>
        <BtnLink/>
        <BtnLink/>
        <BtnLink/>
          </div>
        </div>
        <div className="w-[50%] h-4/5 overflow-y-auto">
           <RegisteredSubjects/>
        </div>
        <div className="w-[50%] h-4/5 bg-slate-400">
             ver detalles de la materia 
        </div>
      </div>
    </div>
  );
};
export default Enrollment;
