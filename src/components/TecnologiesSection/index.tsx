import TecnologiesIcons from "../TecnologiesIcons";

function TecnologieSection() {
  return (
    <div
      className={`div-about-me bg-[#232120] lg:border lg:border-white/5 lg:shadow-xl/20 lg:h-[55%] mb-[2.5rem]`}
    >
      <div className={`flex flex-col items-center`}>
        <h2 className={`font-poppins text-[3.2rem] text-ligthbrown m-[1.5rem] opacity-75`}>
          WHAT I DO
        </h2>
        <hr className={`bg-white w-[12rem] `} />
      </div>
      <div>
        <p
          className={`p-about-me text-ligthbrown`}
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
        <TecnologiesIcons />
      </div>
    </div>
  );
}

export default TecnologieSection;
