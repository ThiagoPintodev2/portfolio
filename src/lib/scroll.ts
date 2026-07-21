// src/utils/scroll.ts
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let scrollTimer: number | undefined;
let cancelActiveScroll: (() => void) | undefined;

export const scrollToSection = (id: string) => {
  window.clearTimeout(scrollTimer);
  cancelActiveScroll?.();

  scrollTimer = window.setTimeout(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const interactionEvents = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
    const removeInteractionListeners = () => {
      interactionEvents.forEach((event) =>
        window.removeEventListener(event, stopScroll),
      );
      cancelActiveScroll = undefined;
    };

    const stopScroll = () => {
      gsap.killTweensOf(window);
      removeInteractionListeners();
    };

    interactionEvents.forEach((event) =>
      window.addEventListener(event, stopScroll, { once: true }),
    );
    cancelActiveScroll = stopScroll;

    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: element, offsetY: 80, autoKill: true },
      ease: "expo.out",
      onComplete: removeInteractionListeners,
    });
  }, 50);
};
