import TecnologysIcons from "../TecnologysIcons";

function TecnologysSection() {
  return (
    <div
      className={`div-about-me bg-[#232120] lg:border lg:border-white/5 lg:shadow-xl/20 lg:h-[60%]`}
    >
      <div className={`flex flex-col items-center lg:pt-[2rem]`}>
        <h2 className={`font-poppins text-[3.2rem] text-ligthbrown m-[1rem]`}>
          WHAT I DO
        </h2>
        <hr className={`bg-white w-[12rem]`} />
      </div>
      <div>
        <p
          className={`font-raleway text-[1.6rem] p-[3rem] text-center text-ligthbrown lg:text-[1.7rem] xl:text-[1.8rem]`}
        >
          "Minha atuação no Frontend é focada em transformar ideias em realidade
          através de código limpo e interfaces modernas. Utilizo HTML, CSS e
          JavaScript como base para criar estruturas semânticas e eficientes.
          Com o React, desenvolvo aplicações modulares e inteligentes, elevando
          o nível de interatividade. Na visual, domino o Tailwind CSS criando
          layouts personalizados com rapidez. Uso biblioteca shadcn/ui
          para garantir componentes de alta qualidade técnica e estética. Estou
          sempre explorando como essas ferramentas podem trabalhar juntas para
          resolver problemas e proporcionar ao usuário final, uma ótima
          experiência"
        </p>
      </div>
      <div>
        <TecnologysIcons />
      </div>
    </div>
  );
}

export default TecnologysSection;
