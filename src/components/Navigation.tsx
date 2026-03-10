import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "Startups", path: "/startups" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`hidden md:flex items-center justify-between px-8 py-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-card/80 backdrop-blur-xl shadow-sm border-b border-border/50' : 'bg-transparent'
      }`}>
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">KN</span>
          <span className="text-foreground ml-1 font-medium">Nayeam</span>
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`md:hidden sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-card/80 backdrop-blur-xl shadow-sm border-b border-border/50' : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between px-5 py-4">
          <Link to="/" className="text-lg font-bold tracking-tight">
            <span className="gradient-text">KN</span>
            <span className="text-foreground ml-1 font-medium">Nayeam</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
            <div className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
