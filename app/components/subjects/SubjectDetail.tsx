
type SubjectDetailProps = {
    children?: React.ReactNode,
    Subjectname?: string,
    code?: string,
    grade?: string,
}


const SubjectDetail = ({ Subjectname, code, grade}: SubjectDetailProps) => {
  return (
    <tr className="w-full min-h-10  flex py-2 px-3  ">
      <td className="w-[50%]">{Subjectname}</td>
      <td className="w-[30%] text-gray-500">{code}</td>
      <td className="size-7 bg-orange-400 aspect-square grid place-content-center text-xs font-semibold rounded-md ">
        {grade}
      </td>
    </tr>
  );
};
export default SubjectDetail;

