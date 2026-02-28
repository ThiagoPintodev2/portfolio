import { PiHouseLine } from "react-icons/pi";
import { LuBookAudio } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { NavLink } from "react-router-dom";
import type { navDatasProps } from "./navDatasProps";
import { Button } from "../ui/button";

function Header() {
  const navsDatas: navDatasProps[] = [
    {
      id: 1,
      value: "Home",
      path: "/",
      icon: <PiHouseLine className={`text-[1.9rem] sm:text-[2rem]`} />,
    },
    {
      id: 2,
      value: "Resumo",
      path: "/resumo",
      icon: <LuBookAudio className={`text-[1.9rem] sm:text-[2rem]`} />,
    },
    {
      id: 3,
      value: "Projetos",
      path: "/projetos",
      icon: <BsBriefcase className={`text-[1.9rem] sm:text-[2rem]`} />,
    },
    {
      id: 4,
      value: "Contato",
      path: "/contato",
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
          sm:w-[40rem] md:w-[50vw] lg:w-[38rem] lg:mt-0`}
        >
          {navsDatas.map((nav, i) => (
            <li key={i}>
              <NavLink to={nav.path}>
                {({ isActive }) => (
                  <Button
                    className={`${isActive ? "bg-[#FFE3BF] text-[#232120]" : "bg-bgdark2 border-1 border-mediumbrown shadow-xl/50 text-ligthbrown"} flex flex-col w-[6rem] h-[6rem] gap-2 items-center justify-center 
                    rounded-2xl hover:bg-[#FFE3BF] hover:text-[#232120] transition-colors duration-300 cursor-pointer`}
                  >
                    {nav.icon}
                    <p
                      className={`font-raleway text-[1.2rem] sm:text-[1.2rem]`}
                    >
                      {nav.value}
                    </p>
                  </Button>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
