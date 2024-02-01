import GradesICon from "@/public/icons/GradesICon";
import Link from "next/link";

const BtnLink = () => {
  return (
    <Link href={""} className="min-w-[80px] h-[64px] bg-orange-200/90 px-2 py-1 flex flex-col  gap-2 rounded-md">
      <span className="size-5 h-[40%] grid place-content-center text-orange-600">
      <GradesICon/>
      </span>
      <span
      className=" h-[60%] text-xs font-bold" 
      >Horario</span>
    </Link>
  );
};
export default BtnLink;
