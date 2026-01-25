import { useState } from "react";
import TecnologysSection from "../TecnologysSection";
import AboutMeSection from "./AboutMeSection";
import ProfileAside from "./ProfileAside";

function Main() {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

    window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <div className="mt-50 max-w-[1280px] m-auto">
      {windowSize <= 1023 ? (
        <div className={`flex flex-col lg:flex-row lg:mt-[5rem]`}>
          <ProfileAside />
          <AboutMeSection />
          <TecnologysSection />
        </div>
      ) : (
        <div>
          <ProfileAside />
        </div>
      )}
    </div>
  );
}

export default Main;
