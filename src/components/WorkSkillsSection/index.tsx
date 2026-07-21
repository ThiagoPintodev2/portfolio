import Skills from "@/components/Skills";

function WorkskillsSection() {
  const Workskills: string[] = [
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
    <div className={`w-[100%] shadow-xl/20 border-white/5 border-1 text-ligthbrown 
    bg-[#1f1d1d] rounded-2xl pb-[1rem] md:w-[100%] lg:w-[45%]`}>
      <h5
        className={`font-poppins text-[2rem] text-ligthbrown text-center my-[2rem]`}
      >
        Work Skills
      </h5>
      <div
        className={`flex flex-wrap gap-8 rounded-2xl justify-center px-[1rem] lg:text-[1rem]`}
      >
        {Workskills.map((skill, i) => (
          <Skills key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default WorkskillsSection;
