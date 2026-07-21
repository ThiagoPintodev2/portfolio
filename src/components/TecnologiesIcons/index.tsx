import { DiJsBadge } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";

const tecnologiesIconsData = [
  { id: 1, Tecnologys: <SiHtml5 /> },
  { id: 2, Tecnologys: <DiJsBadge /> },
  { id: 3, Tecnologys: <FaReact /> },
  { id: 4, Tecnologys: <SiShadcnui /> },
  { id: 5, Tecnologys: <RiTailwindCssFill /> },
  { id: 6, Tecnologys: <SiTypescript /> },
  { id: 7, Tecnologys: <SiAntdesign /> },
];

const iconsLoop = [...tecnologiesIconsData, ...tecnologiesIconsData];

function TecnologiesIcons() {
  return (
    <div className="relative w-[60vw] sm:w-[55vw] md:w-[45vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[38vw] 
    m-auto overflow-x-hidden py-8 px-[4rem]">
      <div
        className="flex gap-10 animate-carousel whitespace-nowrap"
        style={{
          animation: "carousel 30s linear infinite",
        }}
      >
        {iconsLoop.map((el, i) => (
          <div
            key={i}
            className="flex w-[5rem] h-[5rem] items-center justify-center text-[3.5rem] text-[#232120] rounded-2xl p-4  
            sm:w-[5.5rem] sm:h-[5.5rem] md:text-[5rem] lg:w-[7rem] lg:h-[7rem] lg:text-[5rem] xl:text-[5rem] bg-[#FFE3BF]"
            
          >
            {el.Tecnologys}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default TecnologiesIcons;


