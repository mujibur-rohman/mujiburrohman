import { useEffect, useRef, useState } from "react";

function useInView(options?: IntersectionObserverInit | undefined) {
  const [inView, setInView] = useState<string>("");
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(entry.target.id);
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
  }, [options, ref.current]);
  return { ref, inView };
}

export default useInView;
