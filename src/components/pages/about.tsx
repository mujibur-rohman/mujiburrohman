import useInView from "@/hooks/useInView";
import { DownloadIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  bottomToTop,
  leftToRight,
  opacity,
  rightToLeft,
  zoomIn,
} from "@/services/constant/animate";

const listSkills = {
  row1: [
    {
      color: "bg-orange-500",
      title: "HTML5",
    },
    {
      color: "bg-blue-500",
      title: "CSS3",
    },
    {
      color: "bg-fuchsia-500",
      title: "SCSS",
    },
    {
      color: "bg-yellow-500",
      title: "Javascript",
    },
    {
      color: "bg-blue-700",
      title: "Typescript",
    },
    {
      color: "bg-blue-300",
      title: "Tailwind",
    },
    {
      color: "bg-gray-700",
      title: "Radix UI",
    },
    {
      color: "bg-gray-900",
      title: "Shadcn UI",
    },
    {
      color: "bg-blue-600",
      title: "Ant Design",
    },
    {
      color: "bg-blue-400",
      title: "Mantine UI",
    },
    {
      color: "bg-purple-500",
      title: "Framer Motion",
    },
  ],
  row2: [
    {
      color: "bg-blue-800",
      title: "ReactJs",
    },
    {
      color: "bg-gray-800",
      title: "NextJs",
    },
    {
      color: "bg-pink-400",
      title: "Figma",
    },
    {
      color: "bg-green-700",
      title: "Node",
    },
    {
      color: "bg-orange-600",
      title: "Git",
    },
    {
      color: "bg-gray-600",
      title: "Github",
    },
    {
      color: "bg-orange-600",
      title: "Firebase",
    },
    {
      color: "bg-green-500",
      title: "Express",
    },
    {
      color: "bg-violet-500",
      title: "Prisma",
    },
    {
      color: "bg-orange-500",
      title: "MySQL",
    },
    {
      color: "bg-teal-500",
      title: "MongoDB",
    },
    {
      color: "bg-indigo-500",
      title: "GraphQL",
    },
  ],
};

type Props = {};

function About({}: Props) {
  const { ref } = useInView({ threshold: 0.6 });
  return (
    <section ref={ref} id="about" className="min-h-screen py-20">
      <div className="px-10 md:px-[7rem]">
        <motion.h1
          variants={zoomIn}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="text-[1.75rem] md:text-[2rem] font-bold"
        >
          About
        </motion.h1>
        <div className="mt-5">
          <motion.p
            variants={rightToLeft}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="leading-7"
          >
            A Developer who loves to build things from scratch and give them
            life or add some features to outdated or existing applications and
            make them shine again, focused on creating cutting-edge, elegant,
            and accessible user experiences. I'm passionate about the web, quite
            curious and enjoy learning every day and taking responsibility to
            solve real-world problems.
          </motion.p>
          <motion.p
            variants={leftToRight}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="mt-3 leading-7"
          >
            I have completed my{" "}
            <span className="text-primary-blue-400 font-semibold">
              Bachelor of Degree
            </span>{" "}
            in Computer Science from University of Bhayangkara Jakarta Raya in
            year 2023 and now working as a{" "}
            <span className="text-primary-blue-400 font-semibold">
              Front End Developer
            </span>{" "}
            from the last {new Date().getFullYear() - 2021} years, I've started
            my journey back in 2021, When I started learning and exploring
            Javascript and HTML/CSS. My initial focus was on Javascript, Later I
            moved forward to explore ReactJs. Apart from working with Front-end
            Technologies, I've decided to become a Full-Stack developer so I've
            started combining frontend with Node.js, Express, MySQL, and
            MongoDB.
          </motion.p>
        </div>
        <motion.div
          variants={zoomIn}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="border-gradient cursor-pointer text-primary-blue-400 mt-5 w-fit px-4 py-2 flex gap-2 rounded-full font-medium"
        >
          <span>
            <DownloadIcon />
          </span>{" "}
          Download CV
        </motion.div>
      </div>
      <motion.div
        variants={opacity}
        initial="offscreen"
        whileInView="onscreen"
        className="flex gap-20 py-2 mt-10"
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ translateX: "-100%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="flex gap-20"
        >
          {listSkills.row1.map((skill) => (
            <div key={skill.title} className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${skill.color}`}></div>
              <span className="whitespace-nowrap">{skill.title}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ translateX: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
          className="flex gap-20"
        >
          {listSkills.row1.map((skill) => (
            <div key={skill.title} className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${skill.color}`}></div>
              <span className="whitespace-nowrap">{skill.title}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        variants={opacity}
        initial="offscreen"
        whileInView="onscreen"
        className="flex gap-20 py-2 mt-3 md:mt-10"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ translateX: "100%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="flex gap-20"
        >
          {listSkills.row2.map((skill) => (
            <div key={skill.title} className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${skill.color}`}></div>
              <span className="whitespace-nowrap">{skill.title}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ translateX: "100%" }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
          className="flex gap-20"
        >
          {listSkills.row2.map((skill) => (
            <div key={skill.title} className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${skill.color}`}></div>
              <span className="whitespace-nowrap">{skill.title}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        variants={zoomIn}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="px-10 md:px-[7rem] mt-16"
      >
        <div className="relative flex flex-col md:flex-row gap-3 md:gap-2 justify-around backdrop-blur-lg p-5 bg-neutral-light-500 dark:bg-neutral-500/60 border-[1px] border-neutral-light-600 dark:border-neutral-200 rounded-md">
          <div className="absolute left-[50%] -z-10 translate-x-[-50%] w-full h-full blur-3xl bg-primary-purple-400/20" />
          <div className="flex justify-center items-center gap-3">
            <div className="text-[3rem] md:text-[4rem] font-bold flex items-center">
              <span>{new Date().getFullYear() - 2021}</span>
              <span className="text-primary-blue-500">+</span>
            </div>
            <span className="text-xl md:text-3xl font-bold flex flex-col">
              <span>Years of</span> <span>Experience</span>
            </span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="text-[3rem] md:text-[4rem] font-bold flex items-center">
              <span>10</span>
              <span className="text-primary-blue-500">+</span>
            </div>
            <span className="text-xl md:text-3xl font-bold flex flex-col">
              <span>Projects</span> <span>Completed</span>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
