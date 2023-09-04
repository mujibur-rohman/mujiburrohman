import SwitchTheme from "@/components/atom/switch-theme";
import MobileNavigation from "@/components/organisme/mobile-navigation";
import About from "@/components/pages/about";
import Blog from "@/components/pages/blog";
import Contact from "@/components/pages/contact";
import Hero from "@/components/pages/hero";
import Work from "@/components/pages/work";
import { SectionContext } from "@/context/section-provider";
import { useContext } from "react";

export default function Home() {
  const { section } = useContext(SectionContext);
  console.log(section);
  return (
    <main data-theme="dark" className="relative">
      <SwitchTheme className="fixed bottom-[7rem] left-5 md:hidden" />
      <MobileNavigation inSection={section} />
      <div className="dark:bg-neutral-500">
        <Hero activeSection={section} />
        <About activeSection={section} />
        <Work />
        <Blog />
        <Contact />
      </div>
    </main>
  );
}
