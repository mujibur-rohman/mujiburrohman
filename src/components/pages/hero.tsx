import useInView from "@/hooks/useInView";
import { CSSProperties } from "react";

type Props = {};

function Hero({}: Props) {
  const { ref } = useInView({ threshold: 0.6 });
  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="font-bold px-10">
        <h1 className="text-[2rem]">
          Hi there <span>&#128075;&#127996;</span>
        </h1>
        <h1 className="text-[2rem]">
          I'm{" "}
          <span className="relative before:right-0 before:bottom-1 before:content-[''] before:block before:absolute before:w-[50%] before:h-3 before:bg-primary-blue-500">
            <span className="relative">Mujiburrohman</span>
          </span>
        </h1>
        <h1 className="font-normal mt-4">
          A self-taught Frontend Developer who is currently focusing and diving
          into the world of React.js, Next.js, and other related technologies.
        </h1>

        <div className="border-gradient">
          <p className="">Hello, gradient</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
