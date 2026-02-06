import Header from "@/components/Header";
import ProfileAside from "@/components/ProfileAside";
import desktop from "@/assets/images/pomodoroImage/desktop.png";
import mobile from "@/assets/images/pomodoroImage/mobile.png";

function Work() {
  return (
    <div>
      <Header />
      <div
        className={`flex mt-50 max-w-[1280px] h-[90%] m-auto gap-8 pb-18 max-[1024px]:flex-col`}
      >
        <div>
          <ProfileAside />
        </div>
        <div
          className={`flex flex-col h-[100%] items-center justify-between bg-[#232120] 
        rounded-3xl m-auto w-[80vw] sm:w-[70vw] md:w-[60vw] lg:mt-[8rem] lg:w-[65vw] lg:h-[100rem] xl:w-[65vw]`}
        >
          <div className={`flex flex-col items-center pb-[2rem]`}>
            <h2
              className={`font-poppins text-[3.2rem] text-ligthbrown m-[1.5rem] opacity-75`}
            >
              PORTFOLIO
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
            <div className={`flex flex-col w-[90%] rounded-3xl items-center border-1 
                shadow-xl/40 border-white/5 lg:text-2xl`}>

            <p
              className={`text-ligthbrown text-[1.4rem] py-[2rem] font-poppins sm:text-[1.8rem] sm:px-[5rem] px-[3rem] text-justify`}
            >
              Projeto Pomodoro - Totalmente responsivo. Projeto criado para
              gerenciar o tempo de estudo e tarefas utilizando a técnica
              Pomodoro. Desenvolvido com ReactJS, TypeScript, TailwindCSS e
              shadcn UI. Possui configurações personalizáveis, como tempo de
              foco e pausa, temas e alarmes.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
