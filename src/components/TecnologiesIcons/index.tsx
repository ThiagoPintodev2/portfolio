import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


function TecnologiesIcons() {
  
  const tecnologiesIconsData = [
    {
      id: 1,
      Tecnologys: <FaHtml5 />
    },
    {
      id: 1,
      Tecnologys: <FaJs /> 
    },
    {
      id: 1,
      Tecnologys: <FaReact /> 
    },
    {
      id: 1,
      Tecnologys: <SiShadcnui /> 
    },
    {
      id: 1,
      Tecnologys: <RiTailwindCssFill /> 
    }
  ]

  return (
    <div className={`flex gap-6 p-[2rem] md:gap-9 lg:p-0 xl:pb-0 xl:pt-0 max-[560px]:flex-wrap max-[560px]:justify-center`}>
      {
        tecnologiesIconsData.map((el, i) => (
          <div key={i} className={`text-[3.5rem] border-1 border-mediumbrown shadow-xl/50 text-ligthbrown
          rounded-3xl p-4 min-[480px]:text-[3.5rem] lg:text-[6.5rem] xl:text-[6.5rem]`}>
            {el.Tecnologys}
          </div>
        ))
      }
    </div>
  )
}

export default TecnologiesIcons
