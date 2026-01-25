import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


function TecnologysIcons() {
  
  const tecnologysIconsData = [
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
    <div className={`flex gap-6 pb-[2rem] md:gap-9 xl:pb-0`}>
      {
        tecnologysIconsData.map((el, i) => (
          <div key={i} className={`text-[4.5rem] sm:text-[5.5rem] xl:text-[7.2rem]`}>
            {el.Tecnologys}
          </div>
        ))
      }
    </div>
  )
}

export default TecnologysIcons
