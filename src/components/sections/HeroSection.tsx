import { useEffect, useState, useMemo } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  ArrowUpRight,
  Download,
  GraduationCap,
  Briefcase,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useSiteContent } from "@/hooks/useSiteContent";
import ScrollExpandHero from "@/components/ui/scroll-expand-hero";
import profileImageFallback from "@/assets/nayeam-profile-latest.jpg";
import heroBgFallback from "@/assets/hero-bg-default.jpg";

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  GraduationCap,
  Briefcase,
  Sprout,
};

interface HeroContent {
  name_line1: string;
  name_line2: string;
  typing_roles: string[];
  subtitle: string;
  status_badge: string;
  tags: { icon: string; text: string }[];
  profile_image: string;
  cgpa_float: string;
  bg_image: string;
}

const DEFAULTS: HeroContent = {
  name_line1: "KH. Nayeam",
  name_line2: "Ibna Nasir",
  typing_roles: ["Agriculture Graduate", "Full-Stack Developer", "Startup Founder", "Research Enthusiast"],
  subtitle:
    "B.Sc. Agriculture graduate bridging agricultural science with full-stack development. Building scalable digital solutions that connect technical innovation with business strategy.",
  status_badge: "Open to Opportunities",
  tags: [
    { icon: "MapPin", text: "Dhaka, Bangladesh" },
    { icon: "GraduationCap", text: "GSTU, CGPA 3.59" },
    { icon: "Briefcase", text: "CEO, Stock-X BD" },
  ],
  profile_image: "",
  cgpa_float: "3.59",
  bg_image: "",
};

const HeroSection = () => {
  const { data } = useSiteContent<HeroContent>("hero");
  const content = data ?? DEFAULTS;
  const prefersReducedMotion = useReducedMotion();

  const [mounted, setMounted] = useState(false);

  const typedText = useTypingEffect(content.typing_roles);
  const profileImage = content.profile_image || profileImageFallback;
  const bgImage = content.bg_image || heroBgFallback;
  const fullName = `${content.name_line1} ${content.name_line2}`;

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="hero">
      <ScrollExpandHero
        mediaSrc={profileImage}
        bgImageSrc={bgImage}
        title={fullName}
        subtitle={content.status_badge}
        scrollToExpand="Scroll to Expand"
      >
        {/* Content revealed after expansion */}
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Typing role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center font-serif text-lg font-medium text-white/90 sm:text-xl md:text-2xl"
          >
            {typedText}
            <span className="animate-pulse text-primary">|</span>
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/70 sm:text-base"
          >
            {content.subtitle}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {content.tags.map((tag) => {
              const Icon = iconMap[tag.icon] || MapPin;
              return (
                <span
                  key={tag.text}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-xl transition-colors hover:bg-white/15 hover:text-white/95"
                >
                  <Icon size={13} />
                  {tag.text}
                </span>
              );
            })}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#contact">
              <Button
                size="lg"
                className="group min-h-[46px] rounded-full px-7 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]"
              >
                Get In Touch
                <ArrowUpRight className="ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={16} />
              </Button>
            </a>
            <a href="/cv-kh-nayeam-ibna-nasir.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="min-h-[46px] gap-2 rounded-full border-white/30 bg-white/10 px-7 text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/15 hover:text-white active:scale-[0.98]"
              >
                <Download size={16} /> Download CV
              </Button>
            </a>
          </motion.div>
        </div>
      </ScrollExpandHero>
    </div>
  );
};

export default HeroSection;
