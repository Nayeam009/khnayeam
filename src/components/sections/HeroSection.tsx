import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout, ArrowUpRight, Download, GraduationCap, Briefcase,
  MapPin, ChevronDown, MousePointerClick,
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

  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const typedText = useTypingEffect(content.typing_roles);
  const profileImage = content.profile_image || profileImageFallback;
  const bgImage = content.bg_image || heroBgFallback;

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll expansion logic
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.001;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    const handleScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  // Derived animation values
  const mediaWidth = 260 + scrollProgress * (isMobile ? 740 : 1340);
  const mediaHeight = 340 + scrollProgress * (isMobile ? 260 : 460);
  const textTranslateX = scrollProgress * (isMobile ? 200 : 160);
  const overlayOpacity = 0.45 - scrollProgress * 0.35;
  const contentOpacity = Math.max(1 - scrollProgress * 3, 0);
  const bgOpacity = 1 - scrollProgress * 0.8;
  const imageRadius = Math.max(24 - scrollProgress * 20, 4);

  return (
    <div ref={sectionRef} className="overflow-x-hidden" id="hero">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* Background image */}
          <div
            className="absolute inset-0 z-0 h-full"
            style={{ opacity: bgOpacity, transition: "opacity 0.05s linear" }}
          >
            <img
              src={bgImage}
              alt=""
              className="w-screen h-screen object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>

          {/* Dark fallback behind expanded image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(ellipse at center, hsl(var(--background)) 0%, hsl(var(--background)) 100%)`,
              opacity: scrollProgress,
              transition: "opacity 0.05s linear",
            }}
          />

          {/* Subtle grain overlay */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* Expanding profile image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.85 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "96vw",
                  maxHeight: "88vh",
                  borderRadius: `${imageRadius}px`,
                  boxShadow: `0 ${20 + scrollProgress * 20}px ${40 + scrollProgress * 40}px rgba(0,0,0,${0.25 + scrollProgress * 0.15})`,
                }}
              >
                <img
                  src={profileImage}
                  alt={`${content.name_line1} ${content.name_line2}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  style={{ borderRadius: `${imageRadius}px` }}
                />
                {/* Image overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,0,${0.6 - scrollProgress * 0.3}) 0%, rgba(0,0,0,${overlayOpacity}) 50%, rgba(0,0,0,${0.15 - scrollProgress * 0.1}) 100%)`,
                    borderRadius: `${imageRadius}px`,
                  }}
                />

                {/* Floating CGPA badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: mounted && contentOpacity > 0.1 ? 1 : 0, y: mounted ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-6 left-5 backdrop-blur-xl bg-white/15 border border-white/25 rounded-2xl px-4 py-2.5 shadow-2xl hidden sm:flex flex-col items-center"
                  style={{ opacity: contentOpacity }}
                >
                  <p className="text-[9px] uppercase tracking-widest text-white/50 font-medium">CGPA</p>
                  <p className="text-xl font-bold text-white font-serif leading-none mt-0.5">{content.cgpa_float}</p>
                </motion.div>

                {/* Floating sprout badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: mounted && contentOpacity > 0.1 ? 1 : 0, y: mounted ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute top-5 right-5 backdrop-blur-xl bg-white/15 border border-white/25 rounded-2xl p-3 shadow-2xl hidden sm:block"
                  style={{ opacity: contentOpacity }}
                >
                  <Sprout className="text-emerald-300" size={22} />
                </motion.div>
              </motion.div>

              {/* Name text with mix-blend-difference */}
              <div className="flex items-center justify-center text-center gap-2 md:gap-3 w-full relative z-10 flex-col mix-blend-difference pointer-events-none select-none">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {content.name_line1}
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {content.name_line2}
                </motion.h1>
              </div>

              {/* Bottom content — fades with scroll */}
              <div
                className="absolute bottom-10 sm:bottom-14 md:bottom-16 left-0 right-0 flex flex-col items-center text-center z-10 px-4 gap-3"
                style={{ opacity: contentOpacity, pointerEvents: contentOpacity < 0.1 ? "none" : "auto" }}
              >
                {/* Status badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium backdrop-blur-xl bg-white/10 border border-white/20 text-white/90 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {content.status_badge}
                  </div>
                </motion.div>

                {/* Typing effect */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: mounted ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-sm sm:text-base md:text-lg text-white/80 font-medium"
                >
                  {typedText}<span className="animate-pulse text-primary">|</span>
                </motion.p>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex flex-wrap gap-2 justify-center"
                >
                  {content.tags.map((tag) => {
                    const Icon = iconMap[tag.icon] || MapPin;
                    return (
                      <span
                        key={tag.text}
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium backdrop-blur-xl bg-white/8 border border-white/15 text-white/75 shadow-sm"
                      >
                        <Icon size={11} />
                        {tag.text}
                      </span>
                    );
                  })}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: mounted ? 0.7 : 0, y: [0, 6, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 1.5 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="mt-1 flex flex-col items-center gap-1"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">Scroll</span>
                  <ChevronDown className="text-white/50" size={16} />
                </motion.div>
              </div>
            </div>

            {/* Content revealed after expansion */}
            <AnimatePresence>
              {showContent && (
                <motion.section
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center w-full px-4 sm:px-8 py-12 md:px-16 lg:py-20"
                >
                  <div className="max-w-2xl text-center space-y-8">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                    >
                      {content.subtitle}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.6 }}
                      className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center"
                    >
                      <a href="#contact">
                        <Button
                          size="lg"
                          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group min-h-[48px] px-8"
                        >
                          Get In Touch
                          <ArrowUpRight className="ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" size={16} />
                        </Button>
                      </a>
                      <a href="/cv-kh-nayeam-ibna-nasir.pdf" download>
                        <Button
                          size="lg"
                          variant="outline"
                          className="rounded-full gap-2 min-h-[48px] px-8 transition-all duration-300"
                        >
                          <Download size={16} /> Download CV
                        </Button>
                      </a>
                    </motion.div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
