import useInView from "@/hooks/useInView";

type Props = {};

function Work({}: Props) {
  const { ref } = useInView({ threshold: 0.6 });
  return (
    <section
      ref={ref}
      id="work"
      className="min-h-screen flex justify-center items-center border-b-2"
    >
      <h1 className="text-2xl">Work</h1>
    </section>
  );
}

export default Work;
