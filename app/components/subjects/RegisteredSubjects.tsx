import SubjectDetail from "./SubjectDetail";

const Tabletitles = [
  {
    name: "Materia",
    width: "50%",
  },
  {
    name: "Codigo",
    width: "30%",
  },
  {
    name: "Nota",
    width: "20%",
  },
]

const Subjects =[
    {
        Subjectname: "Matematica",
        code: "MAT-123",
        grade: "A+"
    },
    {
        Subjectname: "Matematica",
        code: "MAT-123",
        grade: "A+"
    },
    {
        Subjectname: "Matematica",
        code: "MAT-123",
        grade: "A+"
    },
    {
        Subjectname: "Matematica",
        code: "MAT-123",
        grade: "A+"
    },
    {
        Subjectname: "Matematica",
        code: "MAT-123",
        grade: "A+"
    },
 
]



const RegisteredSubjects = () => {
  return (
    <table className="w-full bg-white " >
        <caption className="text-start font-bold text-xl px-2">Materias actuales </caption>
      <thead className="flex flex-col p-2">
        <tr className="flex justify-start py-2 text-sm font-semibold text-gray-400">
          {Tabletitles.map(({ name, width }) => (
            <th key={name} className={`w-[${width}] text-start`}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-sm">
        {Subjects
          .map(({Subjectname, code, grade}) => (
            <SubjectDetail key={code} Subjectname={Subjectname} code={code} grade={grade} />
          ))}
      </tbody>
    </table>
  );
};
export default RegisteredSubjects;
