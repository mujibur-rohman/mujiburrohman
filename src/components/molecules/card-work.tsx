/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import { bottomToTop } from "@/services/constant/animate";

function CardWork({
  title,
  coverImg,
  description,
  pathGithub,
  pathWebsite,
  techStack,
}: {
  title: string;
  coverImg: string;
  pathWebsite: string;
  pathGithub: string;
  description: string;
  techStack: {
    src: string;
    alt: string;
    whiteBg: boolean;
  }[];
}) {
  return (
    <motion.div
      variants={bottomToTop}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="mt-5 flex flex-col lg:flex-row overflow-hidden h-full rounded-xl border bg-neutral-light-500 dark:bg-neutral-500 dark:border-neutral-400/30"
    >
      <div className="overflow-hidden h-[50%] lg:h-auto lg:w-[50%]">
        <img
          src={coverImg}
          alt="cover"
          className="object-cover hover:scale-110 transition-transform h-full object-left"
        />
      </div>
      <div className="p-10 flex flex-col gap-5 justify-between h-[50%] lg:h-auto lg:w-[50%] bg-[url(/pattern.svg)] dark:bg-[url(/pattern-dark.svg)]">
        <div>
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl dark:text-white font-bold">{title}</h1>
            <Link href={pathWebsite}>
              <ArrowTopRightOnSquareIcon className="w-8 cursor-pointer" />
            </Link>
          </div>
          <p className="text-justify lg:text-xl">{description}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5 items-center">
            {techStack.map((tech, i) => (
              <img
                key={i}
                src={tech.src}
                alt={tech.alt}
                className={cn("w-8 h-auto", {
                  "bg-white rounded-full": tech.whiteBg,
                })}
              />
            ))}
          </div>
          <Link
            href={pathGithub}
            className="flex justify-between items-center gap-2 cursor-pointer transition-colors hover:bg-gray-200 bg-white text-neutral-500 font-semibold px-2 py-1 rounded-md border dark:border-none"
          >
            Source Code{" "}
            <img
              src="/images/logo/github.png"
              alt="github"
              className="w-6 h-auto rounded-full"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default CardWork;
