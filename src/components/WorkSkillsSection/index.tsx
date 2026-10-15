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
    "Ant Design",
    "Shadcn UI",
    "Git",
    "GitHub",
    "webSocket"
  ];

  return (
    <div className={`w-[90%] shadow-xl/20 border-white/5 border-1 text-ligthbrown 
    bg-[#1f1d1d] rounded-2xl pb-[1rem]`}>
      <h5
        className={`font-poppins text-[2rem] text-ligthbrown text-center my-[1rem]`}
      >
        Work Skills
      </h5>
      <div
        className={`flex flex-wrap gap-4 rounded-2xl justify-center px-[1rem] lg:text-[1rem]`}
      >
        {Workskills.map((skill, i) => (
          <Skills key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default WorkskillsSection;
