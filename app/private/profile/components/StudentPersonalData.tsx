import Image from "next/image";

const profileData = [
    "fecha de nacimiento",
    "sexo",
    "codido",
    "correo",
    "telefono",
    "direccion",
    "estado civil",
    "nacionalidad",
    "lugar de nacimiento",
    "lugar de residencia",
    "fecha de ingreso",
] as const;

type ProfileDataKey = typeof profileData[number];

const dataPerson: Record<ProfileDataKey, string> = {
    "fecha de nacimiento": "1999-01-01",
    sexo: "masculino",
    codido: "201910010",
    correo: "examample@gmail.com",
    telefono: "123456789",
    direccion: "calle 123",
    "estado civil": "soltero",
    nacionalidad: "colombiano",
    "lugar de nacimiento": "bogota",
    "lugar de residencia": "bogota",
    "fecha de ingreso": "2020-01-01",
};

const profileDataCarreer = [
    "estado",
    "fecha de inicio",
    "carrera",
    "semestre",
    "facultad",
] as const;

type ProfileDataCarreerKey = typeof profileDataCarreer[number];

const infoCarrera: Record<ProfileDataCarreerKey, string> = {
    estado: "activo",
    "fecha de inicio": "2020-01-01",
    carrera: "ingenieria de sistemas",
    semestre: "1",
    facultad: "ingenieria",
};

const StudentPersonalData = () => {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-sm h-full p-2 ">
      <div className="col-span-6 row-span-1 flex items-center gap-6  px-2 py-4 border-2 border-gray-300/20 rounded-md">
        <div className="w-[20%] aspect-square rounded-full ">
            <img
            className="rounded-full aspect-square object-cover w-full" 
            src="https://images.unsplash.com/photo-1706354924659-582cec69ce3b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" />
            
        </div>
        <div className="min-w-[350px] text-black flex flex-col justify-start ">
          <h1 className="font-bold text-xl self-start">Junior hernandez</h1>
          <ul className="w-full  flex gap-2 flex-wrap mt-2">
            {profileDataCarreer.map((item, i) => (
              <>
                <li
                  key={i}
                  className="basis-2/5 text-xs capitalize  p-1 "
                >
                  <strong>{item}:</strong> <span className="">{infoCarrera[item]}</span>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-black w-full border-2 border-gray-300/20 rounded-md px-2 py-3">
        <h2 className="text-xl font-bold capitalize">datos personales</h2>
        <ul className="w-full flex  flex-wrap  border-b-1 border-b-gray-700 justify-between mt-2">
          {profileData.map((item, i) => (
            <>
              <li
                key={i}
                className="w-[40%] py-2 flex gap-2"
              >
                <strong className="text-xs capitalize">{item}:</strong>

                <span className="text-xs capitalize">{dataPerson[item]}</span>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};  
export default StudentPersonalData;
