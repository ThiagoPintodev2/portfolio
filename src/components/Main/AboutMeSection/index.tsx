function AboutMeSection() {
  return (
    <div className={`div-about-me bg-[#FFE3BF] lg:h-[45%]`}>
      <div className={`flex flex-col items-center lg:pt-[2rem]`}>
        <h2 className={`font-poppins text-[3.2rem] text-[#232120] m-[1rem]`}>
          ABOUT ME
        </h2>
        <hr className={`bg-[#232120] h-[2px] w-[12rem]`} />
      </div>
      <div>
        <p
          className={`font-raleway text-[1.6rem] p-[3rem] text-center text-[#232120] lg:text-[1.7rem] xl:text-[1.8rem]`}
        >
          Novo na área de tecnologia e em constante evolução. Recentemente, fiz
          uma transição de carreira de professor de Educação Física para o universo da
          programação. Por que? Porque acredito que a tecnologia é a ferramenta
          mais poderosa para transformar ideias em realidade. Ser um
          profissional Júnior para mim significa ter 'mente de principiante':
          estou sempre disposto a aprender, aceitar feedbacks e testar novas
          formas de chegar a um resultado. Dedico meus dias a aperfeiçoar minhas
          habilidades. Estou pronto para somar em uma equipe que valorize a
          vontade de crescer e o compromisso com a entrega."
        </p>
      </div>
    </div>
  );
}

export default AboutMeSection;
