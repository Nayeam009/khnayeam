import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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

  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const typedText = useTypingEffect(content.typing_roles);
  const profileImage = content.profile_image || profileImageFallback;
  const bgImage = content.bg_image || heroBgFallback;

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
        const scrollDelta = e.deltaY * 0.0009;
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

  const mediaWidth = 280 + scrollProgress * (isMobile ? 700 : 1300);
  const mediaHeight = 360 + scrollProgress * (isMobile ? 240 : 440);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);
  const overlayOpacity = Math.max(0.5 - scrollProgress * 0.4, 0.1);
  const contentOpacity = Math.max(1 - scrollProgress * 2.5, 0);

  return (
    <div ref={sectionRef} className="overflow-x-hidden" id="hero">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Background image */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImage}
              alt="Background"
              className="w-screen h-screen object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            {/* Hero viewport */}
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* Expanding profile image */}
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.3)",
                  transition: "none",
                }}
              >
                <img
                  src={profileImage}
                  alt={`${content.name_line1} ${content.name_line2}`}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="eager"
                />
                <motion.div
                  className="absolute inset-0 bg-black/50 rounded-2xl"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: overlayOpacity }}
                  transition={{ duration: 0.1 }}
                />

                {/* Floating badges on the image */}
                <div
                  className="absolute bottom-4 left-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-3 py-2 shadow-xl hidden sm:block"
                  style={{ opacity: contentOpacity }}
                >
                  <p className="text-[10px] text-white/60">CGPA</p>
                  <p className="text-lg font-bold text-white font-serif">{content.cgpa_float}</p>
                </div>
                <div
                  className="absolute top-4 right-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-3 py-2 shadow-xl hidden sm:block"
                  style={{ opacity: contentOpacity }}
                >
                  <Sprout className="text-green-400" size={20} />
                </div>

                {/* Scroll hint inside image */}
                <div
                  className="flex flex-col items-center text-center absolute bottom-3 left-1/2 -translate-x-1/2 z-10"
                  style={{ opacity: contentOpacity }}
                >
                  <p
                    className="text-white/70 font-medium text-xs tracking-wide"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    Scroll to Explore ↓
                  </p>
                </div>
              </div>

              {/* Text overlay with mix-blend-difference */}
              <div className="flex items-center justify-center text-center gap-3 w-full relative z-10 flex-col mix-blend-difference pointer-events-none">
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-7xl font-bold text-white/90 tracking-tight"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {content.name_line1}
                </motion.h2>
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-7xl font-bold text-white/90 tracking-tight"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {content.name_line2}
                </motion.h2>
              </div>

              {/* Hero content below name — fades out as scroll progresses */}
              <div
                className="absolute bottom-16 md:bottom-20 left-0 right-0 flex flex-col items-center text-center z-10 px-4 gap-3"
                style={{ opacity: contentOpacity, pointerEvents: contentOpacity < 0.1 ? "none" : "auto" }}
              >
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium backdrop-blur-md bg-white/10 border border-white/20 text-white/90">
                  <span className="w-2 h-2 rounded-full bg-green-400 badge-pulse" />
                  {content.status_badge}
                </div>

                {/* Typing effect */}
                <p className="text-sm sm:text-base md:text-lg text-white/80 font-medium">
                  {typedText}<span className="animate-pulse text-primary">|</span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
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
                </div>
              </div>
            </div>

            {/* Content that appears after full expansion */}
            <motion.section
              className="flex flex-col items-center w-full px-4 sm:px-8 py-10 md:px-16 lg:py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="max-w-2xl text-center space-y-6">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {content.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
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
                      className="rounded-full gap-2 min-h-[48px] transition-all duration-200"
                    >
                      <Download size={16} /> Download CV
                    </Button>
                  </a>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
