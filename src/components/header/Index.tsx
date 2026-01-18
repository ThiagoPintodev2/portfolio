import NavComponentesIcons from "../NavComponentsIcons";
import { PiHouseLine } from "react-icons/pi";
import { LuBookAudio } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";

function Header() {
  return (
    <div className={`flex justify-around items-center pt-[5rem]`}>
      <div className={`text-ligthbrown font-pacifico  text-[4.5rem]`}>
        {"< Hello, I'm Thiago />"}
      </div>
      <div
        className={`flex gap-12 w-[52rem] justify-center items-center h-[12rem] bg-bgdark2 rounded-2xl`}
      >
        <NavComponentesIcons value={"Home"} img={<PiHouseLine size={22} />} />
        <NavComponentesIcons value={"Resume"} img={<LuBookAudio size={22} />} />
        <NavComponentesIcons value={"Work"} img={<BsBriefcase size={22} />} />
        <NavComponentesIcons
          value={"Contact"}
          img={<MdOutlinePhoneInTalk size={22} />}
        />
      </div>
    </div>
  );
}

export default Header;
