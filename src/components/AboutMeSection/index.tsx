import type { AboutMeProps } from "./AboutMeProps";

function AboutMeSection( { text, title }: AboutMeProps ) {
  return (
    <div className={`div-about-me bg-[#FFE3BF] h-[40%] mt-[2.5rem]`}>
      <div className={`flex flex-col items-center`}>
        <h2 className={`font-poppins text-[3.2rem] text-[#232120] m-[1.5rem] opacity-75`}>
          {title}
        </h2>
        <hr className={`bg-[#232120] h-[2px] w-[12rem]`} />
      </div>
        <p
          className={`p-about-me text-[#232120]`}
        >
          {text}
        </p>
      </div>
  );
}

export default AboutMeSection;
