import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

type Props = {
  className?: string;
};

function SwitchTheme({ className }: Props) {
  return (
    <button
      className={cn(
        "switch-theme-mobile dark:text-neutral-100 bg-white transition-colors p-2 rounded-full cursor-pointer border-[1px] hover:dark:bg-neutral-700 dark:bg-neutral-600 shadow-lg shadow-neutral-100/5 dark:border-neutral-400",
        className
      )}
    >
      <SunIcon className="w-6 h-6" />
    </button>
  );
}

export default SwitchTheme;
