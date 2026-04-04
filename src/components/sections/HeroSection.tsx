import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
  const heroRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const typedText = useTypingEffect(content.typing_roles);
  const profileImage = content.profile_image || profileImageFallback;
  const bgImage = content.bg_image || heroBgFallback;
  const primaryMeta = content.tags[0]?.text ?? "Dhaka, Bangladesh";

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateScrollProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = heroRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight || 1;
        const scrollableDistance = Math.max(section.offsetHeight - viewportHeight, viewportHeight * 0.7);
        const nextProgress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);

        setScrollProgress(nextProgress);
      });
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const progress = prefersReducedMotion ? 0 : scrollProgress;
  const bgScale = 1 + progress * 0.06;
  const bgTranslateY = progress * 20;
  const contentTranslateY = progress * -18;
  const cardTranslateY = progress * -14;
  const cardScale = 1 + progress * 0.06;
  const contentOpacity = 1 - progress * 0.18;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[115svh] overflow-clip sm:min-h-[120svh] lg:min-h-[130svh]"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt=""
            className="h-full w-full object-cover object-center"
            loading="eager"
            style={{
              transform: `translateY(${bgTranslateY}px) scale(${bgScale})`,
              opacity: 1 - progress * 0.12,
              transition: "transform 80ms linear, opacity 80ms linear",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.22),_transparent_32%),radial-gradient(circle_at_85%_25%,_hsl(var(--accent)/0.18),_transparent_24%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-start md:items-center">
          <div className="mx-auto flex h-full w-full max-w-7xl items-start px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 md:items-center md:pb-12 lg:px-10 lg:pt-32">
            <div className="flex w-full flex-col items-center justify-center gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 28 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="order-1 w-full md:min-w-0 md:flex-1"
              >
                <div
                  className="flex flex-col items-center text-center md:items-start md:pr-4 md:text-left lg:pr-6"
                  style={{
                    transform: `translateY(${contentTranslateY}px)`,
                    opacity: contentOpacity,
                    transition: "transform 80ms linear, opacity 80ms linear",
                  }}
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 24 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 max-w-[11ch] font-serif text-[clamp(1.8rem,6vw,3.6rem)] font-bold tracking-[-0.03em] leading-[0.95] text-white/95 drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)] sm:mt-5 lg:max-w-none"
                  >
                    <span className="block">{content.name_line1}</span>
                    <span className="block">{content.name_line2}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 16 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-3 text-sm font-medium text-white/85 sm:mt-4 sm:text-base md:text-lg"
                  >
                    {typedText}
                    <span className="animate-pulse text-primary">|</span>
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 16 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-3 hidden max-w-xl text-sm leading-relaxed text-white/72 sm:block sm:text-[15px] md:text-base"
                  >
                    {content.subtitle}
                  </motion.p>

                  <div className="mt-6 hidden w-full flex-col gap-3 md:flex md:max-w-xl md:items-start xl:flex-row">
                    <a href="#contact">
                      <Button
                        size="lg"
                        className="group min-h-[46px] rounded-full px-7 shadow-xl transition-all duration-300 hover:shadow-2xl"
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
                        className="min-h-[46px] gap-2 rounded-full border-white/30 bg-white/10 px-7 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/15 hover:text-white"
                      >
                        <Download size={16} /> Download CV
                      </Button>
                    </a>
                  </div>

                  <div className="mt-5 hidden max-w-xl flex-wrap gap-2 md:flex">
                    {content.tags.map((tag) => {
                      const Icon = iconMap[tag.icon] || MapPin;
                      return (
                        <span
                          key={tag.text}
                          className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 shadow-sm backdrop-blur-xl"
                        >
                          <Icon size={12} />
                          <span className="whitespace-normal">{tag.text}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 22 }}
                animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.92, y: mounted ? 0 : 22 }}
                transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="order-2 flex w-full justify-center md:w-auto md:flex-none md:justify-end"
              >
                <div
                  className="relative w-full max-w-[15rem] sm:max-w-[17.5rem] md:max-w-[18rem] lg:max-w-[21rem] xl:max-w-[24rem]"
                  style={{
                    transform: `translateY(${cardTranslateY}px) scale(${cardScale})`,
                    transition: "transform 80ms linear",
                  }}
                >
                  <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-white/20 via-white/5 to-transparent blur-2xl" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-[0_28px_90px_-28px_rgba(0,0,0,0.75)] backdrop-blur-md">
                    <div className="aspect-[4/4.8]">
                      <img
                        src={profileImage}
                        alt={`${content.name_line1} ${content.name_line2}`}
                        className="h-full w-full object-cover object-[50%_18%] sm:object-[50%_16%]"
                        loading="eager"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/18 to-transparent" />

                    <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
                      <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.26em] text-white/70 backdrop-blur-xl">
                        Profile
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur-xl">
                        <Sprout className="text-primary" size={16} />
                      </div>
                    </div>

                    <div className="absolute inset-x-4 bottom-4 rounded-[1.35rem] border border-white/15 bg-white/10 px-4 py-3 shadow-2xl backdrop-blur-xl">
                      <div className="flex items-center gap-2 text-sm font-medium text-white/95">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span className="truncate">{content.status_badge}</span>
                      </div>
                      <div className="mt-3 flex items-end justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">Location</p>
                          <p className="mt-1 truncate text-sm font-medium text-white/85 sm:text-base">
                            {primaryMeta}
                          </p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">CGPA</p>
                          <p className="mt-1 font-serif text-2xl font-semibold leading-none text-white sm:text-[1.9rem]">
                            {content.cgpa_float}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="order-3 flex flex-col items-center gap-3 md:hidden">
                <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
                  <a href="#contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="group min-h-[46px] w-full rounded-full px-6 shadow-xl transition-all duration-300 hover:shadow-2xl"
                    >
                      Get In Touch
                      <ArrowUpRight
                        className="ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        size={16}
                      />
                    </Button>
                  </a>
                  <a href="/cv-kh-nayeam-ibna-nasir.pdf" download className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="min-h-[46px] w-full gap-2 rounded-full border-white/30 bg-white/10 px-6 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/15 hover:text-white"
                    >
                      <Download size={16} /> Download CV
                    </Button>
                  </a>
                </div>

                <div className="hidden max-w-2xl flex-wrap justify-center gap-2 sm:flex md:hidden">
                  {content.tags.map((tag) => {
                    const Icon = iconMap[tag.icon] || MapPin;
                    return (
                      <span
                        key={tag.text}
                        className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 shadow-sm backdrop-blur-xl"
                      >
                        <Icon size={12} />
                        <span className="whitespace-normal">{tag.text}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 0.72 : 0, y: [0, 6, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.9 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 sm:flex"
          style={{ opacity: contentOpacity }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">Scroll</span>
          <ChevronDown className="text-white/55" size={16} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
