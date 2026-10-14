import Header from "@/components/Header";
import ProfileAside from "@/components/ProfileAside";
import ProjectsCarousel from "./ProjectsCarousel";

function Work() {
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
          <div className={`flex w-full flex-col items-center pb-[2rem]`}>
            <h2
              id={"projetos"}
              className={`font-poppins text-[3.2rem] text-ligthbrown m-[1.5rem] opacity-75`}
            >
              Projetos
            </h2>
            <ProjectsCarousel />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Work;
