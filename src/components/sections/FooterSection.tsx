import { Sprout, Linkedin, Github, Facebook, ArrowUpRight, Mail, Phone, MapPin, Heart } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/khnayeam", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/khnayeam", label: "GitHub" },
  { icon: Facebook, href: "https://facebook.com/khnayeam", label: "Facebook" },
];

const aboutLinks = [
  { text: "About Me", href: "#about" },
  { text: "Personal Info", href: "#personal-info" },
  { text: "Research", href: "#research" },
  { text: "References", href: "#references" },
];

const quickLinks = [
  { text: "Experience", href: "#experience" },
  { text: "Achievements", href: "#achievements" },
  { text: "Stats", href: "#stats" },
  { text: "Contact", href: "#contact", hasIndicator: true },
];

const projectLinks = [
  { text: "Stock-X BD", href: "https://stockxbd.com" },
  { text: "Vetmedix", href: "https://vetmedixbd.com" },
  { text: "SLI Calculator", href: "https://slipolicy.vercel.app" },
];

const contactInfo = [
  { icon: Mail, text: "khnayeam009@gmail.com" },
  { icon: Phone, text: "+880 1XXX-XXXXXX" },
  { icon: MapPin, text: "Bangladesh", isAddress: true },
];

const FooterSection = () => (
  <footer className="relative overflow-hidden border-t border-border/30">
    {/* Gradient + glassmorphism background */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-primary/5 pointer-events-none" />
    <div className="absolute inset-0 -z-10 backdrop-blur-sm pointer-events-none" />

    <div className="max-w-7xl mx-auto section-padding py-16 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-10 mb-14">
        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm">
              <Sprout className="text-primary" size={20} />
            </div>
            <span className="text-xl font-bold font-serif text-foreground tracking-tight">
              <span className="gradient-text">KN</span> Nayeam
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
            Agriculture graduate & full-stack developer building digital solutions that bridge science and technology. Passionate about innovation and sustainable growth.
          </p>
          <div className="flex gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group relative w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <s.icon size={16} />
                <span className="sr-only">{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            About
          </h4>
          <ul className="space-y-3">
            {aboutLinks.map(({ text, href }) => (
              <li key={text}>
                <a
                  href={href}
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1.5 transition-all duration-200 inline-block"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map(({ text, href, hasIndicator }) => (
              <li key={text}>
                <a
                  href={href}
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                >
                  {text}
                  {hasIndicator && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Projects
          </h4>
          <ul className="space-y-3">
            {projectLinks.map(({ text, href }) => (
              <li key={text}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-1.5"
                >
                  {text}
                  <ArrowUpRight size={12} className="opacity-50" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Contact
          </h4>
          <ul className="space-y-4">
            {contactInfo.map(({ icon: Icon, text, isAddress }) => (
              <li key={text} className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-primary/5 border border-border/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                  <Icon size={14} className="text-primary" />
                </div>
                {isAddress ? (
                  <span className="text-sm text-muted-foreground pt-1.5">{text}</span>
                ) : (
                  <span className="text-sm text-muted-foreground pt-1.5 break-all">{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-border/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/70">
            All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70 flex items-center gap-1.5">
            © {new Date().getFullYear()} KH. Nayeam Ibna Nasir · Built with
            <Heart size={10} className="text-destructive fill-destructive" />
            &
            <Sprout size={12} className="text-primary" />
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
