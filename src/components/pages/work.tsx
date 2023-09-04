import useInView from "@/hooks/useInView";

type Props = {};

function Work({}: Props) {
  const { ref } = useInView({ threshold: 0.6 });
  return (
    <section
      ref={ref}
      id="work"
      className="min-h-screen text-primary-purple-100 bg-white border-b-2 dark:bg-neutral-500"
    >
      Work
    </section>
  );
}

export default Work;
