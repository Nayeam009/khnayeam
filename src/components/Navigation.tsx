import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/40"
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

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon" className="lg:hidden rounded-full" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-lg">
          <div className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                  activeSection === item.href.slice(1)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </button>
            ))}
            <a href="/cv-kh-nayeam-ibna-nasir.pdf" download className="mt-2">
              <Button className="w-full rounded-xl gap-2">
                <Download size={16} /> Download CV
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
