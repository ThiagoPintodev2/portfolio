import TecnologiesSection from "../TecnologiesSection";
import AboutMeSection from "./AboutMeSection";
import ProfileAside from "./ProfileAside";

function Main() {
  return (
    <div
      className={`flex mt-50 max-w-[1280px] h-[90%] m-auto gap-8 pb-18 max-[1024px]:flex-col`}
    >
      <div>
        <ProfileAside />
      </div>
      <div
        className={`flex flex-col h-[100%] gap-[2rem] items-center justify-between bg-[#232120] 
        rounded-3xl w-[80vw] m-auto sm:w-[70vw] md:w-[60vw] lg:w-[65vw] lg:mt-[8rem] lg:h-[100rem]`}
      >
        <AboutMeSection />
        <TecnologiesSection />
      </div>
    </div>
  );
}

export default Main;
