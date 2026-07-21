import Skills from "../Skills";

function SoftSkillsSection() {
  const SoftSkills: string[] = [
    "Comunicação",
    "Foco",
    "Trabalho em equipe",
    "Disciplina",
    "Adaptabilidade",
    "Colaboração",
  ];

  return (
    <div
      className={`w-[100%] shadow-xl/20 border-white/5 border-1 text-ligthbrown 
    bg-[#1f1d1d] rounded-2xl pb-[1rem] md:w-[100%] lg:w-[45%]`}
    >
      <h5
        className={`font-poppins text-[2rem] text-ligthbrown text-center my-[2rem]`}
      >
        Soft Skills
      </h5>
      <div
        className={`flex flex-wrap px-[1rem] gap-8 rounded-2xl justify-center`}
      >
        {SoftSkills.map((skill, i) => (
          <Skills key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SoftSkillsSection;
