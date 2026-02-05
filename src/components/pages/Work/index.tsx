import Header from "@/components/Header";
import ProfileAside from "@/components/ProfileAside";
import projectPomodoroHome from "@/assets/images/pomodoroImage/home.png";
import projectPomodoroSetting from "@/assets/images/pomodoroImage/setting.png";
import projectPomodoroTimer from "@/assets/images/pomodoroImage/createAccountMobile.png";
import projectPomodoroHomeMobile from "@/assets/images/pomodoroImage/homeMobile.png";
import themeColor from "@/assets/images/pomodoroImage/themeColor.png";

function Work() {
  const projectsDatas = [
    {
      id: 1,
      title: "Project One",
      description: "Description for project one",
      link: "https://example.com/project-one",
      img: projectPomodoroHome,
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description for project two",
      link: "https://example.com/project-two",
      img: projectPomodoroSetting,
    },
    {
      id: 3,
      title: "Project Three",
      description: "Description for project three",
      link: "https://example.com/project-three",
      img: projectPomodoroTimer,
    },
    {
      id: 4,
      title: "Project Three",
      description: "Description for project three",
      link: "https://example.com/project-three",
      img: projectPomodoroHomeMobile,
    },
    {
      id: 5,
      title: "Project Three",
      description: "Description for project three",
      link: "https://example.com/project-three",
      img: themeColor,
    },
  ];

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
          <div className={`flex flex-col items-center`}>
            <h2
              className={`font-poppins text-[3.2rem] text-ligthbrown m-[1.5rem] opacity-75`}
            >
              PORTFOLIO
            </h2>
            <hr className={`bg-[#232120] h-[2px] w-[12rem]`} />
            <div
              className={`flex flex-wrap max-w-[840px] justify-center mt-[3rem] gap-8 mb-[2rem]`}
            >
              {projectsDatas.map((project) => (
                <div className={`w-[20rem]`} key={project.id}>
                  <img
                    className={`rounded-4xl`}
                    src={project.img}
                    alt={project.title}
                  />
                </div>
              ))}
            </div>
            <p
              className={`text-ligthbrown font-poppins text-[2rem] mt-[2rem] p-[5rem] text-justify`}
            >
              Projeto Pomodoro - Totalmente responsivo. Projeto criado para gerenciar o tempo de estudo
              e tarefas utilizando a técnica Pomodoro. Desenvolvido com ReactJS,
              TypeScript, TailwindCSS e shadcn UI. Possui configurações
              personalizáveis, como tempo de foco e pausa, temas e alarmes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
