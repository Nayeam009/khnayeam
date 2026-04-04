import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Linkedin, Github, Facebook,
  MessageCircle,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import MotionCard from "@/components/MotionCard";

const ContactSection = () => (
  <section id="contact" aria-label="Contact information" className="py-20 md:py-28 section-padding relative overflow-hidden">
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 blob blur-[120px]" />
    </div>
    <div className="max-w-4xl mx-auto text-center">
      <MotionCard>
        <span className="pill-tag pill-tag-primary mb-3"><MessageCircle size={12} /> Contact</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mt-3">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted-foreground mt-3 text-sm sm:text-base">
          Whether it's agricultural innovation, tech startups, or development — I'm ready to collaborate.
        </p>
      </MotionCard>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 mb-10">
        {[
          { icon: Phone, label: "+880 1710-651618", href: "tel:+8801710651618" },
          { icon: Mail, label: "khnayeam009@gmail.com", href: "mailto:khnayeam009@gmail.com" },
          { icon: MapPin, label: "132/A, Jahanara Garden, Green Road, Farmgate, Dhaka", href: "#" },
        ].map((c, i) => (
          <MotionCard key={c.label} index={i}>
            <a href={c.href} className="bento-card flex flex-col items-center gap-3 text-center group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="circle-icon circle-icon-md bg-primary/10 group-hover:bg-primary transition-all duration-300"
              >
                <c.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
              </motion.div>
              <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{c.label}</span>
            </a>
          </MotionCard>
        ))}
      </div>

      <MotionCard index={1}>
        <div className="flex items-center justify-center gap-3">
          {[
            { icon: Linkedin, href: "https://linkedin.com/in/khnayeam", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/khnayeam", label: "GitHub" },
            { icon: Facebook, href: "https://facebook.com/khnayeam", label: "Facebook" },
          ].map((s) => (
            <Tooltip key={s.label}>
              <TooltipTrigger asChild>
                <motion.a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="circle-icon w-14 h-14 bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                  aria-label={s.label}
                >
                  <s.icon size={20} />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent><p>{s.label}</p></TooltipContent>
            </Tooltip>
          ))}
        </div>
      </MotionCard>
    </div>
  </section>
);

export default ContactSection;
