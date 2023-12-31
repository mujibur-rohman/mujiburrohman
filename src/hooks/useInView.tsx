import { SectionContext } from "@/context/section-provider";
import { useContext, useEffect, useRef, useState } from "react";

function useInView(options?: IntersectionObserverInit) {
  const [inView, setInView] = useState<string>("");
  const ref = useRef(null);
  const { sectionHandler } = useContext(SectionContext);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(entry.target.id);
          sectionHandler(entry.target.id);
        }
      });
    }, options);

    const target = ref.current;
    if (target) {
      obs.observe(target);
    }

    return () => {
      if (target) {
        obs.unobserve(target);
      }
    };
  }, []);
  return { ref, inView };
}

export default useInView;
