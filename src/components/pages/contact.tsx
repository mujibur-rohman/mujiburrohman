import useInView from "@/hooks/useInView";

type Props = {};

function Contact({}: Props) {
  const { ref } = useInView({ threshold: 0.6 });
  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen text-primary-purple-100 bg-white border-b-2 dark:bg-neutral-500"
    >
      Contact
    </section>
  );
}

export default Contact;
