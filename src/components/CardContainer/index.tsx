import type { CardContainerProps } from "./CardContainer";

function CardConatiner({ icon, title1, title2, title3 }: CardContainerProps) {
  return (
    <div
      className={`flex flex-col w-[90%] min-h-[17vh] shadow-xl/20 mb-[2rem]
        border-white/5 border-1 text-ligthbrown bg-[#1f1d1d] rounded-2xl lg:w-[90%]`}
    >
      <div className={`flex items-center pl-[2rem]`}>
      {icon}
        <p
        className={`font-raleway text-[1.8rem] pl-8 pb-5 mt-6 max-[639px]:text-[] 
          sm:text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem]`}
          >
        {title1}
      </p>
      </div>
      <p
        className={`font-raleway text-[1.3rem] px-[1.5rem] pb-3 font-semibold min-[639px]:text-[1.4rem] 
          sm:text-[1.6rem] md:text-[1.8rem] lg:text-[1.4rem] xl:text-[1.8rem]`}
      >
        {title2}
      </p>
      <p
        className={`font-raleway text-[1.23rem] px-8 font-medium mb-6 min-[639px]:text-[1.4rem] 
          sm:text-[1.6rem] md:text-[1.8rem] lg:text-[1.4rem] xl:text-[1.8rem]`}
      >
        {title3}
      </p>
    </div>
  );
}

export default CardConatiner;
