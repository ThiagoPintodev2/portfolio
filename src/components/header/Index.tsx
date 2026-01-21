import NavComponentesIcons from "../NavComponentsIcons";
import { PiHouseLine } from "react-icons/pi";
import { LuBookAudio } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";

function Header() {
  return (
    <div className={`flex flex-col justify-center items-center pt-[4rem]`}>
      <div className={`text-ligthbrown font-pacifico text-[2.5rem]`}>
        {"< Hello, I'm Thiago />"}
      </div>
      <div
        className={`flex gap-8 w-[33rem] h-[10vh] justify-center mt-[2rem] rounded-3xl items-center bg-bgdark2 `}
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
