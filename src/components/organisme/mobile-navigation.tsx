import { cn } from "@/lib/utils";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import {
  CubeIcon,
  DocumentTextIcon,
  InboxIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  inSection?: string;
};

function MobileNavigation({ inSection }: Props) {
  return (
    <div className="fixed flex items-center justify-between px-4 py-2 dark:text-neutral-100 md:hidden bottom-0 left-0 right-0 rounded-t-3xl dark:bg-neutral-500 border-t-[2px] border-neutral-400">
      <a
        href="#home"
        className={cn(
          "cursor-pointer p-3 rounded-full flex flex-col justify-center items-center gap-1",
          {
            ["border-primary-purple-400 text-primary-purple-300"]:
              inSection === "home",
          }
        )}
      >
        <HomeIcon className="w-6 h-6" />
        <span className="text-sm">Home</span>
        {inSection === "home" && (
          <hr className="border-b-2 border-inherit w-full" />
        )}
      </a>
      <a
        href="#about"
        className={cn(
          "cursor-pointer p-3 rounded-full flex flex-col justify-center items-center gap-1",
          {
            ["border-primary-purple-400 text-primary-purple-300"]:
              inSection === "about",
          }
        )}
      >
        <CubeIcon className="w-6 h-6" />
        <span className="text-sm">About</span>
        {inSection === "about" && (
          <hr className="border-b-2 border-inherit w-full" />
        )}
      </a>
      <a
        href="#work"
        className={cn(
          "cursor-pointer p-3 rounded-full flex flex-col justify-center items-center gap-1",
          {
            ["border-primary-purple-400 text-primary-purple-300"]:
              inSection === "work",
          }
        )}
      >
        <CodeBracketIcon className="w-6 h-6" />
        <span className="text-sm">Work</span>
        {inSection === "work" && (
          <hr className="border-b-2 border-inherit w-full" />
        )}
      </a>
      <a
        href="#blog"
        className={cn(
          "cursor-pointer p-3 rounded-full flex flex-col justify-center items-center gap-1",
          {
            ["border-primary-purple-400 text-primary-purple-300"]:
              inSection === "blog",
          }
        )}
      >
        <DocumentTextIcon className="w-6 h-6" />
        <span className="text-sm">Blog</span>
        {inSection === "blog" && (
          <hr className="border-b-2 border-inherit w-full" />
        )}
      </a>
      <a
        href="#contact"
        className={cn(
          "cursor-pointer p-3 rounded-full flex flex-col justify-center items-center gap-1",
          {
            ["border-primary-purple-400 text-primary-purple-300"]:
              inSection === "contact",
          }
        )}
      >
        <InboxIcon className="w-6 h-6" />
        <span className="text-sm">Contact</span>
        {inSection === "contact" && (
          <hr className="border-b-2 border-inherit w-full" />
        )}
      </a>
    </div>
  );
}

export default MobileNavigation;
