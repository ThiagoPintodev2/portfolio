import TecnologiesSection from "../../TecnologiesSection";
import AboutMeSection from "../../AboutMeSection";
import ProfileAside from "../../ProfileAside";
import Header from "@/components/Header";

function Home() {
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
          className={`flex flex-col h-[100%] gap-[2rem] items-center justify-between bg-[#232120] 
        rounded-3xl w-[80vw] m-auto sm:w-[70vw] md:w-[60vw] lg:w-[65vw] lg:mt-[8rem] lg:h-[100rem]`}
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
      </div>
    </div>
  );
}

export default Home;
