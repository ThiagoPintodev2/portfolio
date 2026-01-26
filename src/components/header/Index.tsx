import NavComponentesIcons from "../NavComponentsIcons";
import { PiHouseLine } from "react-icons/pi";
import { LuBookAudio } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div
      className={`flex flex-col max-w-[1280px] m-auto items-center pt-[4rem] lg:flex-row lg:items-center lg:justify-between`}
    >
      <div
        className={`text-ligthbrown font-pacifico text-[2.5rem] sm:text-6xl md:text-7xl lg:text-6xl lg:justify-around lg:pl-[2rem] 
        xl:pl-[6rem]`}
      >
        {"< Hello, I'm Thiago />"}
      </div>
      <div
        className={`flex gap-8 w-[33rem] h-[10rem] justify-center mt-[4rem] rounded-3xl 
          items-center bg-bgdark2 min-[480px]:w-[40rem] min-[480px]:justify-evenly 
          sm:w-[50rem] md:w-[60rem] lg:w-[40rem] lg:mt-0 lg:w-[55rem] lg:gap-2 lg:mr-[2rem] xl:mr-[6rem]`}
      >
        <NavLink to={"/"}>
          <NavComponentesIcons
            value={"Home"}
            img={<PiHouseLine className={`text-[1.9rem] sm:text-[2.2rem]`} />}
          />
        </NavLink>
        <NavLink to={"/resume"}>
          <NavComponentesIcons
            value={"Resume"}
            img={<LuBookAudio className={`text-[1.9rem] sm:text-[2.2rem]`} />}
          />
        </NavLink>
        <NavLink to={"/work"}>
          <NavComponentesIcons
            value={"Work"}
            img={<BsBriefcase className={`text-[1.9rem] sm:text-[2.2rem]`} />}
          />
        </NavLink>
        <NavLink to={"/contact"}>
          {" "}
          <NavComponentesIcons
            value={"Contact"}
            img={
              <MdOutlinePhoneInTalk
                className={`text-[1.9rem] sm:text-[2.2rem]`}
              />
            }
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
