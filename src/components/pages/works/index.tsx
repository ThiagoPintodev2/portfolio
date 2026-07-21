import Header from "@/components/Header";
import ProfileAside from "@/components/ProfileAside";
import desktop from "@/assets/images/pomodoroImage/desktop.png";
import mobile from "@/assets/images/pomodoroImage/mobile.png";
import Skills from "@/components/Skills";

function Work() {
  const Workskills: string[] = [
    "HTML 5",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwindcss",
  ];

  return (
    <div>
      <Header />
      <main
        className={`flex w-[95vw] max-w-[1440px] mt-50 h-[90%] mx-auto gap-8 pb-18 items-stretch max-[1024px]:flex-col`}
      >
        <ProfileAside />
        <div
          className={`flex flex-col items-center justify-between bg-[#232120] 
        rounded-3xl mx-auto w-[80vw] sm:w-[70vw] md:w-[60vw] lg:flex-1 lg:mt-[8rem] lg:min-h-[100rem]`}
        >
          <div className={`flex flex-col items-center pb-[2rem]`}>
            <h2
              id={"projetos"}
              className={`font-poppins text-[3.2rem] text-ligthbrown m-[1.5rem] opacity-75`}
            >
              PORTIFÓLIO
            </h2>
            <hr className={`bg-[#232120] h-[2px] w-[12rem]`} />
            <div
              className={`flex flex-col my-[2rem] px-[2rem] w-[90%] items-center justify-center gap-[2rem] lg:flex-row
                ounded-3xl items-center border-1 shadow-xl/40 border-white/5 rounded-2xl`}
            >
              <img
                className={`w-[100%] h-auto mt-[2rem] lg:w-[60%]`}
                src={desktop}
                alt="Project One desktop view"
              />
              <img
                className={`w-[80%] h-auto lg:w-[30%]`}
                src={mobile}
                alt="Project One mobile1 view"
              />
            </div>

            <div
              className={`flex flex-col w-[90%] rounded-3xl items-center border-1 
                shadow-xl/40 border-white/5 lg:text-2xl`}
            >
              <p
                className={`text-ligthbrown text-[1.4rem] py-[2rem] font-poppins sm:text-[1.8rem] sm:px-[5rem] px-[3rem] text-center`}
              >
                Projeto Pomodoro - Totalmente responsivo. Projeto criado para
                gerenciar o tempo de estudo e tarefas utilizando a técnica
                Pomodoro. Possui configurações personalizáveis, como tempo de
                foco e pausa, temas e alarmes.
              </p>
            </div>
            <div
              className={`flex flex-col w-[90%] rounded-3xl items-center mt-[2rem] py-[2rem] rounded-3xl items-center border-1 
                shadow-xl/40 border-white/5`}
            >
              <p
                className={`text-ligthbrown text-[1.4rem] font-poppins sm:text-[1.8rem] sm:px-[5rem] px-[3rem] text-center`}
              >
                Tecnologias utilizadas:
              </p>
              <div
                className={`flex flex-wrap gap-8 rounded-2xl justify-center px-[1rem] lg:text-[1rem] mt-[1rem]`}
              >
                {Workskills.map((skill, i) => (
                  <Skills key={i} skill={skill} />
                ))}
              </div>
            </div>
            <a
              className={`text-ligthbrown text-[1.4rem] py-[2rem] font-poppins sm:text-[1.8rem] sm:px-[5rem] px-[3rem] text-center`}
              target="_blank"
              href="https://pomodoro-timer-by-thiago.netlify.app/"
            >
              Visite o projeto - https://pomodoro-timer-by-thiago.netlify.app/
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Work;
