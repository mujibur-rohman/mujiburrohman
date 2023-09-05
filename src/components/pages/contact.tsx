import useInView from "@/hooks/useInView";

type Props = {};

function Contact({}: Props) {
  const { ref } = useInView({ threshold: 0.6 });
  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen flex justify-center items-center border-b-2"
    >
      <h1 className="text-2xl">Contact</h1>
    </section>
  );
}

export default Contact;
