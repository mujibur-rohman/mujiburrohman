import { LegacyRef, RefObject, useEffect, useRef, useState } from "react";

function useInView(options: IntersectionObserverInit | undefined) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
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
  }, [options, ref.current]);
  return { ref, inView };
}

export default useInView;
