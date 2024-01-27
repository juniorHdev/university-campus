import GraduationCapIcon from "@/public/icons/GraduationCapIcon";
import HomeIcon from "@/public/icons/HomeIcon";

type NavLink = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

const links: NavLink[] = [
  {
    name: "inicio",
    href: "/",
    icon: <HomeIcon/>
  },
  {
    name: "mi matricula",
    href: "/about",
    icon: <GraduationCapIcon/>
  },
  {
    name: "inscripciones",
    href: "/projects",
    icon: <GraduationCapIcon/>
  },
  {
    name: "tramites",
    href: "/contact",
    icon: <HomeIcon/>
  },
  {
    name: "perfil",
    href: "/contact",
    icon: <HomeIcon/>
  },
];

const Navbar = () => {
  return (
    <nav className="text-black ">
      <ul className="flex flex-col items-start w-full gap-6">
        {links.map(({ name, icon }) => (
          <li
            className="flex items-center capitalize gap-2 w-full text-center text-sm font-bold px-3 py-2 hover:bg-orange-200/40 hover:border-r-4 border-r-orange-600"
            key={name}
          >
            
            <span className="text-orange-400">
            {    icon}
            </span> 
                
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
