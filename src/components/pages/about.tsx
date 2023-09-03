import useInView from "@/hooks/useInView";

type Props = {};

function About({}: Props) {
  const { ref, inView } = useInView({ threshold: 0.6 });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen text-primary-purple-100 bg-white border-b-2 dark:bg-neutral-500"
    >
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>About</p>
      <p>{inView ? "active" : "Nonaktif"}</p>
    </section>
  );
}

export default About;
