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
    <div
      className={`flex flex-col h-[100%] gap-[2rem] pb-[1.5rem] mt-[2rem] items-center justify-between bg-[#232120] 
        rounded-3xl w-[80vw] m-auto sm:w-[70vw] md:w-[60vw] lg:w-[65vw] lg:mt-[8rem] lg:h-[100rem]`}
    >
      <h5
        className={`font-poppins text-[2rem] text-ligthbrown text-center my-[2rem]`}
      >
        Work Skills
      </h5>
      <div className={`flex flex-wrap px-[2rem] gap-10 rounded-2xl justify-center`}>
        {Workskills.map((skill, i) => (
          <Skills key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default WorkskillsSection;
