import type { AboutMeProps } from "./AboutMeProps";

function AboutMeSection( { id, text, title }: AboutMeProps ) {
 
  return (
    <div id={id} className={`div-default bg-[#FFE3BF] mt-[2.5rem]`}>
      <div className={`flex flex-col items-center`}>
        <h2  className={`font-poppins text-[3.2rem] text-[#232120] m-[1rem] opacity-75`}>
          {title}
        </h2>
      </div>
        <div className={`p-about-me w-full text-[#232120]`}>{text}</div>
      </div>
  );
}

export default AboutMeSection;
