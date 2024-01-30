import StudentPersonalData from "./components/StudentPersonalData";



const Profile = () => {
  return (
    <section className="w-full flex gap-2 h-full ">
      <div className="col-span-4  row-span-3 w-4/5">
        <StudentPersonalData />
      </div>
      <div className="w-1/5 col-span-3 row-span-2 text-black bg-white p-2">
        Estadisticas
      </div>
    </section>
  );
};
export default Profile;
