import { useState, useEffect } from "react";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/60 backdrop-blur-2xl shadow-lg border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between section-padding py-3 md:py-4">
        <button onClick={() => scrollTo("#hero")} className="text-lg md:text-xl font-bold tracking-tight font-serif">
          <span className="gradient-text">KN</span>
          <span className="text-foreground ml-1 font-medium font-sans text-sm md:text-base">Nayeam</span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.name}
            </button>
          ))}
          <a href="/cv-kh-nayeam-ibna-nasir.pdf" download className="ml-2">
            <Button size="sm" className="rounded-full text-xs gap-1.5">
              <Download size={14} /> CV
            </Button>
          </a>
        </div>

        {/* Mobile Sheet Drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden rounded-full min-h-[44px] min-w-[44px]">
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px] pt-12">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-1 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className={`px-4 py-4 min-h-[48px] rounded-xl text-sm font-medium text-left transition-all ${
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
    </nav>
  );
};

export default Navigation;
