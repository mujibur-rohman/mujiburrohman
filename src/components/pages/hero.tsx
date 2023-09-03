import useInView from "@/hooks/useInView";

type Props = {};

function Hero({}: Props) {
  const { ref, inView } = useInView({ threshold: 0.4 });

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen text-primary-purple-100 border-b-2"
    >
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>Hero</p>
      <p>{inView ? "active" : "Nonaktif"}</p>
    </section>
  );
}

export default Hero;
