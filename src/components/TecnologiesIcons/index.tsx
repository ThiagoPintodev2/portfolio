import { DiJsBadge } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";


function TecnologiesIcons() {
  
  const tecnologiesIconsData = [
    {
      id: 1,
      Tecnologys: <SiHtml5 />
    },
    {
      id: 2,
      Tecnologys: <DiJsBadge /> 
    },
    {
      id: 3,
      Tecnologys: <FaReact /> 
    },
    {
      id: 4,
      Tecnologys: <SiShadcnui /> 
    },
    {
      id: 5,
      Tecnologys: <RiTailwindCssFill /> 
    },
    {
      id: 6,
      Tecnologys: <SiTypescript />
    }
  ]

  return (
    <div className={`flex gap-6 p-[2rem] md:gap-9 lg:p-0 xl:pb-0 xl:pt-0 max-[560px]:flex-wrap 
    max-[560px]:justify-center max-[1033px]:flex-wrap max-[1033px]:justify-center`}>
      {
        tecnologiesIconsData.map((el, i) => (
          <div key={i} className={`text-[3.5rem] border-1 border-mediumbrown shadow-xl/50 text-ligthbrown
          rounded-3xl p-4 min-[480px]:text-[4.5rem] md:text-[5rem] lg:text-[5rem] xl:text-[5rem]`}>
            {el.Tecnologys}
          </div>
        ))
      }
    </div>
  )
}

export default TecnologiesIcons
