import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const { isDark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // active section
      let current = "home";
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "container mx-auto flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass shadow-soft" : "bg-transparent"
        )}
      >
        <button onClick={() => go("home")} className="flex items-center gap-2 font-display font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-ember text-primary-foreground shadow-ember">
            S
          </span>
          <span className="hidden sm:inline">Suraj<span className="text-primary">.</span></span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-ember" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => go("contact")}
            className="hidden rounded-full bg-gradient-ember px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-ember transition-transform hover:scale-105 sm:inline-flex"
          >
            Hire Me
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="rounded-full border border-border p-2.5 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "container mx-auto overflow-hidden transition-all duration-500 lg:hidden",
          open ? "mt-3 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="glass flex flex-col gap-1 rounded-3xl p-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={cn(
                  "w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors",
                  active === item.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
