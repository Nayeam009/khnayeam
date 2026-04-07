import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Linkedin, Github, Facebook,
  MessageCircle, Send,
  type LucideIcon,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import MotionCard from "@/components/MotionCard";
import { useSiteContent } from "@/hooks/useSiteContent";

const iconMap: Record<string, LucideIcon> = {
  Phone, Mail, MapPin, Linkedin, Github, Facebook,
};

const hoverColors: Record<string, string> = {
  LinkedIn: "hover:bg-[#0077b5]/10 hover:text-[#0077b5]",
  GitHub: "hover:bg-foreground/10 hover:text-foreground",
  Facebook: "hover:bg-[#1877f2]/10 hover:text-[#1877f2]",
};

interface ContactContent {
  cards: { icon: string; label: string; subtitle: string; href: string }[];
  social_links: { icon: string; href: string; label: string }[];
  cta_heading: string;
  cta_text: string;
  email: string;
}

const DEFAULTS: ContactContent = {
  cards: [
    { icon: "Phone", label: "+880 1710-651618", subtitle: "Call or WhatsApp", href: "tel:+8801710651618" },
    { icon: "Mail", label: "khnayeam009@gmail.com", subtitle: "Email me anytime", href: "mailto:khnayeam009@gmail.com" },
    { icon: "MapPin", label: "Farmgate, Dhaka", subtitle: "132/A, Jahanara Garden, Green Road", href: "#" },
  ],
  social_links: [
    { icon: "Linkedin", href: "https://linkedin.com/in/khnayeam", label: "LinkedIn" },
    { icon: "Github", href: "https://github.com/Nayeam009", label: "GitHub" },
    { icon: "Facebook", href: "https://facebook.com/khnayeam", label: "Facebook" },
  ],
  cta_heading: "Have a project in mind?",
  cta_text: "I'm open to freelance projects, research collaborations, and full-time opportunities in agriculture tech and web development.",
  email: "khnayeam009@gmail.com",
};

const ContactSection = () => {
  const { data } = useSiteContent<ContactContent>("contact");
  const content = data ?? DEFAULTS;

  return (
    <section id="contact" aria-label="Contact information" className="py-20 md:py-28 section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 blob blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blob blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        <MotionCard>
          <div className="text-center mb-12">
            <span className="pill-tag pill-tag-primary mb-3"><MessageCircle size={12} /> Contact</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mt-3">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Whether it's agricultural innovation, tech startups, or development — I'm always excited to collaborate on meaningful projects.
            </p>
          </div>
        </MotionCard>

        <MotionCard index={0}>
          <div className="bento-card bg-gradient-to-br from-primary/8 via-card to-accent/5 text-center mb-8">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="circle-icon circle-icon-lg bg-primary/10 mx-auto mb-4">
              <Send className="text-primary" size={24} />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground font-serif mb-2">{content.cta_heading}</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5">{content.cta_text}</p>
            <a href={`mailto:${content.email}`}>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg hover:shadow-xl transition-shadow min-h-[48px]">
                <Mail size={16} /> Send me an email
              </motion.button>
            </a>
          </div>
        </MotionCard>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {content.cards.map((c, i) => {
            const Icon = iconMap[c.icon] || Mail;
            return (
              <MotionCard key={c.label} index={i}>
                <a href={c.href} className="bento-card flex flex-col items-center gap-3 text-center group h-full">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="circle-icon circle-icon-md bg-primary/10 group-hover:bg-primary transition-all duration-300">
                    <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{c.label}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{c.subtitle}</p>
                  </div>
                </a>
              </MotionCard>
            );
          })}
        </div>

        <MotionCard index={2}>
          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-4">Find me on</p>
            <div className="flex items-center justify-center gap-4">
              {content.social_links.map((s) => {
                const Icon = iconMap[s.icon] || Linkedin;
                const hover = hoverColors[s.label] || "hover:bg-primary/10 hover:text-primary";
                return (
                  <Tooltip key={s.label}>
                    <TooltipTrigger asChild>
                      <motion.a href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }} className={`circle-icon w-12 h-12 sm:w-14 sm:h-14 bg-muted text-muted-foreground ${hover} transition-all duration-200 shadow-sm hover:shadow-md`} aria-label={s.label}>
                        <Icon size={20} />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent><p>{s.label}</p></TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </MotionCard>
      </div>
    </section>
  );
};

export default ContactSection;
