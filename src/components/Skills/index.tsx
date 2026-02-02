import type { skillsProps } from "./skills"

function Skills({ skill }: skillsProps) {
  return (
    <div>
      <p className={`text-white font-poppins text-[1.5rem] shadow-xl/20
         border-white/5 border-1 text-ligthbrown bg-[#1f1d1d] px-4 py-2 rounded-lg`}>{skill}</p>
    </div>
  )
}

export default Skills
