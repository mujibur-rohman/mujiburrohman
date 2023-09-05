import useInView from "@/hooks/useInView";

type Props = {};

function Hero({}: Props) {
  const { ref } = useInView({ threshold: 0.6 });
  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex justify-center items-center border-b-2"
    >
      <h1 className="text-2xl">Hero</h1>
    </section>
  );
}

export default Hero;
