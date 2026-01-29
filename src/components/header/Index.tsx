import NavComponentesIcons from "../NavComponentsIcons";
import { PiHouseLine } from "react-icons/pi";
import { LuBookAudio } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { NavLink } from "react-router";

function Header() {
  return (
    <div
      className={`flex flex-col max-w-[1280px] m-auto items-center pt-[4rem] lg:flex-row lg:items-center lg:justify-between`}
    >
      <div
        className={`text-ligthbrown font-pacifico text-[2.5rem] sm:text-6xl md:text-7xl lg:text-6xl lg:justify-around`}
      >
        {"< Hello, I'm Thiago />"}
      </div>
      <div
        className={`flex w-[35rem] h-[10rem] justify-center mt-[4rem] rounded-3xl 
          items-center bg-bgdark2 min-[480px]:w-[40rem] gap-8
          sm:w-[40rem] lg:w-[38rem] lg:mt-0 `}
      >
        <NavLink to="/">
          <NavComponentesIcons
            value={"Home"}
            img={<PiHouseLine className={`text-[1.9rem] sm:text-[2rem]`} />}
          />
        </NavLink>
        <NavLink to="/resume">
          <NavComponentesIcons
            value={"Resume"}
            img={<LuBookAudio className={`text-[1.9rem] sm:text-[2rem]`} />}
          />
        </NavLink>
        <NavLink to="/work">
          <NavComponentesIcons
            value={"Work"}
            img={<BsBriefcase className={`text-[1.9rem] sm:text-[2rem]`} />}
          />
        </NavLink>
        <NavLink to="/contact">
          <NavComponentesIcons
            value={"Contact"}
            img={
              <MdOutlinePhoneInTalk
                className={`text-[1.9rem] sm:text-[2rem]`}
              />
            }
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
