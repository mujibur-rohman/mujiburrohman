import useInView from "@/hooks/useInView";

type Props = {};

function Work({}: Props) {
  const { ref } = useInView({ threshold: 0.6 });
  return (
    <section ref={ref} id="work" className="min-h-screen py-20">
      <div className="px-10 md:px-[7rem] flex flex-col">
        <div className="text-[1.75rem] md:text-[2rem] font-bold inline">
          <span>Work</span>
        </div>
        <div className="mt-5 flex flex-col md:flex-row overflow-hidden h-full rounded-xl border bg-neutral-light-500 dark:bg-neutral-500 dark:border-neutral-400/30">
          <img
            src="https://cdn.pixabay.com/photo/2023/10/27/10/49/australian-king-parrot-8345064_1280.jpg"
            alt="img"
            className="object-cover object-center h-[50%] md:h-auto md:w-[50%]"
          />
          <div className="p-10 h-[50%] md:h-auto md:w-[50%] bg-[url(/pattern.svg)] dark:bg-[url(/pattern-dark.svg)]">
            <h1 className="text-2xl dark:text-white font-bold">Catalogue</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              consequuntur, iusto quos pariatur, maxime nihil non laboriosam
              architecto ipsam quo iste illo atque, possimus laborum consectetur
              provident corporis minus distinctio!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
