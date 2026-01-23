import NavComponentesIcons from "../NavComponentsIcons";
import { PiHouseLine } from "react-icons/pi";
import { LuBookAudio } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";

function Header() {
  return (
    <div className={`flex flex-col items-center pt-[4rem] lg:flex-row lg:items-center lg:justify-around lg:pt-[6rem]`}>
      <div className={`text-ligthbrown font-pacifico text-[2.5rem] sm:text-6xl md:text-7xl lg:text-6xl lg:justify-around`}>
        {"< Hello, I'm Thiago />"}
      </div>
      <div
        className={`flex gap-8 w-[33rem] h-[10vh] justify-center mt-[4rem] rounded-3xl 
          items-center bg-bgdark2 min-[480px]:w-[40rem] min-[480px]:justify-evenly sm:w-[50rem] md:w-[60rem] lg:w-[40rem] lg:mt-0`}
      >
        <NavComponentesIcons value={"Home"} img={<PiHouseLine size={15} />} />
        <NavComponentesIcons value={"Resume"} img={<LuBookAudio size={15} />} />
        <NavComponentesIcons value={"Work"} img={<BsBriefcase size={15} />} />
        <NavComponentesIcons
          value={"Contact"}
          img={<MdOutlinePhoneInTalk size={15} />}
        />
      </div>
    </div>
  );
}

export default Header;
