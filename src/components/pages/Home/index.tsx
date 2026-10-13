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
            title={"Sobre mim"}
            text={
              <>
                <p>
                  Sou desenvolvedor Front-End com experiência prática no
                  desenvolvimento e na manutenção de aplicações web.
                </p>
                <ul className="mt-[2rem] list-disc space-y-[1.2rem] pl-[2.4rem] text-left">
                  <li>
                    <strong>Experiência:</strong> atuação no desenvolvimento e
                    na evolução da plataforma open-source Diversa21.
                  </li>
                  <li>
                    <strong>Desenvolvimento:</strong> criação e manutenção de
                    interfaces com React e JavaScript.
                  </li>
                  <li>
                    <strong>Integração:</strong> consumo de APIs REST e
                    utilização de WebSockets para funcionalidades em tempo
                    real.
                  </li>
                  <li>
                    <strong>Qualidade:</strong> investigação e correção de
                    bugs, melhorias de UI/UX e colaboração com a equipe.
                  </li>
                </ul>
              </>
            }
          />
          <TecnologiesSection />
        </div>
      </main>
    </div>
  );
}

export default Home;
