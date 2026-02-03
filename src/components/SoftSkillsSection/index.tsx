import Skills from "../Skills";

function SoftSkillsSection() {
  const SoftSkills = [
    "Comunicação",
    "Trabalho em equipe",
    "Comunicação Assertiva",
    "Disciplina e Foco",
    "Adaptabilidade",
  ];

  return (
    <div className={`w-[90%] shadow-xl/20 border-white/5 border-1 text-ligthbrown bg-[#1f1d1d] rounded-2xl pb-[1rem] lg:w-[100%]`}>
      <h5
        className={`font-poppins text-[2rem] text-ligthbrown text-center my-[2rem]`}
      >
        Soft Skills
      </h5>
      <div
        className={`flex flex-wrap px-[1rem] gap-10 rounded-2xl justify-center`}
      >
        {SoftSkills.map((skill, i) => (
          <Skills key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SoftSkillsSection;
