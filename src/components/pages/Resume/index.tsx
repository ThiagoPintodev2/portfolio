import React from "react";
import CardContainer from "@/components/CardContainer";
import ProfileAside from "@/components/ProfileAside";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";
import WorkskillsSection from "@/components/WorkSkillsSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import type { ResumeProps } from "./resume";
import Header from "@/components/Header";

const education: ResumeProps[] = [
  {
    year: "2008 - 2013",
    title: "- Licenciatura em Educação Física",
    place: "Universidade Estácio de Sá",
  },
  {
    year: "2014 - 2018",
    title: "- Bacharelado em Educação Física",
    place: "Universidade Estácio de Sá",
  },
];

const experience: ResumeProps[] = [
  {
    year: " 01/2016 – 04/2024",
    title: "- Professor de Educação Física",
    place:
      " Secretaria Municipal de Esporte e Lazer Prefeitura de Armação dos Búzios - Rj",
  },
  {
    year: "11/2016 – 08/2020",
    title: "- Professor de Musculação",
    place: "Academia Workout Búzios Fitness LTDA - Rj",
  },
  {
    year: "01/2022 – 12/2024",
    title: "- Professor de Futebol de Areia",
    place: "MM Treinamento de Atletas LTDA - Rj",
  },
  {
    year: "03/2026 – Atual",
    title: "- Desenvolvedor Front-End Trainee",
    place: "Sitana Unipessoal, Lda. - Lisboa",
  },
];


function Section({
  Icon,
  title,
  items,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  items: ResumeProps[];
}) {
  return (
    <section
      className={`flex flex-col w-[100%] items-center md:flex-col md:w-[100%]`}
    >
      <div className={`flex gap-4 my-[1.5rem]`}>
        <Icon size={30} className={`text-ligthbrown`} />
        <h3 className={`text-white font-poppins text-[2rem]`}>{title}</h3>
      </div>
      {items.map((el, i) => (
        <CardContainer
          key={i}
          icon={<HiOutlineArrowRight size={20} />}
          title1={el.year}
          title2={el.title}
          title3={el.place}
        />
      ))}
    </section>
  );
}

function Resume() {
  return (
    <div>
      <Header />
      <main
        className={`flex w-[95vw] max-w-[1440px] mt-50 h-[90%] mx-auto gap-8 pb-18 items-stretch max-[1024px]:flex-col`}
      >
        <ProfileAside />
        <div
          className={`flex flex-col h-[100%] items-center justify-between bg-[#232120] rounded-3xl mx-auto w-[80vw] sm:w-[70vw] md:w-[60vw] lg:flex-1 lg:mt-[8rem] lg:min-h-[100rem]`}
        >
          <header className={`flex flex-col items-center`}>
            <h2
              id={"resumo"}
              className={`font-poppins text-[3.2rem] text-ligthbrown m-[1.5rem] opacity-75`}
            >
              RESUMO
            </h2>
            <hr className={`bg-[#232120] h-[2px] w-[12rem]`} />
          </header>

          <div
            className={`flex items-start w-[100%] lg:mt-[2rem] max-[1024px]:flex-col`}
          >
            <Section
              Icon={RiGraduationCapFill}
              title="Educação"
              items={education}
            />
            <Section
              Icon={MdWorkHistory}
              title="Experiência"
              items={experience}
            />
          </div>

          <div
            className={`flex flex-col w-[90%] justify-center items-center h-[25%] gap-[2rem] mb-[2rem] mt-[4rem]
              bg-[#232120] rounded-3xl w-[80vw] sm:w-[90%] lg:w-[100%] lg:flex-row lg:items-stretch lg:pb-[2rem] lg:gap-[3rem]`}
          >
            <WorkskillsSection />
            <SoftSkillsSection />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resume;
