import { Sprout, Linkedin, Github, Facebook, ArrowUpRight, Mail, Phone, MapPin, Heart } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  Mail, Phone, MapPin, Linkedin, Github, Facebook,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const socialIconMap: Record<string, any> = {
  Linkedin, Github, Facebook,
};

interface FooterContent {
  description: string;
  about_links: { text: string; href: string }[];
  quick_links: { text: string; href: string; hasIndicator?: boolean }[];
  project_links: { text: string; href: string }[];
  contact_info: { icon: string; text: string; isAddress?: boolean }[];
  social_links?: { icon: string; href: string; label: string }[];
}

const DEFAULTS: FooterContent = {
  description: "Agriculture graduate & full-stack developer building digital solutions that bridge science and technology. Passionate about innovation and sustainable growth.",
  about_links: [
    { text: "About Me", href: "#about" },
    { text: "Personal Info", href: "#personal-info" },
    { text: "Research", href: "#research" },
    { text: "References", href: "#references" },
  ],
  quick_links: [
    { text: "Experience", href: "#experience" },
    { text: "Achievements", href: "#achievements" },
    { text: "Stats", href: "#stats" },
    { text: "Contact", href: "#contact", hasIndicator: true },
  ],
  project_links: [
    { text: "Stock-X BD", href: "https://stockxbd.com" },
    { text: "Vetmedix", href: "https://vetmedixbd.com" },
    { text: "SLI Calculator", href: "https://slipolicy.vercel.app" },
  ],
  contact_info: [
    { icon: "Mail", text: "khnayeam009@gmail.com" },
    { icon: "Phone", text: "+880 1XXX-XXXXXX" },
    { icon: "MapPin", text: "Bangladesh", isAddress: true },
  ],
};

const defaultSocials = [
  { icon: Linkedin, href: "https://linkedin.com/in/khnayeam", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/khnayeam", label: "GitHub" },
  { icon: Facebook, href: "https://facebook.com/khnayeam", label: "Facebook" },
];

const FooterSection = () => {
  const { data } = useSiteContent<FooterContent>("footer");
  const content = data ?? DEFAULTS;

  const socials = content.social_links
    ? content.social_links.map((s) => ({
        icon: socialIconMap[s.icon] || Linkedin,
        href: s.href,
        label: s.label,
      }))
    : defaultSocials;

  return (
    <footer className="relative overflow-hidden border-t border-border/30">
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
              {content.description}
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="group relative w-11 h-11 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> About
            </h4>
            <ul className="space-y-2">
              {content.about_links.map(({ text, href }) => (
                <li key={text}><a href={href} className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1.5 transition-all duration-200 inline-block py-1 min-h-[44px] flex items-center">{text}</a></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Quick Links
            </h4>
            <ul className="space-y-3">
              {content.quick_links.map(({ text, href, hasIndicator }) => (
                <li key={text}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2">
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
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Projects
            </h4>
            <ul className="space-y-3">
              {content.project_links.map(({ text, href }) => (
                <li key={text}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-1.5">
                    {text} <ArrowUpRight size={12} className="opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Contact
            </h4>
            <ul className="space-y-4">
              {content.contact_info.map(({ icon, text, isAddress }) => {
                const Icon = iconMap[icon] || Mail;
                return (
                  <li key={text} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-primary/5 border border-border/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                      <Icon size={14} className="text-primary" />
                    </div>
                    <span className={`text-sm text-muted-foreground pt-1.5 ${isAddress ? "" : "break-all"}`}>{text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/70">All rights reserved.</p>
            <p className="text-xs text-muted-foreground/70 flex items-center gap-1.5">
              © {new Date().getFullYear()} KH. Nayeam Ibna Nasir · Built with
              <Heart size={10} className="text-destructive fill-destructive" /> &
              <Sprout size={12} className="text-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
