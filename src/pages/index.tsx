import SwitchTheme from "@/components/atom/switch-theme";
import DesktopNavigation from "@/components/organisme/desktop-navigation";
import MobileNavigation from "@/components/organisme/mobile-navigation";
import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import Hero from "@/components/pages/hero";
import Work from "@/components/pages/work";
import { SectionContext } from "@/context/section-provider";
import { useContext } from "react";

export default function Home() {
  const { section } = useContext(SectionContext);
  return (
    <main className="relative overflow-x-hidden">
      <SwitchTheme className="fixed md:fixed bottom-[7rem] left-5 md:bottom-auto md:top-10 md:left-[7rem]" />
      <MobileNavigation inSection={section} />
      <DesktopNavigation inSection={section} />
      <div
        id="layout"
        className="bg-neutral-light-500 overflow-x-hidden transition-colors dark:bg-neutral-500 text-neutral-500 dark:text-primary-purple-100"
      >
        <Hero />
        <About />
        <Work />
        <Contact />
      </div>
    </main>
  );
}
