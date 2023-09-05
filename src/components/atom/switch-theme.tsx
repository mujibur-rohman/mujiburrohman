import { cn } from "@/lib/utils";
import { SunIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  className?: string;
};

function SwitchTheme({ className }: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.button
      variants={{
        night: {
          y: [0, -20, 100, 0],
          transition: { duration: 2 },
        },
        light: {
          y: [0, -20, 100, 0],
          transition: { duration: 2 },
        },
      }}
      animate={toggle ? "night" : "light"}
      className={cn(
        "switch-theme-mobile dark:text-neutral-100 bg-white transition-colors p-2 rounded-full cursor-pointer border-[1px] hover:dark:bg-neutral-700 dark:bg-neutral-600 shadow-lg shadow-neutral-100/5 dark:border-neutral-400",
        className
      )}
    >
      <motion.div
        onClick={() => {
          setToggle(!toggle);
        }}
        animate={{
          rotate: [0, 30, 0],
          transition: { repeat: Infinity, repeatDelay: 1 },
        }}
      >
        <SunIcon className="w-6 h-6" />
      </motion.div>
    </motion.button>
  );
}

export default SwitchTheme;
