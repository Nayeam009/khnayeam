import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  ArrowUpRight,
  Download,
  GraduationCap,
  Briefcase,
  MapPin,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useSiteContent } from "@/hooks/useSiteContent";
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

  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const typedText = useTypingEffect(content.typing_roles);
  const profileImage = content.profile_image || profileImageFallback;
  const bgImage = content.bg_image || heroBgFallback;

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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

  const mediaWidth = isMobile
    ? 168 + scrollProgress * 148
    : 220 + scrollProgress * 880;
  const mediaHeight = isMobile
    ? 214 + scrollProgress * 168
    : 280 + scrollProgress * 370;
  const textTranslateX = scrollProgress * (isMobile ? 28 : 64);
  const overlayOpacity = 0.42 - scrollProgress * 0.28;
  const contentOpacity = Math.max(1 - scrollProgress * 2, 0);
  const bgOpacity = 1 - scrollProgress * 0.8;
  const imageRadius = Math.max(20 - scrollProgress * 14, 6);

  return (
    <div className="overflow-x-hidden" id="hero">
      <section className="relative min-h-[100dvh] w-full">
        <div className="relative min-h-[100dvh] w-full">
          <div
            className="absolute inset-0 z-0"
            style={{ opacity: bgOpacity, transition: "opacity 0.05s linear" }}
          >
            <img
              src={bgImage}
              alt=""
              className="h-screen w-screen object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>

          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(var(--background)) 0%, hsl(var(--background)) 100%)",
              opacity: scrollProgress,
              transition: "opacity 0.05s linear",
            }}
          />

          <div
            className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          <div className="relative z-10 h-[100dvh] w-full">
            <div className="absolute left-0 right-0 top-[14%] sm:top-[16%] md:top-[20%] z-[12] px-4">
              <div className="flex flex-col items-center text-center gap-1.5 md:gap-2 pointer-events-none select-none">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.95] drop-shadow-lg"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {content.name_line1}
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.95] drop-shadow-lg"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {content.name_line2}
                </motion.h1>
              </div>
            </div>

            <div className="absolute inset-x-0 top-[55%] sm:top-[56%] md:top-[55%] z-[3] flex -translate-y-1/2 justify-center px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.88 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: isMobile ? "80vw" : "94vw",
                  maxHeight: isMobile ? "44vh" : "75vh",
                  borderRadius: `${imageRadius}px`,
                  boxShadow: `0 ${16 + scrollProgress * 14}px ${28 + scrollProgress * 28}px rgba(0,0,0,${0.24 + scrollProgress * 0.12})`,
                }}
              >
                <img
                  src={profileImage}
                  alt={`${content.name_line1} ${content.name_line2}`}
                  className="h-full w-full object-cover object-[52%_18%] sm:object-center"
                  loading="eager"
                  style={{ borderRadius: `${imageRadius}px` }}
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, rgba(0,0,0,${0.52 - scrollProgress * 0.18}) 0%, rgba(0,0,0,${overlayOpacity}) 54%, rgba(0,0,0,${0.08 - scrollProgress * 0.04}) 100%)`,
                    borderRadius: `${imageRadius}px`,
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: mounted && contentOpacity > 0.1 ? 1 : 0, y: mounted ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-4 left-4 hidden flex-col items-center rounded-xl border border-white/25 bg-white/15 px-3 py-2 shadow-2xl backdrop-blur-xl sm:flex"
                  style={{ opacity: contentOpacity }}
                >
                  <p className="text-[9px] uppercase tracking-widest text-white/50 font-medium">CGPA</p>
                  <p className="mt-0.5 font-serif text-lg font-bold leading-none text-white">{content.cgpa_float}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: mounted && contentOpacity > 0.1 ? 1 : 0, y: mounted ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute right-4 top-4 hidden rounded-xl border border-white/25 bg-white/15 p-2.5 shadow-2xl backdrop-blur-xl sm:block"
                  style={{ opacity: contentOpacity }}
                >
                  <Sprout className="text-primary" size={20} />
                </motion.div>
              </motion.div>
            </div>

            <div
              className="absolute bottom-4 sm:bottom-8 md:bottom-14 left-0 right-0 z-10 px-4"
              style={{ opacity: contentOpacity, pointerEvents: contentOpacity < 0.1 ? "none" : "auto" }}
            >
              <div className="mx-auto flex max-w-[22rem] flex-col items-center gap-2 text-center sm:max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 shadow-lg backdrop-blur-xl sm:px-4 sm:py-1.5 sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary sm:h-2 sm:w-2" />
                    <span className="truncate">{content.status_badge}</span>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: mounted ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-sm font-medium text-white/80 sm:text-base"
                >
                  {typedText}
                  <span className="animate-pulse text-primary">|</span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex max-w-[20rem] flex-wrap justify-center gap-1.5 sm:max-w-none sm:gap-2"
                >
                  {content.tags.map((tag) => {
                    const Icon = iconMap[tag.icon] || MapPin;
                    return (
                      <span
                        key={tag.text}
                        className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/8 px-2.5 py-0.5 text-[10px] font-medium text-white/75 shadow-sm backdrop-blur-xl sm:px-3 sm:py-1 sm:text-[11px]"
                      >
                        <Icon size={10} />
                        {tag.text}
                      </span>
                    );
                  })}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: mounted ? 0.7 : 0, y: [0, 6, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 1.5 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="mt-1 flex flex-col items-center gap-0.5"
                >
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/50 sm:text-[10px]">Scroll</span>
                  <ChevronDown className="text-white/50" size={14} />
                </motion.div>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showContent && (
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="container relative z-10 mx-auto flex w-full flex-col items-center px-4 py-10 sm:px-8 md:px-16 lg:py-16"
              >
                <div className="max-w-2xl space-y-6 text-center">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    {content.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="flex flex-col flex-wrap justify-center gap-3 sm:flex-row"
                  >
                    <a href="#contact">
                      <Button
                        size="lg"
                        className="group min-h-[44px] rounded-full px-6 shadow-lg transition-all duration-300 hover:shadow-xl sm:px-8"
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
                        className="min-h-[44px] rounded-full gap-2 px-6 transition-all duration-300 sm:px-8"
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
      </section>
    </div>
  );
};

export default HeroSection;
