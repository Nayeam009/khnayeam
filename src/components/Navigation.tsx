import { useState, useEffect } from "react";
import { Menu, Download, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect if nav is over the hero section
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
        setOverHero(window.scrollY < heroBottom - 60);
      }

      const sections = document.querySelectorAll("section[id]");
      let current = "hero";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) {
          current = el.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check saved preference or system preference on mount
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl shadow-lg border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between section-padding py-3 md:py-4">
        <button onClick={() => scrollTo("#hero")} className="text-lg md:text-xl font-bold tracking-tight font-serif">
          <span className="gradient-text">KN</span>
          <span className={`ml-1 font-medium font-sans text-sm md:text-base transition-colors duration-300 ${overHero && !scrolled ? "text-white/90" : "text-foreground"}`}>Nayeam</span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === item.href.slice(1)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-1 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="/cv-kh-nayeam-ibna-nasir.pdf" download className="ml-1">
            <Button size="sm" className="rounded-full text-xs gap-1.5">
              <Download size={14} /> CV
            </Button>
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full min-h-[44px] min-w-[44px]">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px] pt-12 bg-card/80 backdrop-blur-2xl border-l border-border/30">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-1 mt-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollTo(item.href)}
                    className={`px-4 py-4 min-h-[48px] rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                      activeSection === item.href.slice(1)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <a href="/cv-kh-nayeam-ibna-nasir.pdf" download className="mt-4">
                  <Button className="w-full rounded-xl gap-2 min-h-[48px]">
                    <Download size={16} /> Download CV
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
