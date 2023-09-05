import useInView from "@/hooks/useInView";

type Props = {};

function About({}: Props) {
  const { ref, inView } = useInView({ threshold: 0.6 });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex justify-center items-center border-b-2"
    >
      <h1 className="text-2xl">About</h1>
    </section>
  );
}

export default About;
