import useInView from "@/hooks/useInView";

type Props = {};

function Blog({}: Props) {
  const { ref } = useInView({ threshold: 0.6 });

  return (
    <section
      ref={ref}
      id="blog"
      className="min-h-screen flex justify-center items-center border-b-2"
    >
      <h1 className="text-2xl">Blog</h1>
    </section>
  );
}

export default Blog;
