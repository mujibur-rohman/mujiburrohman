import useInView from "@/hooks/useInView";

type Props = {
  activeSection: string;
};

function Hero({ activeSection }: Props) {
  const { ref, inView } = useInView({ threshold: 0.6 });
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
