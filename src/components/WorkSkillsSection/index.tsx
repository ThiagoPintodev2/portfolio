import Skills from "@/components/Skills";

function WorkskillsSection() {
  const Workskills = [
    "CSS 3",
    "HTML 5",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Tailwindcss",
    "Git",
    "GitHub",
  ];

  return (
    <div className={`w-[90%] shadow-xl/20 border-white/5 border-1 text-ligthbrown bg-[#1f1d1d] rounded-2xl pb-[1rem] lg:w-[100%] lg:mt-[-2rem]`}>
      <h5
        className={`font-poppins text-[2rem] text-ligthbrown text-center my-[2rem]`}
      >
        Work Skills
      </h5>
      <div
        className={`flex flex-wrap gap-10 rounded-2xl justify-center px-[1rem]`}
      >
        {Workskills.map((skill, i) => (
          <Skills key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default WorkskillsSection;
