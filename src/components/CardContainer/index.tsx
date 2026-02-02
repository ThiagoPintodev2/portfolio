import type { CardContainerProps } from "./CardContainer"

function CardConatiner( {year, title, school}: CardContainerProps ) {
  return (
    <div className={`flex flex-col w-[90%] shadow-xl/20 border-white/5 border-1 text-ligthbrown bg-[#1f1d1d] rounded-2xl`}>
      <p className={`font-raleway text-[1.2rem] pl-8 pb-5 mt-6`}>{year}</p>
      <p className={`font-raleway text-[1.2rem] pl-8 pb-3 font-semibold`}>{title}</p>
      <p className={`font-raleway text-[1.2rem] pl-8 font-medium mb-6`}>{school}</p>
    </div>
  )
}

export default CardConatiner
