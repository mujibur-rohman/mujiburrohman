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
    id: "blog",
    name: "Blog",
    icon: <DocumentTextIcon className="w-6 h-6 relative" />,
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

function MobileNavigation({ inSection }: Props) {
  return (
    <div className="fixed grid grid-cols-5 px-6 py-4 dark:text-neutral-100 md:hidden bottom-0 left-0 right-0 rounded-t-3xl backdrop-blur-md border-t-[2px] dark:border-neutral-400">
      {menus.map((menu) => (
        <div className="px-2  ">
          <a
            key={menu.id}
            href={`#${menu.id}`}
            className={cn(
              "cursor-pointer transition-colors duration-500 rounded-xl relative py-2 flex flex-col justify-center items-center gap-1",
              {
                ["text-white"]: inSection === menu.id,
              }
            )}
          >
            {inSection === menu.id && (
              <motion.div
                layoutId="menus"
                className="absolute rounded-xl inset-0 bg-primary-purple-400"
              />
            )}
            {menu.icon}
            <span className="text-sm relative">{menu.name}</span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default MobileNavigation;
