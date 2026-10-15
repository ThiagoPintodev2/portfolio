import WorkskillsSection from "../WorkSkillsSection";

function TecnologieSection() {
  return (
    <div
      className={`div-default bg-[#232120] lg:border lg:border-white/5 lg:shadow-xl/20 mb-[2.5rem]`}
    >
      <div className={`flex flex-col items-center`}>
        <h2
          className={`font-poppins text-[3.2rem] text-center text-ligthbrown m-[1.5rem] opacity-75`}
        >
          Competências técnicas
        </h2>
      </div>
      <div>
        <div className={`p-about-me w-full text-ligthbrown`}>
          <ul className="list-disc space-y-[1.2rem] pl-[2.4rem] text-left">
            <li>
              <strong>Interfaces:</strong> desenvolvimento de componentes e
              interfaces responsivas com React, HTML e CSS.
            </li>
            <li>
              <strong>JavaScript:</strong> implementação de funcionalidades e
              interações dinâmicas.
            </li>
            <li>
              <strong>APIs e tempo real:</strong> integração com APIs REST e
              WebSockets.
            </li>
            <li>
              <strong>UI/UX:</strong> criação de layouts organizados, intuitivos
              e consistentes.
            </li>
            <li>
              <strong>Manutenção:</strong> identificação e correção de bugs,
              refatoração e melhorias contínuas.
            </li>
            <li>
              <strong>Versionamento:</strong> utilização de Git e GitHub para
              gerenciamento de código.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-center pb-[2rem]">
        <WorkskillsSection />
      </div>
    </div>
  );
}

export default TecnologieSection;
