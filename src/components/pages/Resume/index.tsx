import CardConatiner from "@/components/CardContainer";
import Header from "@/components/Header";
import ProfileAside from "@/components/ProfileAside";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import WorkskillsSection from "@/components/WorkSkillsSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";

function Resume() {
  return (
    <div > 
      <Header />
      <div
        className={`flex mt-50 max-w-[1280px] h-[90%] m-auto gap-8 pb-18 max-[1024px]:flex-col`}
      >
        <ProfileAside />
        <div
          className={`flex flex-col h-[100%] items-center justify-between bg-[#232120] 
        rounded-3xl m-auto w-[80vw] sm:w-[70vw] md:w-[60vw] lg:mt-[8rem] lg:w-[65vw] lg:h-[100rem] xl:w-[65vw]`}
        >
          <div className={`flex flex-col items-center`}>
            <h2
              className={`font-poppins text-[3.2rem] text-ligthbrown m-[1.5rem] opacity-75`}
            >
              RESUME
            </h2>
            <hr className={`bg-[#232120] h-[2px] w-[12rem]`} />
          </div>
          <div className={`flex items-center w-[100%] lg:mt-[2rem] max-[1024px]:flex-col`}>
            <div className={`flex flex-col w-[100%] items-center md:flex-col md:w-[100%]`}>
              <div className={`flex gap-4 my-[2rem]`}>
                <RiGraduationCapFill size={30} className={`text-ligthbrown`} />
                <h3 className={`text-white font-poppins text-[2rem]`}>
                  Education
                </h3>
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
            </div>
            <div className={`flex flex-col w-[100%] items-center md:flex-col md:w-[100%]`}>
              <div className={`flex gap-4 mb-[2rem] lg:mt-[2rem]`}>
                <MdWorkHistory size={30} className={`text-ligthbrown`} />
                <h3 className={`text-white font-poppins text-[2rem]`}>
                  Experience
                </h3>
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
          </div>
          <div className={`flex flex-col h-[20%] gap-[2rem] pb-[1.5rem] mt-[2rem] items-center justify-between bg-[#232120] 
        rounded-3xl w-[80vw] m-auto sm:w-[70vw] md:w-[60vw] xl:w-[40vw]`}>
            <WorkskillsSection />
            <SoftSkillsSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
