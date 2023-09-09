import useInView from "@/hooks/useInView";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react";

type Props = {};

function Hero({}: Props) {
  const { ref } = useInView({ threshold: 0.6 });
  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex justify-center items-center"
    >
      <div className="absolute -right-10 -top-10 w-[10rem] h-[10rem] blur-[10rem] bg-primary-purple-400" />
      <div className="relative flex flex-col gap-3 items-start font-bold px-10">
        <div className="absolute top-[50%] w-12 h-12 md:w-15 md:h-15 blur-3xl bg-primary-purple-400" />
        <div>
          <h1 className="text-[2rem] md:text-[2.5rem]">
            Hi there <span>&#128075;&#127996;</span>
          </h1>
          <h1 className="text-[2rem] md:text-[2.5rem]">
            I'm{" "}
            <span className="relative before:right-0 before:bottom-1 before:content-[''] before:block before:absolute before:w-[50%] before:h-3 before:bg-primary-blue-300 dark:before:bg-primary-blue-500">
              <motion.span className="relative">Mujiburrohman</motion.span>
            </span>
          </h1>
        </div>
        <h1 className="font-normal text-sm md:text-md">
          A self-taught Frontend Developer who is currently focusing and diving
          into the world of React.js, Next.js, and other related technologies.
        </h1>
        <div className="flex gap-2 mt-2">
          <motion.div
            whileTap={{ scale: 1.1 }}
            className="border-gradient cursor-pointer inline-block rounded-full p-2 dark:p-3 md:p-4 dark:md:p-[1.15rem] transition-colors hover:bg-blue-500/30"
          >
            <GithubIcon className="text-blue-500 dark:text-purple-100" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className="border-gradient cursor-pointer inline-block rounded-full p-2 dark:p-3 md:p-4 dark:md:p-[1.15rem] transition-colors hover:bg-blue-500/30"
          >
            <LinkedinIcon className="text-blue-500 dark:text-purple-100 " />
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className="border-gradient cursor-pointer inline-block rounded-full p-2 dark:p-3 md:p-4 dark:md:p-[1.15rem] transition-colors hover:bg-blue-500/30"
          >
            <InstagramIcon className="text-blue-500 dark:text-purple-100" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
