import NavComponentesIcons from "../NavComponentsIcons";
import { PiHouseLine } from "react-icons/pi";
import { LuBookAudio } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { NavLink } from "react-router";

function Header() {
  const navsDatas = [
    {
      id: 1,
      value: "Home",
      path: "/",
      icon: <PiHouseLine className={`text-[1.9rem] sm:text-[2rem]`} />,
    },
    {
      id: 2,
      value: "Resumo",
      path: "/resume",
      icon: <LuBookAudio className={`text-[1.9rem] sm:text-[2rem]`} />,
    },
    {
      id: 3,
      value: "Projetos",
      path: "/work",
      icon: <BsBriefcase className={`text-[1.9rem] sm:text-[2rem]`} />,
    },
    {
      id: 1,
      value: "Contato",
      path: "/contact",
      icon: <MdOutlinePhoneInTalk className={`text-[1.9rem] sm:text-[2rem]`} />,
    },
  ];

  return (
    <header
      className={`flex flex-col max-w-[1280px] m-auto items-center pt-[4rem] lg:flex-row lg:items-center lg:justify-between`}
    >
      <div
        className={`text-ligthbrown font-pacifico text-[2.5rem] sm:text-6xl md:text-7xl lg:text-6xl lg:justify-around`}
      >
        {"< Hello, I'm Thiago />"}
      </div>
      <nav>
        <ul
          className={`flex w-[32rem] h-[10rem] justify-center mt-[4rem] rounded-3xl 
          items-center bg-bgdark2 min-[480px]:w-[40rem] gap-8
          sm:w-[40rem] md:w-[50vw] lg:w-[38rem] lg:mt-0 text-ligthbrown`}
        >
          {navsDatas.map((nav, i) => (
            <li>
              <NavLink key={i} to={nav.path}>
                <NavComponentesIcons
                  path={nav.path}
                  value={nav.value}
                  img={nav.icon}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
