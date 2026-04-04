import { Sprout, Linkedin, Github, Facebook, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/khnayeam", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/khnayeam", label: "GitHub" },
  { icon: Facebook, href: "https://facebook.com/khnayeam", label: "Facebook" },
];

const aboutLinks = [
  { name: "About Me", href: "#about" },
  { name: "Personal Info", href: "#personal-info" },
  { name: "Research", href: "#research" },
  { name: "References", href: "#references" },
];

const quickLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Stats", href: "#stats" },
  { name: "Contact", href: "#contact" },
];

const projectLinks = [
  { name: "Stock-X BD", href: "https://stockxbd.com" },
  { name: "Vetmedix", href: "https://vetmedixbd.com" },
  { name: "SLI Calculator", href: "https://slipolicy.vercel.app" },
];

const contactInfo = [
  { icon: Mail, text: "khnayeam009@gmail.com" },
  { icon: Phone, text: "+880 1XXX-XXXXXX" },
  { icon: MapPin, text: "Bangladesh", isAddress: true },
];

const FooterSection = () => (
  <footer className="relative overflow-hidden border-t border-border/50">
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

    <div className="max-w-7xl mx-auto section-padding py-16 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Sprout className="text-primary" size={20} />
            </div>
            <span className="text-lg font-bold font-serif text-foreground">
              <span className="gradient-text">KN</span> Nayeam
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
            Agriculture graduate & full-stack developer building digital solutions that bridge science and technology.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">About</h4>
          <ul className="space-y-3">
            {aboutLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Projects</h4>
          <ul className="space-y-3">
            {projectLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1"
                >
                  {link.name}
                  <ArrowUpRight size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact Us</h4>
          <ul className="space-y-3">
            {contactInfo.map(({ icon: Icon, text, isAddress }) => (
              <li key={text} className="flex items-start gap-2">
                <Icon size={16} className="text-primary mt-0.5 flex-shrink-0" />
                {isAddress ? (
                  <span className="text-sm text-muted-foreground">{text}</span>
                ) : (
                  <span className="text-sm text-muted-foreground">{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} KH. Nayeam Ibna Nasir — Built with <Sprout size={12} className="text-primary" />
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
