import useInView from "@/hooks/useInView";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import { useRouter } from "next/router";

type Props = {};

const transition = (delay?: number) => ({
  duration: 0.4,
  ease: [0, 0.71, 0.2, 1.01],
  scale: {
    type: "spring",
    damping: 5,
    stiffness: 100,
    restDelta: 0.001,
  },
  delay,
});

function Hero({}: Props) {
  const { ref } = useInView({ threshold: 0.6 });
  const router = useRouter();

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex justify-center items-center px-10 md:px-[7rem]"
    >
      <div className="absolute -right-10 -top-10 w-[10rem] h-[10rem] blur-[10rem] bg-primary-purple-400" />
      <div className="relative flex flex-col gap-3 items-start font-bold">
        <div className="absolute top-[50%] w-12 h-12 md:w-15 md:h-15 blur-3xl bg-primary-purple-400" />
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: [10, -3, 0],
            }}
            transition={transition()}
            className="text-[2rem] md:text-[2.5rem]"
          >
            Hi there{" "}
            <motion.span
              className="inline-block"
              animate={{
                rotate: [0, 25, 15, 25, 0],
                transition: { repeat: Infinity, repeatDelay: 1.3, delay: 1.8 },
              }}
            >
              &#128075;&#127996;
            </motion.span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: [10, -3, 0],
            }}
            transition={transition(0.5)}
            className="text-[2rem] md:text-[2.5rem]"
          >
            I&apos;m{" "}
            <span className="relative before:right-0 before:bottom-1 before:content-[''] before:block before:absolute before:w-[50%] before:h-3 before:bg-primary-blue-300 dark:before:bg-primary-blue-500">
              <motion.span className="relative">Mujiburrohman</motion.span>
            </span>
          </motion.h1>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: [10, -3, 0],
          }}
          transition={transition(1)}
          className="font-normal text-sm md:text-lg"
        >
          A self-taught Frontend Developer who is currently focusing and diving
          into the world of React.js, Next.js, and other related technologies.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: [0.2, 1],
          }}
          transition={transition(1.4)}
          className="flex gap-2 mt-2"
        >
          <motion.div
            onClick={() => {
              router.push("https://github.com/mujibur-rohman");
            }}
            whileTap={{ scale: 1.1 }}
            className="border-gradient cursor-pointer inline-block rounded-full p-2 dark:p-3 md:p-4 dark:md:p-[1.15rem] transition-colors hover:bg-blue-500/30"
          >
            <GithubIcon className="text-blue-500 dark:text-purple-100" />
          </motion.div>
          <motion.div
            onClick={() => {
              router.push("https://www.linkedin.com/in/muji-burrohman/");
            }}
            whileTap={{ scale: 1.1 }}
            className="border-gradient cursor-pointer inline-block rounded-full p-2 dark:p-3 md:p-4 dark:md:p-[1.15rem] transition-colors hover:bg-blue-500/30"
          >
            <LinkedinIcon className="text-blue-500 dark:text-purple-100 " />
          </motion.div>
          <motion.div
            onClick={() => {
              router.push("https://www.instagram.com/mujiburrrrrr/");
            }}
            whileTap={{ scale: 1.1 }}
            className="border-gradient cursor-pointer inline-block rounded-full p-2 dark:p-3 md:p-4 dark:md:p-[1.15rem] transition-colors hover:bg-blue-500/30"
          >
            <InstagramIcon className="text-blue-500 dark:text-purple-100" />
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute w-full flex bottom-0 py-4 justify-center md:justify-between px-10 md:px-[10rem]">
        <p className="text-sm">
          &copy; Mujiburrohman {new Date().getFullYear()}
        </p>
        <p className="text-sm hidden md:block">Last visit from Indonesia</p>
      </div>
    </section>
  );
}

export default Hero;
