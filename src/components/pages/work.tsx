/* eslint-disable @next/next/no-img-element */
import useInView from "@/hooks/useInView";
import CardWork from "../molecules/card-work";

type Props = {};

function Work({}: Props) {
  const { ref } = useInView({ threshold: 0.2 });
  return (
    <section ref={ref} id="work" className="min-h-screen py-20">
      <div className="px-10 lg:px-[7rem] flex flex-col">
        <div className="text-[1.75rem] lg:text-[2rem] font-bold inline">
          <span>Work</span>
        </div>
        <CardWork
          title="Katalogue"
          description="This website is a customized solution for your business to
            efficiently manage product catalogs with high efficiency, speed, and
            flexibility. We have integrated the advantages of Next.js technology
            in web development to provide you with an exceptional product
            management experience."
          coverImg="/images/work/katalogue-cover.jpg"
          pathGithub="github"
          pathWebsite="/website"
          techStack={[
            {
              src: "/images/logo/nodejs.png",
              alt: "nodejs",
              whiteBg: false,
            },
            {
              src: "/images/logo/next-js-dark.png",
              alt: "next-js",
              whiteBg: true,
            },
            {
              src: "/images/logo/nextauth.png",
              alt: "nextauth",
              whiteBg: false,
            },
            {
              src: "/images/logo/tailwind.png",
              alt: "tailwind",
              whiteBg: false,
            },
            {
              src: "/images/logo/framer.png",
              alt: "framer",
              whiteBg: true,
            },
          ]}
        />
        <CardWork
          title="Lotask"
          description="To do list application grouped by collections with overdue dates that can remind you."
          coverImg="/images/work/lotask-cover.jpg"
          pathGithub="github"
          pathWebsite="/website"
          techStack={[
            {
              src: "/images/logo/prisma.png",
              alt: "prisma",
              whiteBg: false,
            },
            {
              src: "/images/logo/next-js-dark.png",
              alt: "next-js",
              whiteBg: true,
            },
            {
              src: "/images/logo/clerk.png",
              alt: "clerk",
              whiteBg: false,
            },
            {
              src: "/images/logo/tailwind.png",
              alt: "tailwind",
              whiteBg: false,
            },
          ]}
        />
        <CardWork
          title="LiveArticle"
          description="Live Article is a application for writers who want to express their literary ideas, you can follow author you like."
          coverImg="/images/work/livearticle-cover.jpg"
          pathGithub="github"
          pathWebsite="/website"
          techStack={[
            {
              src: "/images/logo/reactjs.png",
              alt: "reactjs",
              whiteBg: false,
            },
            {
              src: "/images/logo/graphl.png",
              alt: "graphl",
              whiteBg: false,
            },
            {
              src: "/images/logo/firebase.png",
              alt: "firebase",
              whiteBg: false,
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Work;
