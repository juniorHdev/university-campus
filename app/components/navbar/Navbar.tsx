import { PrivateRoutes } from "@/app/lib/routes";
import GraduationCapIcon from "@/public/icons/GraduationCapIcon";
import HomeIcon from "@/public/icons/HomeIcon";
import Link from "next/link";

type NavLink = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

const links: NavLink[] = [
  {
    name: "inicio",
    href: PrivateRoutes.home,
    icon: <HomeIcon />,
  },
  {
    name: "mi matricula",
    href: PrivateRoutes.enrollment,
    icon: <GraduationCapIcon />,
  },
  {
    name: "inscripciones",
    href: "/projects",
    icon: <GraduationCapIcon />,
  },
  {
    name: "tramites",
    href: PrivateRoutes.procedures,
    icon: <HomeIcon />,
  },
  {
    name: "perfil",
    href: PrivateRoutes.perfil,
    icon: <HomeIcon />,
  },
];

const Navbar = () => {
  return (
    <nav className="text-black ">
      <ul className="flex flex-col items-start w-full gap-6">
        {links.map(({ name, icon, href }) => (
          <li className="w-full" key={name}>
            <Link
              className="flex items-center capitalize gap-2 w-full text-center text-sm font-bold px-3 py-2 hover:bg-orange-200/40 hover:border-r-4 border-r-orange-600"
              href={`/private${href}`}
            >
              <span className="text-orange-400">{icon}</span>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;

