import CurrentSubjects from "@/app/components/current-subjects/CurrentSubjects";
import SchoolEvents from "@/app/components/school-events/SchoolEvents";
import SchoolNews from "@/app/components/school-news/SchoolNews";

const Dashboard = () => {
  return (
    <section className="w-full grid grid-cols-6 grid-rows-3 gap-2">
      <div className="col-span-6 row-span-1">
        <CurrentSubjects />
      </div>
      <div className="col-span-3 bg-blue-300 row-span-2">
        <SchoolEvents/>
      </div>
      <div className="col-span-3 row-span-2 text-black">

      <SchoolNews/>
      </div>
    </section>
  );
};
export default Dashboard;
