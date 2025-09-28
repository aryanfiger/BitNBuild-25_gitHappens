import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground shadow">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2a10 10 0 1 0 10 10h-2A8 8 0 1 1 12 4V2Zm0 4a6 6 0 1 0 6 6h-2a4 4 0 1 1-4-4V6Z"
              />
            </svg>
          </span>
          <span className="text-xl font-bold tracking-tight">
            Review <span className="text-primary">Radar</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/extension"
            className={({ isActive }) =>
              isActive
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            Extension
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#summary"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Try Demo
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
