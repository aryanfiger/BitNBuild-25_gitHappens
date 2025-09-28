import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const btn =
  "inline-flex items-center justify-center rounded-md border px-2.5 py-2 text-xs font-medium text-foreground/80 hover:bg-secondary hover:text-foreground";

export default function ThemeToggle() {
  const { theme, resolved, setTheme } = useTheme();
  return (
    <div
      className="flex items-center gap-1 rounded-md border bg-background p-1 shadow-sm"
      role="group"
      aria-label="Theme switcher"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`${btn} ${resolved === "light" ? "bg-secondary text-foreground" : ""}`}
        aria-pressed={resolved === "light"}
        aria-label="Light"
        title="Light"
      >
        <SunMedium className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`${btn} ${resolved === "dark" ? "bg-secondary text-foreground" : ""}`}
        aria-pressed={resolved === "dark"}
        aria-label="Dark"
        title="Dark"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}


