import { cn } from "@/lib/utils";
import { SunIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "@heroicons/react/24/outline";

type Props = {
  className?: string;
};

function SwitchTheme({ className }: Props) {
  const [toggle, setToggle] = useState(false);
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTime] = useState<string | undefined>("");
  const controls = useAnimation();

  const handleThemeClick = async () => {
    await controls.start({ y: -10, transition: { duration: 0.2 } });
    await controls.start({ y: 70, transition: { duration: 0.5 } });
    setTheme(theme === "light" ? "dark" : "light");
    await controls.start({ y: -10, transition: { duration: 0.5 } });
    await controls.start({ y: 0, transition: { duration: 0.2 } });
  };

  useEffect(() => {
    setCurrentTime(theme);
  }, [theme]);

  return (
    <AnimatePresence>
      <motion.button
        initial={{ y: 0 }}
        onClick={handleThemeClick}
        animate={controls}
        aria-label="switch theme"
        className={cn(
          "switch-theme-mobile z-[1] dark:text-neutral-100 bg-white transition-colors p-2 rounded-full cursor-pointer border-[2px] hover:dark:bg-neutral-700 dark:bg-neutral-600 shadow-lg shadow-neutral-100/5 dark:border-neutral-400",
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
          {currentTheme === "dark" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SunIcon className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MoonIcon className="w-6 h-6 text-neutral-300" />
            </motion.div>
          )}
        </motion.div>
      </motion.button>
    </AnimatePresence>
  );
}

export default SwitchTheme;
