import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectSlide from "./ProjectSlide";
import { projects } from "./projects";

const controlButtonClass =
  "flex h-[4.4rem] w-[4.4rem] shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#1f1d1d] text-ligthbrown disabled:opacity-40";

function ProjectsCarousel() {
  const canLoop = projects.length > 1;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: canLoop,
    watchDrag: canLoop,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-[1rem] flex items-center justify-center gap-[1.6rem]">
        <button
          type="button"
          className={controlButtonClass}
          aria-label="Projeto anterior"
          disabled={!canLoop}
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft className="h-[2.4rem] w-[2.4rem]" />
        </button>
        <div className="flex items-center gap-[0.8rem]">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              aria-label={`Ir para o projeto ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : undefined}
              className={`h-[1rem] w-[1rem] rounded-full ${
                index === selectedIndex ? "bg-ligthbrown" : "bg-white/25"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className={controlButtonClass}
          aria-label="Próximo projeto"
          disabled={!canLoop}
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight className="h-[2.4rem] w-[2.4rem]" />
        </button>
      </div>

      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project) => (
            <div className="min-w-0 flex-[0_0_100%]" key={project.id}>
              <ProjectSlide project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
