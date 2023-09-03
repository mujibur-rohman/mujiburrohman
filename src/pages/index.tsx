import SwitchTheme from "@/components/atom/switch-theme";
import MobileNavigation from "@/components/organisme/mobile-navigation";
import About from "@/components/pages/about";
import Blog from "@/components/pages/blog";
import Contact from "@/components/pages/contact";
import Hero from "@/components/pages/hero";
import Work from "@/components/pages/work";
import { useState, useCallback } from "react";

export default function Home() {
  return (
    <main data-theme="dark" className="relative">
      <SwitchTheme className="fixed bottom-[7rem] left-5 md:hidden" />
      <MobileNavigation />
      <div className="dark:bg-neutral-500">
        <Hero />
        <About />
        <Work />
        <Blog />
        <Contact />
      </div>
    </main>
  );
}
