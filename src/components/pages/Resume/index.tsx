import CardConatiner from "@/components/CardContainer";
import Header from "@/components/Header";
import ProfileAside from "@/components/ProfileAside";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import WorkskillsSection from "@/components/WorkSkillsSection";

function Resume() {

  return (
    <div>
      <Header />
      <div
        className={`flex mt-50 max-w-[1280px] h-[90%] m-auto gap-8 pb-18 max-[1024px]:flex-col`}
      >
        <ProfileAside />
      </div>
      <div
        className={`flex flex-col h-[100%] gap-[2rem] pb-[1.5rem] items-center justify-between bg-[#232120] 
        rounded-3xl w-[80vw] m-auto sm:w-[70vw] md:w-[60vw] lg:w-[65vw] lg:mt-[8rem] lg:h-[100rem]`}
      >
        <div className={`flex flex-col items-center`}>
          <h2
            className={`font-poppins text-[3.2rem] text-ligthbrown m-[1.5rem] opacity-75`}
          >
            RESUME
          </h2>
          <hr className={`bg-[#232120] h-[2px] w-[12rem]`} />
        </div>
        <div className={`flex items-center gap-4`}>
          <RiGraduationCapFill size={30} className={`text-ligthbrown`} />
          <h3 className={`text-white font-poppins text-[2rem]`}>Education</h3>
        </div>
        <CardConatiner
          year={"2020 - 2021"}
          title={"Software Development"}
          school={"Moringa School"}
        />
        <CardConatiner
          year={"2020 - 2021"}
          title={"Software Development"}
          school={"Moringa School"}
        />
        <div className={`flex items-center gap-4`}>
          <MdWorkHistory size={30} className={`text-ligthbrown`} />
          <h3 className={`text-white font-poppins text-[2rem]`}>Experience</h3>
        </div>
        <CardConatiner
          year={"2022 - Present"}
          title={"Technical Mentor"}
          school={"Moringa School"}
        />
        <CardConatiner
          year={"2022 - Present"}
          title={"Technical Mentor"}
          school={"Moringa School"}
        />
      </div>
      <WorkskillsSection />
    </div>
  );}

export default Resume;
