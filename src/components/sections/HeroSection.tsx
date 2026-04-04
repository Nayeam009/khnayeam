import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  typing_roles: [
    "Agriculture Graduate",
    "Full-Stack Developer",
    "Startup Founder",
    "Research Enthusiast",
  ],
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

const stagger = {
  container: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  },
  item: {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

const HeroSection = () => {
  const { data } = useSiteContent<HeroContent>("hero");
  const content = data ?? DEFAULTS;

  const [mounted, setMounted] = useState(false);

  const typedText = useTypingEffect(content.typing_roles);
  const profileImage = content.profile_image || profileImageFallback;
  const bgImage = content.bg_image || heroBgFallback;
  const fullName = `${content.name_line1} ${content.name_line2}`;

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="hero">
      <ScrollExpandHero
        mediaSrc={profileImage}
        bgImageSrc={bgImage}
        title={fullName}
        subtitle={content.status_badge}
        scrollToExpand="Scroll to Explore"
        textBlend
      >
        {/* Content revealed after full expansion */}
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="space-y-7"
        >
          {/* Typing role */}
          <motion.p
            variants={stagger.item}
            className="text-center font-serif text-base font-medium text-white/90 sm:text-lg md:text-xl"
          >
            {typedText}
            <span className="animate-pulse text-primary">|</span>
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={stagger.item}
            className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-white/65 sm:text-[15px]"
          >
            {content.subtitle}
          </motion.p>

          {/* Tags */}
          <motion.div
            variants={stagger.item}
            className="flex flex-wrap justify-center gap-2"
          >
            {content.tags.map((tag) => {
              const Icon = iconMap[tag.icon] || MapPin;
              return (
                <span
                  key={tag.text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[11px] font-medium text-white/75 backdrop-blur-xl transition-all duration-200 hover:bg-white/[0.14] hover:text-white/90 sm:text-xs"
                >
                  <Icon size={12} />
                  {tag.text}
                </span>
              );
            })}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={stagger.item}
            className="flex flex-col items-center justify-center gap-3 pt-1 sm:flex-row"
          >
            <a href="#contact">
              <Button
                size="lg"
                className="group min-h-[44px] rounded-full px-7 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.97]"
              >
                Get In Touch
                <ArrowUpRight
                  className="ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  size={16}
                />
              </Button>
            </a>
            <a href="/cv-kh-nayeam-ibna-nasir.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="min-h-[44px] gap-2 rounded-full border-white/25 bg-white/[0.08] px-7 text-white backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/[0.14] hover:text-white active:scale-[0.97]"
              >
                <Download size={16} /> Download CV
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </ScrollExpandHero>
    </div>
  );
};

export default HeroSection;
