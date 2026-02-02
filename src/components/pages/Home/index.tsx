import TecnologiesSection from "../../TecnologiesSection";
import AboutMeSection from "../../AboutMeSection";
import ProfileAside from "../../ProfileAside";

function Home() {
  return (
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
          text={`Novo na área de tecnologia e em constante evolução. Recentemente, fiz
          uma transição de carreira de Educação Física para o universo da
          programação. Por que? Porque acredito que a tecnologia é a ferramenta
          mais poderosa para transformar ideias em realidade. Ser um
          profissional Júnior para mim significa ter 'mente de principiante':
          estou sempre disposto a aprender, aceitar feedbacks e testar novas
          formas de chegar a um resultado. Dedico meus dias a aperfeiçoar minhas
          habilidades. Estou pronto para somar em uma equipe que valorize a
          vontade de crescer e o compromisso com a entrega.`}
          title={"ABOUT ME"}
        />
        <TecnologiesSection />
      </div>
    </div>
  );
}

export default Home;
