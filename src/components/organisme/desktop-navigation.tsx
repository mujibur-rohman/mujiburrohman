import { cn } from "@/lib/utils";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import {
  CubeIcon,
  DocumentTextIcon,
  InboxIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Navigation = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const menus: Navigation[] = [
  { id: "home", name: "Home", icon: <HomeIcon className="w-6 h-6 relative" /> },
  {
    id: "about",
    name: "About",
    icon: <CubeIcon className="w-6 h-6 relative" />,
  },
  {
    id: "work",
    name: "Work",
    icon: <CodeBracketIcon className="w-6 h-6 relative" />,
  },

  {
    id: "contact",
    name: "Contact",
    icon: <InboxIcon className="w-6 h-6 relative" />,
  },
];

type Props = {
  inSection?: string;
};

function DesktopNavigation({ inSection }: Props) {
  console.log(inSection);
  return (
    <div className="fixed z-[2] px-1 py-4 dark:text-neutral-100 hidden md:flex flex-col gap-7 left-0 top-[50%] -translate-y-[50%] rounded-r-2xl backdrop-blur-md border-r-[1px] border-t-[1px] border-b-[1px] border-neutral-100 dark:border-neutral-400">
      {menus.map((menu) => (
        <div className="px-2" key={menu.id}>
          <a
            href={`#${menu.id}`}
            className={cn(
              "cursor-pointer transition-colors duration-500 rounded-xl relative flex flex-col justify-center items-center gap-1",
              {
                ["text-white"]: inSection === menu.id,
              }
            )}
          >
            <span
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                position: "relative",
                display: "inline-block",
                zIndex: 1,
                padding: "0.7rem 0",
              }}
            >
              {menu.name}
            </span>
            {inSection === menu.id && (
              <motion.div
                layoutId="menu-desktop"
                className="absolute rounded inset-0 bg-primary-purple-400"
              />
            )}
          </a>
        </div>
      ))}
    </div>
  );
}

export default DesktopNavigation;
