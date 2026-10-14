import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Skills from "@/components/Skills";
import type { Project } from "./projects";
import { Button } from "@/components/ui/button";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function imageSizeClass(imageCount: number, index: number) {
  if (imageCount > 2 && index === 0) return "w-full lg:w-[58%] lg:min-w-0 lg:shrink";
  if (imageCount > 2) return "w-[72%] lg:w-[22%] lg:min-w-0 lg:shrink";
  if (index === 0) return "w-full lg:w-[60%]";
  return "w-[80%] lg:w-[30%]";
}

function ProjectSlide({ project }: { project: Project }) {
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedSrc) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedSrc(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedSrc]);

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className={`my-[2rem] flex w-[90%] flex-wrap items-center justify-center gap-[2rem] border-1 px-[2rem] pb-[2rem] shadow-xl/40 border-white/5 rounded-2xl lg:flex-row ${
          project.images.length > 2
            ? "max-lg:flex-col lg:aspect-[15/8] lg:min-h-0 lg:content-start lg:flex-nowrap lg:gap-x-[0.6rem] lg:overflow-hidden"
            : ""
        }`}
      >
        {project.images.map((src, index) => (
          <button
            key={src}
            type="button"
            className={`mt-[2rem] cursor-zoom-in border-0 bg-transparent p-0 ${imageSizeClass(project.images.length, index)}`}
            aria-label={`Ampliar visualização ${index + 1} do projeto ${project.id}`}
            onClick={() => setSelectedSrc(src)}
          >
            <img
              className="h-auto w-full"
              src={src}
              alt={`Visualização ${index + 1} do projeto ${project.id}`}
            />
          </button>
        ))}
      </div>
      {selectedSrc
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-[2rem]"
              onClick={() => setSelectedSrc(null)}
            >
              <button
                type="button"
                className="absolute top-[2rem] right-[2rem] flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-full border border-white/20 bg-[#1f1d1d] text-ligthbrown"
                aria-label="Fechar imagem"
                onClick={() => setSelectedSrc(null)}
              >
                <X className="h-[2.2rem] w-[2.2rem]" />
              </button>
              <img
                className="max-h-[90vh] max-w-[92vw] object-contain"
                src={selectedSrc}
                alt={`Visualização ampliada do projeto ${project.id}`}
                onClick={(event) => event.stopPropagation()}
              />
            </div>,
            document.body,
          )
        : null}

      {project.description ? (
        <div
          className={`flex flex-col w-[90%] rounded-3xl items-center border-1 
          shadow-xl/40 border-white/5 lg:text-2xl`}
        >
          <p
            className={`text-ligthbrown text-[1.4rem] py-[2rem] font-poppins sm:text-[1.8rem] sm:px-[5rem] px-[3rem] text-center`}
          >
            {project.description}
          </p>
        </div>
      ) : null}
      {project.skills.length > 0 ? (
        <div
          className={`flex flex-col w-[90%] rounded-3xl items-center mt-[2rem] py-[2rem] border-1 
          shadow-xl/40 border-white/5`}
        >
          <p
            className={`text-ligthbrown text-[1.4rem] font-poppins sm:text-[1.8rem] sm:px-[5rem] px-[3rem] text-center`}
          >
            Tecnologias utilizadas:
          </p>
          <div
            className={`flex flex-wrap gap-8 rounded-2xl justify-center px-[1rem] lg:text-[1rem] mt-[1rem]`}
          >
            {project.skills.map((skill) => (
              <Skills key={skill} skill={skill} />
            ))}
          </div>
        </div>
      ) : null}

      {project.status ? (
        <Button
          disabled
          className={`inline-flex h-[6rem] w-fit cursor-not-allowed items-center justify-center rounded-2xl border-white/5 bg-ligthbrown px-[4rem] mt-[3rem] mb-[3rem] font-raleway text-[1.5rem] font-semiboldd text-darkbrown opacity-80 sm:text-[2rem] lg:mt-[2rem] lg:text-[1.8rem] lg:shadow-xl/20`}
        >
          {project.status}
        </Button>
      ) : project.url ? (
      <Button
        asChild
        className={`inline-flex flex-row items-center justify-center w-fit gap-[1rem] h-[6rem] rounded-2xl bg-ligthbrown border-white/5 lg:shadow-xl/20 
          text-[1.5rem] font-raleway font-semiboldd cursor-pointer mt-[3rem] text-darkbrown sm:text-[2rem] lg:text-[1.8rem] lg:mt-[2rem] px-[4rem] has-[>svg]:px-[4rem] ${
            project.note ? "" : "mb-[3rem]"
          }`}
      >
        <a href={project.url} target="_blank" rel="noreferrer">
          Visite o projeto
          <FaArrowUpRightFromSquare className="size-[1.7rem]" />
        </a>
      </Button>
      ) : null}
      {project.note ? (
        <p
          className={`mb-[3rem] mt-[1.6rem] w-[90%] text-center font-poppins text-[1.3rem] text-ligthbrown sm:px-[5rem] sm:text-[1.6rem] px-[3rem]`}
        >
          {project.note}
        </p>
      ) : null}
    </div>
  );
}

export default ProjectSlide;
