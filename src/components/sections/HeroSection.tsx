import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sprout, ArrowUpRight, Download, GraduationCap, Briefcase,
  MapPin, ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useSiteContent } from "@/hooks/useSiteContent";
import profileImageFallback from "@/assets/nayeam-profile-latest.jpg";
import heroBgFallback from "@/assets/hero-bg-default.jpg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  MapPin, GraduationCap, Briefcase, Sprout,
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
  subtitle: "B.Sc. Agriculture graduate bridging agricultural science with full-stack development. Building scalable digital solutions that connect technical innovation with business strategy.",
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
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const profileScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  const typedText = useTypingEffect(content.typing_roles);
  const profileImage = content.profile_image || profileImageFallback;
  const bgImage = content.bg_image || heroBgFallback;

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-[120%] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
      </motion.div>

      {/* Subtle animated blobs */}
      <div className="absolute inset-0 -z-[5] overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-20 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: heroOpacity }} className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full px-4 sm:px-6 py-20 md:py-24">

        {/* Status badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium backdrop-blur-md bg-white/10 border border-white/20 text-white/90 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 badge-pulse" />
            {content.status_badge}
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ scale: profileScale }}
          className="relative mb-8"
        >
          <div className="relative w-40 h-48 sm:w-48 sm:h-56 md:w-56 md:h-64">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent/15 to-transparent rounded-[2rem] blur-2xl" />
            <div className="absolute -inset-[3px] rounded-[2rem] bg-gradient-to-br from-white/40 to-white/10" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt={`${content.name_line1} ${content.name_line2}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            {/* Online indicator */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-black/50 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-white badge-pulse" />
            </div>
            {/* CGPA badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -left-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-3 py-2 shadow-xl hidden sm:block"
            >
              <p className="text-[10px] text-white/60">CGPA</p>
              <p className="text-lg font-bold text-white font-serif">{content.cgpa_float}</p>
            </motion.div>
            {/* Sprout icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -top-3 -right-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-3 py-2 shadow-xl hidden sm:block"
            >
              <Sprout className="text-green-400" size={20} />
            </motion.div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white">
            {content.name_line1}
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {content.name_line2}
            </span>
          </h1>
        </motion.div>

        {/* Typing effect */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }} className="mt-4">
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium h-7 sm:h-8">
            {typedText}<span className="animate-pulse text-primary">|</span>
          </p>
          <p className="text-sm sm:text-base text-white/60 max-w-xl leading-relaxed mt-3 mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 pt-6 justify-center"
        >
          <a href="#contact">
            <Button
              size="lg"
              className="rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group min-h-[48px]"
            >
              Get In Touch
              <ArrowUpRight className="ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" size={16} />
            </Button>
          </a>
          <a href="/cv-kh-nayeam-ibna-nasir.pdf" download>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full gap-2 min-h-[48px] transition-all duration-200 border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-md"
            >
              <Download size={16} /> Download CV
            </Button>
          </a>
        </motion.div>

        {/* Tags */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }} className="flex flex-wrap gap-2 pt-5 justify-center">
          {content.tags.map((tag) => {
            const Icon = iconMap[tag.icon] || MapPin;
            return (
              <span
                key={tag.text}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md bg-white/10 border border-white/15 text-white/80"
              >
                <Icon size={12} />
                {tag.text}
              </span>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-10"
      >
        <ChevronDown className="text-white/60" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
