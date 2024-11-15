import { useTheme } from "../hooks/useTheme";
import { cn } from "../lib/utils";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      data-testid="theme-togger"
      onClick={toggleTheme}
      className={cn(
        "!size-8 !lg:size-10 p-3 w-auto rounded-full lg:text-lg bg-gray-500 dark:bg-gray-200 transition-all dark:text-black text-white duration-150 ease-linear flex items-center justify-center",
        className,
      )}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
