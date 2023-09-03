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
        className="cursor-pointer p-3 text-primary-purple-300 rounded-full flex flex-col justify-center items-center gap-1"
      >
        <HomeIcon className="w-6 h-6" />
        <span className="text-sm">Home</span>
        <hr className="border-b-2 border-primary-purple-400 w-full" />
      </a>
      <a
        href="#about"
        className="cursor-pointer p-3 rounded-full flex flex-col justify-center items-center gap-1"
      >
        <CubeIcon className="w-6 h-6" />
        <span className="text-sm">About</span>
      </a>
      <a
        href="#work"
        className="cursor-pointer p-3 rounded-full flex flex-col justify-center items-center gap-1"
      >
        <CodeBracketIcon className="w-6 h-6" />
        <span className="text-sm">Work</span>
      </a>
      <a
        href="#blog"
        className="cursor-pointer p-3 rounded-full flex flex-col justify-center items-center gap-1"
      >
        <DocumentTextIcon className="w-6 h-6" />
        <span className="text-sm">Blog</span>
      </a>
      <a
        href="#contact"
        className="cursor-pointer p-3 rounded-full flex flex-col justify-center items-center gap-1"
      >
        <InboxIcon className="w-6 h-6" />
        <span className="text-sm">Contact</span>
      </a>
    </div>
  );
}

export default MobileNavigation;
