import { Sprout, Linkedin, Github, Facebook, ArrowUpRight } from "lucide-react";

const FooterSection = () => (
  <footer className="relative overflow-hidden border-t border-border/50">
    {/* Subtle gradient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/3 via-transparent to-transparent pointer-events-none" />

    <div className="max-w-7xl mx-auto section-padding py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Sprout className="text-primary" size={16} />
            </div>
            <span className="font-bold font-serif text-foreground">
              <span className="gradient-text">KN</span> Nayeam
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
            Agriculture graduate & full-stack developer building digital solutions that bridge science and technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Navigation</h4>
          <ul className="space-y-2">
            {[
              { name: "About", href: "#about" },
              { name: "Research", href: "#research" },
              { name: "Experience", href: "#experience" },
              { name: "Achievements", href: "#achievements" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Projects</h4>
          <ul className="space-y-2">
            {[
              { name: "Stock-X BD", href: "https://stockxbd.com" },
              { name: "Vetmedix", href: "https://vetmedixbd.com" },
              { name: "SLI Calculator", href: "https://slipolicy.vercel.app" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-1"
                >
                  {link.name}
                  <ArrowUpRight size={10} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Connect</h4>
          <div className="flex gap-2">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/khnayeam", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/khnayeam", label: "GitHub" },
              { icon: Facebook, href: "https://facebook.com/khnayeam", label: "Facebook" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground mt-3">
            khnayeam009@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} KH. Nayeam Ibna Nasir. All rights reserved.
        </p>
        <p className="text-[10px] text-muted-foreground/50 flex items-center gap-1">
          Built with <Sprout size={10} className="text-primary" /> for agriculture & technology
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
