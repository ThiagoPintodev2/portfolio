import TecnologiesSection from "../../TecnologiesSection";
import AboutMeSection from "../../AboutMeSection";
import ProfileAside from "../../ProfileAside";
import Header from "@/components/Header";

function Home() {
  return (
    <div>
      <Header />
      <main
        className={`flex w-[95vw] max-w-[1440px] mt-50 h-[90%] mx-auto gap-8 pb-18 items-stretch max-[1024px]:flex-col`}
      >
        <ProfileAside />
        <div
          className={`flex flex-col gap-[2rem] items-center justify-between bg-[#232120] 
        rounded-3xl w-[80vw] mx-auto sm:w-[70vw] md:w-[60vw] lg:flex-1 lg:mt-[8rem] lg:min-h-[100rem]`}
        >
          <AboutMeSection
            id={"home"}
            text={`Possuo experiênciaprática com
              React, JavaScript, TypeScript, HTML, CSS, APIs REST, WebSockets e Git/GitHub,
              atuandono desenvolvimento e manutenção de aplicações web.
              Experiência profissional no desenvolvimento e evolução da plataforma open-source Diversa21,
              contribuindo para a implementação de funcionalidades, integração entre Front-End e Back-End,
              desenvolvimento de recursos em tempo real, investigação e correção de bugs e melhorias de UI/UX.`}
            title={"Sobre mim"}
          />
          <TecnologiesSection />
        </div>
      </main>
    </div>
  );
}

export default Home;
