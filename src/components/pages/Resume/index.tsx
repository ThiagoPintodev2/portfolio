import type { ComponentType, ReactNode } from "react";
import ProfileAside from "@/components/ProfileAside";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import Header from "@/components/Header";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineFolder,
} from "react-icons/hi";

function ResumeCard({
  Icon,
  title,
  highlight,
  children,
}: {
  Icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  highlight: string;
  children: ReactNode;
}) {
  return (
    <article
      className="w-[90%] rounded-2xl border-1 border-white/5 bg-[#1f1d1d] px-[2rem] py-[2rem] shadow-xl/20"
    >
      <div className="mb-[1.2rem] flex items-center gap-3">
        <Icon size={22} className="text-ligthbrown" />
        <h3 className="font-poppins text-[1.8rem] font-semibold text-ligthbrown">
          {title}
        </h3>
      </div>
      <div className="font-raleway text-[1.6rem] leading-relaxed text-ligthbrown">
        {children}
      </div>
      <p className="mt-[1.2rem] font-raleway text-[1.6rem] text-ligthbrown">
        <span className="font-semibold text-ligthbrown">Destaque:</span> {highlight}
      </p>
    </article>
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
              className={`font-poppins text-[3.2rem] text-ligthbrown my-[1.5rem] opacity-75`}
            >
              RESUMO
            </h2>
          </header>

          <div className="flex w-full flex-col items-center gap-[2rem] pb-[2rem]">
            <ResumeCard
              Icon={HiOutlineCode}
              title="Experiência em Tecnologia"
              highlight="experiência profissional atual."
            >
              <p>03/2026 – Atual</p>
              <p className="mt-1 font-semibold text-ligthbrown">
                Desenvolvedor Full Stack — Estágio | Sitana Unipessoal, Lda
              </p>
              <p className="mt-2">
                Desenvolvimento e manutenção da plataforma Diversa21, com React,
                JavaScript, Netuno e integração com APIs.
              </p>
            </ResumeCard>

            <ResumeCard
              Icon={HiOutlineFolder}
              title="Projetos de Desenvolvimento"
              highlight="prática técnica e iniciativa própria."
            >
              <ul className="list-disc space-y-2 pl-[1.8rem]">
                <li>
                  <span className="font-semibold text-ligthbrown">Projeto Arts:</span>{" "}
                  aplicação em desenvolvimento com React, Node.js, Express e
                  PostgreSQL. - Em Desenvolvimento.
                </li>
                <li>
                  <span className="font-semibold text-ligthbrown">Pomodoro:</span>{" "}
                  aplicação de produtividade com temporizador e recursos de
                  personalização.
                </li>
              </ul>
            </ResumeCard>

            <ResumeCard
              Icon={HiOutlineAcademicCap}
              title="Formação Acadêmica"
              highlight="formação superior concluída."
            >
              <ul className="list-disc space-y-2 pl-[1.8rem]">
                <li>
                  Licenciatura em Educação Física — Universidade Estácio de Sá.
                </li>
                <li>
                  Bacharelado em Educação Física — Universidade Estácio de Sá.
                </li>
              </ul>
            </ResumeCard>

            <ResumeCard
              Icon={HiOutlineBriefcase}
              title="Experiência Profissional Anterior"
              highlight="trajetória profissional e competências transferíveis."
            >
              <ul className="list-disc space-y-2 pl-[1.8rem]">
                <li>
                  Professor de Educação Física — Prefeitura de Armação dos
                  Búzios.
                </li>
                <li>Professor de Musculação — Workout Búzios Fitness.</li>
                <li>Professor de Futebol de Areia — MM Treinamento de Atletas.</li>
              </ul>
            </ResumeCard>
          </div>

          <div
            className={`flex flex-col w-full justify-center items-center gap-[2rem] bg-[#232120] rounded-3xl my-[2rem] mb-[2rem]`}
          >
            <SoftSkillsSection />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resume;
