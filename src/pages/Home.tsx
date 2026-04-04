import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import profileImage from "@/assets/nayeam-profile-latest.jpg";
import {
  Sprout, Code, Trophy, Briefcase, ArrowUpRight, Download,
  GraduationCap, FlaskConical, Lightbulb, Users, Award, Mic,
  Mail, Phone, MapPin, Linkedin, Github, Facebook,
  ChevronDown, ChevronUp, Leaf, Globe, HeartPulse, Coffee,
  ExternalLink, Star, Calendar, BookOpen, Target, Zap,
  MessageCircle, Send, User, Heart, Flag, Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

/* ── Typing animation ── */
const useTypingEffect = (texts: string[], speed = 80, pause = 2000) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        } else {
          setCharIndex(charIndex + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIndex));
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        } else {
          setCharIndex(charIndex - 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts, speed, pause]);

  return displayed;
};

/* ── Animated counter ── */
const AnimatedCounter = ({ end, decimals = 0, suffix = "", label }: { end: number; decimals?: number; suffix?: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text font-serif">
        {count.toFixed(decimals)}{suffix}
      </p>
      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
};

/* ── Card wrapper with stagger ── */
const MotionCard = ({ children, index = 0, className = "" }: { children: React.ReactNode; index?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const typedText = useTypingEffect([
    "Agriculture Graduate",
    "Full-Stack Developer",
    "Startup Founder",
    "Research Enthusiast",
  ]);

  const [activeTab, setActiveTab] = useState<"debating" | "startup" | "scientific">("debating");
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowFab(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const achievementCounts = { debating: 4, startup: 3, scientific: 4 };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navigation />

        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center pt-16">
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 -right-20 w-[500px] h-[500px] bg-primary/5 blob blur-[100px]"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-accent/8 blob blur-[80px]"
            />
            <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-growth/4 rounded-full blur-[120px]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }} />
          </div>

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-7xl mx-auto w-full section-padding py-12 md:py-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-5 md:space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
                  <div className="inline-flex items-center gap-2 pill-tag pill-tag-primary border border-primary/20 mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary badge-pulse" />
                    Open to Opportunities
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
                    KH. Nayeam
                    <br />
                    <span className="gradient-text">Ibna Nasir</span>
                  </h1>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}>
                  <p className="text-base sm:text-lg md:text-xl text-foreground font-medium h-7 sm:h-8">
                    {typedText}<span className="animate-pulse text-primary">|</span>
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed mt-3">
                    B.Sc. Agriculture graduate bridging agricultural science with full-stack development.
                    Building scalable digital solutions that connect technical innovation with business strategy.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2"
                >
                  <a href="#contact">
                    <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group w-full sm:w-auto min-h-[48px]">
                      Get In Touch
                      <ArrowUpRight className="ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" size={16} />
                    </Button>
                  </a>
                  <a href="/cv-kh-nayeam-ibna-nasir.pdf" download>
                    <Button size="lg" variant="outline" className="rounded-full gap-2 w-full sm:w-auto min-h-[48px] transition-all duration-200">
                      <Download size={16} /> Download CV
                    </Button>
                  </a>
                </motion.div>

                {/* Pill info tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {[
                    { icon: MapPin, text: "Dhaka, Bangladesh" },
                    { icon: GraduationCap, text: "GSTU, CGPA 3.59" },
                    { icon: Briefcase, text: "CEO, Stock-X BD" },
                  ].map((tag) => (
                    <span key={tag.text} className="pill-tag pill-tag-muted">
                      <tag.icon size={12} />
                      {tag.text}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Profile image with circle avatar badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
              >
                <div className="relative w-48 h-56 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-[22rem]">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blob blur-2xl" />
                  <div className="absolute -inset-[3px] rounded-[2rem] bg-gradient-to-br from-primary/40 to-accent/30" />
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
                    <img src={profileImage} alt="KH. Nayeam Ibna Nasir" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
                  </div>
                  {/* Status badge */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-primary-foreground badge-pulse" />
                  </div>
                  {/* Floating cards */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-3 -left-3 glass-card rounded-xl px-3 py-2 shadow-lg hidden sm:block"
                  >
                    <p className="text-[10px] text-muted-foreground">CGPA</p>
                    <p className="text-lg font-bold gradient-text font-serif">3.59</p>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute -top-3 -right-3 glass-card rounded-xl px-3 py-2 shadow-lg hidden sm:block"
                  >
                    <Sprout className="text-primary" size={20} />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <ChevronDown className="text-muted-foreground" size={24} />
          </motion.div>
        </section>

        {/* ═══════════════════════ STATS BENTO ═══════════════════════ */}
        <section className="py-12 md:py-16 section-padding border-y border-border/30 bg-card/20">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {[
              { end: 3.59, decimals: 2, suffix: "", label: "CGPA (out of 4.00)", icon: GraduationCap },
              { end: 5, suffix: "+", label: "Digital Projects", icon: Code },
              { end: 7, suffix: "+", label: "Awards & Honors", icon: Trophy },
              { end: 20, suffix: "+", label: "Months Leading Stock-X", icon: Briefcase },
            ].map((stat, i) => (
              <MotionCard key={stat.label} index={i}>
                <div className="bento-card flex flex-col items-center gap-2 sm:gap-3 text-center p-3 sm:p-6">
                  <div className="circle-icon circle-icon-md bg-primary/10">
                    <stat.icon className="text-primary" size={20} />
                  </div>
                  <AnimatedCounter end={stat.end} decimals={stat.decimals} suffix={stat.suffix} label={stat.label} />
                </div>
              </MotionCard>
            ))}
          </div>
        </section>

        {/* ═══════════════════════ ABOUT BENTO ═══════════════════════ */}
        <section id="about" className="py-20 md:py-28 section-padding">
          <div className="max-w-7xl mx-auto">
            <MotionCard>
              <div className="flex items-center gap-3 mb-2">
                <span className="pill-tag pill-tag-primary"><Leaf size={12} /> About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground">
                Rooted in Agriculture, <span className="gradient-text">Growing in Technology</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
                A dynamic multidisciplinary professional bridging agriculture, technology, and entrepreneurship.
              </p>
            </MotionCard>

            {/* Bento grid 4-col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {/* Large: Career Objective - spans 2 cols */}
              <MotionCard index={0} className="sm:col-span-2 sm:row-span-2">
                <div className="bento-card h-full bg-gradient-to-br from-primary/5 via-card to-card">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="circle-icon circle-icon-md bg-primary/10">
                      <Target className="text-primary" size={20} />
                    </div>
                    <h3 className="font-bold text-foreground font-serif text-lg">Career Objective</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    B.Sc. Agriculture graduate and Dynamic Full-Stack Developer with a background in Finance and Startup leadership.
                    Proven track record of building scalable digital solutions designed to bridge technical innovation with business strategy.
                    Seeking to leverage multidisciplinary expertise and award-winning leadership to drive growth and operational efficiency
                    in a forward-thinking organization.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {["Agriculture", "Full-Stack Dev", "Startup Leader", "Finance"].map(t => (
                      <span key={t} className="pill-tag pill-tag-muted">{t}</span>
                    ))}
                  </div>
                </div>
              </MotionCard>

              {/* 4 small icon-circle cards */}
              {[
                { icon: Sprout, title: "Agricultural Science", desc: "Crop science, soil management & sustainable farming", color: "primary" },
                { icon: Code, title: "Full-Stack Dev", desc: "React, TypeScript, Figma, backend integration", color: "primary" },
                { icon: Briefcase, title: "Startup Leadership", desc: "Founded Stock-X BD, led ops & strategy", color: "accent" },
                { icon: Trophy, title: "Award-Winning", desc: "VP of GSTU Central Debating Society", color: "primary" },
              ].map((skill, i) => (
                <MotionCard key={skill.title} index={i + 1} className="group">
                  <div className="bento-card h-full flex flex-col items-start gap-4 group-hover:bg-card min-h-[140px]">
                   <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="circle-icon circle-icon-lg bg-primary/10 group-hover:bg-primary transition-all duration-200"
                    >
                      <skill.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{skill.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                </MotionCard>
              ))}
            </div>

            {/* Education timeline strip */}
            <div className="mt-14">
              <MotionCard>
                <h3 className="font-bold text-foreground font-serif text-2xl mb-8 flex items-center gap-3">
                  <div className="circle-icon circle-icon-md bg-primary/10">
                    <BookOpen className="text-primary" size={20} />
                  </div>
                  Educational Background
                </h3>
              </MotionCard>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {[
                  {
                    year: "2019–2025",
                    title: "B.Sc. (Honours) in Agriculture",
                    subtitle: "Gopalganj Science & Technology University",
                    badge: "CGPA 3.59 / 4.00",
                    icon: GraduationCap,
                  },
                  {
                    year: "2019",
                    title: "HSC — Science",
                    subtitle: "Notre Dame College, Mymensingh",
                    badge: "GPA 4.25 / 5.00",
                    icon: GraduationCap,
                  },
                  {
                    year: "2016",
                    title: "SSC — Science",
                    subtitle: "Suti V.M. Pilot Model High School",
                    badge: "GPA 5.00 / 5.00",
                    icon: Award,
                  },
                ].map((edu, i) => (
                  <MotionCard key={edu.year} index={i} className="group">
                    <div className="bento-card h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="circle-icon circle-icon-sm bg-primary/10 group-hover:bg-primary transition-all duration-300">
                          <edu.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={16} />
                        </div>
                        <span className="pill-tag pill-tag-primary text-[10px]">{edu.year}</span>
                      </div>
                      <h4 className="font-bold text-foreground text-sm font-serif">{edu.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{edu.subtitle}</p>
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <span className="pill-tag pill-tag-success text-[10px] font-bold">{edu.badge}</span>
                      </div>
                    </div>
                  </MotionCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ RESEARCH MASONRY ═══════════════════════ */}
        <section id="research" className="py-20 md:py-28 section-padding bg-card/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/3 blob blur-[120px]" />
          </div>
          <div className="max-w-7xl mx-auto">
            <MotionCard>
              <div className="flex items-center gap-3 mb-2">
                <span className="pill-tag pill-tag-primary"><FlaskConical size={12} /> Research & Projects</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground">
                Academic <span className="gradient-text">Research</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
                Exploring the intersection of agriculture, technology, and entrepreneurship.
              </p>
            </MotionCard>

            {/* Masonry-style grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {[
                {
                  icon: Lightbulb,
                  title: "Adaptation of Technology in Entrepreneurship",
                  supervisor: "Md. Rahat Tuhin, Lecturer, Dept. of Marketing, GSTU",
                  desc: "Conducting research on the integration of modern technology into entrepreneurial ventures. Analyzing how digital tools transform business models.",
                  status: "Ongoing",
                  accent: "border-t-4 border-t-primary",
                  tall: true,
                },
                {
                  icon: FlaskConical,
                  title: "Developing 4-4-4 Super Food for Plants",
                  supervisor: "Md. Mahfuzur Rahman, Lecturer, Dept. of Agriculture, GSTU",
                  desc: "Working on formulation and application methods for an organic plant nutrient solution with balanced NPK ratio.",
                  status: "Ongoing",
                  accent: "border-t-4 border-t-accent",
                  tall: false,
                },
                {
                  icon: Briefcase,
                  title: "University Innovation Hub Program (UIHP)",
                  supervisor: "GSTU Entrepreneurship Program",
                  desc: "Completed intensive entrepreneurship training focused on innovation, startup development, and business strategy.",
                  status: "Completed",
                  accent: "border-t-4 border-t-growth",
                  tall: false,
                },
              ].map((r, i) => (
                <MotionCard key={r.title} index={i} className="group">
                  <div className={`bento-card h-full ${r.accent}`}>
                    <div className="flex items-center justify-between mb-5">
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="circle-icon circle-icon-md bg-primary/10 group-hover:bg-primary transition-all duration-300"
                      >
                        <r.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={22} />
                      </motion.div>
                      <span className={`pill-tag text-[10px] font-semibold ${r.status === "Ongoing" ? "pill-tag-success" : "pill-tag-primary"}`}>
                        {r.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground text-base font-serif mb-2">{r.title}</h3>
                    <p className="text-[11px] text-primary font-medium mb-3">Under {r.supervisor}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ EXPERIENCE BENTO ═══════════════════════ */}
        <section id="experience" className="py-20 md:py-28 section-padding">
          <div className="max-w-7xl mx-auto">
            <MotionCard>
              <div className="flex items-center gap-3 mb-2">
                <span className="pill-tag pill-tag-primary"><Briefcase size={12} /> Experience & Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground">
                Startups & <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
                Building real-world digital solutions across agriculture, healthcare, finance, and e-commerce.
              </p>
            </MotionCard>

            {/* Featured: Stock-X BD - full width bento */}
            <MotionCard index={0} className="mt-10">
              <div className="bento-card bg-gradient-to-br from-primary/5 via-card to-card group">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors" />
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="circle-icon circle-icon-lg bg-primary/15 flex-shrink-0"
                  >
                    <Briefcase className="text-primary" size={28} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="font-bold text-xl md:text-2xl text-foreground font-serif">Stock-X BD Ltd.</h3>
                      <span className="pill-tag pill-tag-primary w-fit">Founder & CEO</span>
                      <span className="pill-tag pill-tag-accent w-fit">1 Year 8 Months</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-2xl">
                      Founded under UIHP at GSTU. Led product development, operations, and strategic planning for an LPG ERP platform.
                      Developed UI/UX & Frontend. Coordinated a cross-functional team and drove early-stage growth initiatives.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {["LPG ERP", "UI/UX Design", "Frontend Dev", "Team Leadership", "Strategic Planning"].map(t => (
                        <span key={t} className="pill-tag pill-tag-muted text-[10px]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <a href="https://stockxbd.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 self-start w-full sm:w-auto">
                    <Button variant="outline" className="rounded-full gap-2 text-sm group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all w-full sm:w-auto min-h-[48px]">
                      Visit Site <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </MotionCard>

            {/* Project cards masonry */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
              {[
                {
                  name: "Vetmedix",
                  url: "https://vetmedixbd.com",
                  icon: HeartPulse,
                  role: "Full-Stack Developer & Advisor",
                  desc: "Full-stack pet-care platform with integrated E-commerce, Vet Clinic, Doctors & Appointment Booking.",
                  tags: ["React", "E-commerce", "Full-Stack"],
                },
                {
                  name: "SLI Policy Calculator",
                  url: "https://slipolicy.vercel.app",
                  icon: Globe,
                  role: "Financial Advisor — Sonali Life Insurance",
                  desc: "Custom Premium Calculator to automate complex policy assessments and client portfolio management.",
                  tags: ["Finance", "Automation", "Web App"],
                },
                {
                  name: "Coco Coffee",
                  url: "https://coco-coffee.lovable.app",
                  icon: Coffee,
                  role: "Advisor",
                  desc: "E-commerce marketplace for health and wellness products. Launched and scaled the platform.",
                  tags: ["E-commerce", "Health", "Marketplace"],
                },
              ].map((p, i) => (
                <MotionCard key={p.name} index={i + 1} className="group h-full">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento-card flex flex-col h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: -5 }}
                        className="circle-icon circle-icon-md bg-primary/10 group-hover:bg-primary transition-all duration-300"
                      >
                        <p.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                      </motion.div>
                      <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={16} />
                    </div>
                    <h3 className="font-bold text-foreground text-base font-sans">{p.name}</h3>
                    <p className="text-xs text-primary font-medium mt-0.5">{p.role}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.tags.map(t => (
                        <span key={t} className="pill-tag pill-tag-muted text-[10px]">{t}</span>
                      ))}
                    </div>
                  </a>
                </MotionCard>
              ))}
            </div>

            {/* Skills as pill grid */}
            <MotionCard index={2} className="mt-10">
              <div className="bento-card">
                <h3 className="font-bold text-foreground text-xl font-serif mb-6 flex items-center gap-3">
                  <div className="circle-icon circle-icon-md bg-primary/10">
                    <Zap className="text-primary" size={20} />
                  </div>
                  Technical Skills & Competencies
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { category: "Development", skills: ["Full-Stack Web Dev", "React / TypeScript", "UI/UX Design (Figma)", "Frontend & Backend", "ERP Development", "E-commerce"] },
                    { category: "Agriculture", skills: ["Crop Science", "Soil Management", "Plant Nutrition", "Sustainable Farming", "Agricultural Research", "Organic Solutions"] },
                    { category: "Soft Skills", skills: ["Leadership", "Public Speaking", "Strategic Planning", "Team Coordination", "MS Office (Expert)", "English & Bengali"] },
                  ].map((group) => (
                    <div key={group.category} className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground">{group.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.05 }}
                            className="pill-tag pill-tag-muted cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionCard>
          </div>
        </section>

        {/* ═══════════════════════ ACHIEVEMENTS TABBED CARDS WITH BADGES ═══════════════════════ */}
        <section id="achievements" className="py-20 md:py-28 section-padding bg-card/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 blob blur-[120px]" />
          </div>
          <div className="max-w-7xl mx-auto">
            <MotionCard>
              <div className="text-center mb-10">
                <span className="pill-tag pill-tag-primary mb-3"><Trophy size={12} /> Achievements</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mt-3">
                  Awards & <span className="gradient-text">Recognition</span>
                </h2>
                <p className="text-muted-foreground mt-3 text-sm sm:text-base">
                  A collection of academic, leadership, and competitive achievements.
                </p>
              </div>
            </MotionCard>

            {/* Tab pills with badge counts */}
            <MotionCard className="mb-8">
              <div className="flex justify-center gap-2 flex-wrap">
                {[
                  { key: "debating" as const, label: "Debating", icon: Mic },
                  { key: "startup" as const, label: "Startup", icon: Lightbulb },
                  { key: "scientific" as const, label: "Scientific & Leadership", icon: FlaskConical },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.key
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                    }`}
                  >
                    <tab.icon size={14} />
                    <span>{tab.label}</span>
                    {/* Notification badge */}
                    <span className={`ml-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                      activeTab === tab.key ? "bg-primary-foreground text-primary" : "bg-primary/10 text-primary"
                    }`}>
                      {achievementCounts[tab.key]}
                    </span>
                  </button>
                ))}
              </div>
            </MotionCard>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
              >
                {(activeTab === "debating"
                  ? [
                      { text: "1st Runner-up — Intra-University Debate Tournament, LAW Debating Club, GSTU", icon: Trophy, badge: "Runner-up" },
                      { text: "Semi-Finalist — Intra-University Debate Tournament, BMB Debating Club", icon: Star, badge: "Semi-Final" },
                      { text: "Agriculture Debating Club became Champion — Freshers Debate 3.0 & 4.0, GSTU", icon: Trophy, badge: "Champion" },
                      { text: "Agriculture Debating Club became Runner-up — Environment Science & Disaster Management Club", icon: Star, badge: "Runner-up" },
                    ]
                  : activeTab === "startup"
                  ? [
                      { text: "Ranked in Top 3 — UIHP Startup Founders Competition", icon: Trophy, badge: "Top 3" },
                      { text: "Founder & CEO — Stock-X BD Ltd.", icon: Briefcase, badge: "Founder" },
                      { text: "Advisor in Startups: Coco Coffee, Vetmedix", icon: Lightbulb, badge: "Advisor" },
                    ]
                  : [
                      { text: "1st Runner-up — Poster Presentation, IAAS Bangladesh 2024, GSTU", icon: FlaskConical, badge: "Runner-up" },
                      { text: "Champion — Poster on Mushroom Production Technology, IAAS Bangladesh 2025", icon: Trophy, badge: "Champion" },
                      { text: "Vice President — GSTU Central Debating Society", icon: Users, badge: "VP" },
                      { text: "President — Agriculture Debating Club, GSTU", icon: Users, badge: "President" },
                    ]
                ).map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bento-card flex gap-4 items-start group p-4 sm:p-6"
                  >
                    <div className="circle-icon circle-icon-sm bg-accent/10 group-hover:bg-accent transition-all duration-300 flex-shrink-0">
                      <item.icon className="text-accent group-hover:text-accent-foreground transition-colors" size={16} />
                    </div>
                    <div className="flex-1">
                      <span className="pill-tag pill-tag-accent text-[10px] mb-2">{item.badge}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors mt-1">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ═══════════════════════ PERSONAL INFO BENTO 3x3 ═══════════════════════ */}
        <section className="py-16 md:py-20 section-padding">
          <div className="max-w-4xl mx-auto">
            <MotionCard>
              <div className="text-center mb-10">
                <span className="pill-tag pill-tag-primary mb-3"><User size={12} /> Personal</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-foreground mt-3">
                  Personal <span className="gradient-text">Information</span>
                </h2>
              </div>
            </MotionCard>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: User, label: "Full Name", value: "KH. Nayeam Ibna Nasir", tip: "Full legal name" },
                { icon: User, label: "Father", value: "Kh Nasir Uddin", tip: "Father's name" },
                { icon: User, label: "Mother", value: "Nasima Khandakar", tip: "Mother's name" },
                { icon: Calendar, label: "Date of Birth", value: "31 Jan, 2000", tip: "Born January 31, 2000" },
                { icon: Heart, label: "Blood Group", value: "AB+ve", tip: "Blood type AB positive" },
                { icon: Flag, label: "Nationality", value: "Bangladeshi", tip: "Nationality: Bangladeshi" },
                { icon: Star, label: "Religion", value: "Islam", tip: "Religion: Islam" },
                { icon: User, label: "Gender", value: "Male", tip: "Gender: Male" },
                { icon: Heart, label: "Marital Status", value: "Unmarried", tip: "Currently unmarried" },
              ].map((info, i) => (
                <MotionCard key={info.label} index={i}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bento-card flex items-center gap-3 cursor-default">
                        <div className="circle-icon circle-icon-sm bg-primary/10 flex-shrink-0">
                          <info.icon className="text-primary" size={14} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{info.label}</p>
                          <p className="text-sm font-medium text-foreground mt-0.5 truncate">{info.value}</p>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{info.tip}</p>
                    </TooltipContent>
                  </Tooltip>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ REFERENCES CIRCLE AVATAR CARDS ═══════════════════════ */}
        <section className="py-16 md:py-20 section-padding bg-card/50">
          <div className="max-w-4xl mx-auto">
            <MotionCard>
              <div className="text-center mb-10">
                <span className="pill-tag pill-tag-primary mb-3"><Users size={12} /> References</span>
                <h2 className="text-3xl sm:text-4xl font-bold font-serif text-foreground mt-3">
                  Professional <span className="gradient-text">References</span>
                </h2>
              </div>
            </MotionCard>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  name: "Dr. Zilhas Ahmed Jewel",
                  position: "Dean & Chairman, Dept. of Agriculture",
                  institution: "Gopalganj Science & Technology University",
                  phone: "+8801753661866",
                  initials: "ZA",
                },
                {
                  name: "Md. Rahat Tuhin",
                  position: "Lecturer, Dept. of Marketing",
                  institution: "Gopalganj Science & Technology University",
                  phone: "+8801751843035",
                  initials: "RT",
                },
              ].map((ref, i) => (
                <MotionCard key={ref.name} index={i} className="group">
                  <div className="bento-card flex flex-col items-center text-center gap-4">
                    {/* Circle avatar */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="circle-icon w-20 h-20 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold font-serif text-2xl"
                    >
                      {ref.initials}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{ref.name}</h4>
                      <p className="text-xs text-primary font-medium mt-1">{ref.position}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{ref.institution}</p>
                    </div>
                    <a href={`tel:${ref.phone}`} className="pill-tag pill-tag-muted hover:pill-tag-primary transition-all">
                      <Phone size={10} /> {ref.phone}
                    </a>
                  </div>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CONTACT BENTO ═══════════════════════ */}
        <section id="contact" className="py-20 md:py-28 section-padding relative overflow-hidden">
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

            {/* Contact bento cards */}
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

            {/* Social circle buttons */}
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
                        className="circle-icon w-12 h-12 bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
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

        {/* ═══════════════════════ FOOTER ═══════════════════════ */}
        <footer className="py-8 section-padding border-t border-border/50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} KH. Nayeam Ibna Nasir. All rights reserved.
            </p>
            <p className="text-[10px] text-muted-foreground/60">
              Built with passion for agriculture & technology
            </p>
          </div>
        </footer>

        {/* ═══════════════════════ FAB ═══════════════════════ */}
        <AnimatePresence>
          {showFab && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fab"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </TooltipProvider>
  );
};

export default Home;
