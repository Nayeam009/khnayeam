import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeader from "@/components/SectionHeader";
import TimelineItem from "@/components/TimelineItem";
import profileImage from "@/assets/nayeam-profile-latest.jpg";
import {
  Sprout, Code, Trophy, Briefcase, ArrowUpRight, Download,
  GraduationCap, FlaskConical, Lightbulb, Users, Award, Mic,
  Mail, Phone, MapPin, Linkedin, Github, Facebook,
  ChevronDown, Leaf, Globe, HeartPulse, Coffee,
  ExternalLink, Star, Calendar, BookOpen, Target, Zap,
  MessageCircle, Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* ═══════════════════════════════════════════ HERO ═══════════════════════════════════════════ */}
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
          {/* Dot grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }} />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto w-full section-padding py-12 md:py-20"
        >
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-3 space-y-6 md:space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
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
                <p className="text-lg sm:text-xl text-foreground font-medium h-8">
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
                className="flex flex-wrap gap-3 pt-2"
              >
                <a href="#contact">
                  <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all group">
                    Get In Touch
                    <ArrowUpRight className="ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" size={16} />
                  </Button>
                </a>
                <a href="/cv-kh-nayeam-ibna-nasir.pdf" download>
                  <Button size="lg" variant="outline" className="rounded-full gap-2">
                    <Download size={16} /> Download CV
                  </Button>
                </a>
              </motion.div>

              {/* Quick info tags */}
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
                  <span key={tag.text} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                    <tag.icon size={12} />
                    {tag.text}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-[22rem]">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blob blur-2xl" />
                <div className="absolute -inset-[3px] rounded-[2rem] bg-gradient-to-br from-primary/40 to-accent/30" />
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
                  <img src={profileImage} alt="KH. Nayeam Ibna Nasir" className="w-full h-full object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-3 -left-3 glass-card rounded-xl px-3 py-2 shadow-lg"
                >
                  <p className="text-[10px] text-muted-foreground">CGPA</p>
                  <p className="text-lg font-bold gradient-text font-serif">3.59</p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -top-3 -right-3 glass-card rounded-xl px-3 py-2 shadow-lg"
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

      {/* ═══════════════════════════ STATS BAR ═══════════════════════════ */}
      <section className="py-12 md:py-16 section-padding border-y border-border/50 bg-card/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <AnimatedCounter end={3.59} decimals={2} label="CGPA (out of 4.00)" />
          <AnimatedCounter end={5} suffix="+" label="Digital Projects" />
          <AnimatedCounter end={7} suffix="+" label="Awards & Honors" />
          <AnimatedCounter end={20} suffix="+" label="Months Leading Stock-X" />
        </div>
      </section>

      {/* ═══════════════════════════ ABOUT ═══════════════════════════ */}
      <section id="about" className="py-20 md:py-28 section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="About Me"
            title="Rooted in Agriculture,"
            highlight="Growing in Technology"
            description="A dynamic multidisciplinary professional bridging agriculture, technology, and entrepreneurship."
          />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-12">
            {/* Career Objective */}
            <MotionCard index={0}>
              <div className="p-6 sm:p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 via-card to-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="text-primary" size={18} />
                  </div>
                  <h3 className="font-bold text-foreground font-serif text-lg">Career Objective</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  B.Sc. Agriculture graduate and Dynamic Full-Stack Developer with a background in Finance and Startup leadership.
                  Proven track record of building scalable digital solutions designed to bridge technical innovation with business strategy.
                  Seeking to leverage multidisciplinary expertise and award-winning leadership to drive growth and operational efficiency
                  in a forward-thinking organization.
                </p>
              </div>
            </MotionCard>

            {/* Key highlights */}
            <div className="space-y-4">
              {[
                { icon: Sprout, title: "Agricultural Science", desc: "B.Sc. Agriculture with deep understanding of crop science, soil management, and sustainable farming.", color: "primary" },
                { icon: Code, title: "Full-Stack Development", desc: "UI/UX design (Figma), React/TypeScript, and backend integration for scalable platforms.", color: "primary" },
                { icon: Briefcase, title: "Startup Leadership", desc: "Founded Stock-X BD Ltd., managed operations, product development, and strategic planning.", color: "accent" },
                { icon: Trophy, title: "Award-Winning Debater", desc: "VP of GSTU Central Debating Society with multiple championship wins.", color: "primary" },
              ].map((skill, i) => (
                <MotionCard key={skill.title} index={i + 1} className="group">
                  <div className="flex gap-4 p-5 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300 cursor-default">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <skill.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm font-sans">{skill.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                </MotionCard>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mt-16">
            <MotionCard>
              <h3 className="font-bold text-foreground font-serif text-2xl mb-8 flex items-center gap-3">
                <BookOpen className="text-primary" size={24} />
                Educational Background
              </h3>
            </MotionCard>
            <div className="space-y-0">
              {[
                {
                  year: "2019–2025",
                  title: "B.Sc. (Honours) in Agriculture",
                  subtitle: "Gopalganj Science & Technology University",
                  description: "Comprehensive study of crop science, soil management, agricultural economics, and sustainable farming. Active in research, debating, and startup activities.",
                  icon: <GraduationCap className="text-primary" size={20} />,
                  badge: "CGPA 3.59 / 4.00",
                },
                {
                  year: "2019",
                  title: "Higher Secondary (HSC) — Science",
                  subtitle: "Notre Dame College, Mymensingh",
                  description: "Studied core sciences with a focus on biology and chemistry, building the foundation for agricultural studies.",
                  icon: <GraduationCap className="text-primary" size={20} />,
                  badge: "GPA 4.25 / 5.00",
                },
                {
                  year: "2016",
                  title: "Secondary (SSC) — Science",
                  subtitle: "Suti V.M. Pilot Model High School",
                  description: "Achieved perfect GPA in secondary education, demonstrating strong academic foundation and discipline.",
                  icon: <Award className="text-primary" size={20} />,
                  badge: "GPA 5.00 / 5.00",
                },
              ].map((item, i) => (
                <TimelineItem key={item.year} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ RESEARCH ═══════════════════════════ */}
      <section id="research" className="py-20 md:py-28 section-padding bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/3 blob blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Research & Projects"
            title="Academic"
            highlight="Research"
            description="Exploring the intersection of agriculture, technology, and entrepreneurship through academic research."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Lightbulb,
                title: "Adaptation of Technology in Entrepreneurship",
                supervisor: "Md. Rahat Tuhin, Lecturer, Dept. of Marketing, GSTU",
                desc: "Conducting research on the integration of modern technology into entrepreneurial ventures. Analyzing how digital tools transform business models and create competitive advantages.",
                status: "Ongoing",
              },
              {
                icon: FlaskConical,
                title: "Developing 4-4-4 Super Food for Plants",
                supervisor: "Md. Mahfuzur Rahman, Lecturer, Dept. of Agriculture, GSTU",
                desc: "Working on formulation and application methods for an organic plant nutrient solution that provides balanced NPK ratio for optimal plant growth.",
                status: "Ongoing",
              },
              {
                icon: Briefcase,
                title: "University Innovation Hub Program (UIHP)",
                supervisor: "GSTU Entrepreneurship Program",
                desc: "Completed intensive entrepreneurship training focused on innovation, startup development, business strategy, and building scalable ventures within university ecosystem.",
                status: "Completed",
              },
            ].map((r, i) => (
              <MotionCard key={r.title} index={i} className="group h-full">
                <div className="h-full p-6 sm:p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${r.status === "Ongoing" ? "bg-growth/10 text-growth" : "bg-primary/10 text-primary"}`}>
                      {r.status}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <r.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={22} />
                  </div>
                  <h3 className="font-bold text-foreground text-lg font-serif mb-2">{r.title}</h3>
                  <p className="text-xs text-primary font-medium mb-3">Under {r.supervisor}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.desc}</p>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ EXPERIENCE / PORTFOLIO ═══════════════════════════ */}
      <section id="experience" className="py-20 md:py-28 section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Experience & Portfolio"
            title="Startups &"
            highlight="Projects"
            description="Building real-world digital solutions across agriculture, healthcare, finance, and e-commerce."
          />

          {/* Featured: Stock-X BD */}
          <MotionCard index={0} className="mt-12">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors" />
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0"
                >
                  <Briefcase className="text-primary" size={28} />
                </motion.div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h3 className="font-bold text-xl md:text-2xl text-foreground font-serif">Stock-X BD Ltd.</h3>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium w-fit">Founder & CEO</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium w-fit">1 Year 8 Months</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-2xl">
                    Founded under UIHP at GSTU. Led product development, operations, and strategic planning for an LPG ERP platform.
                    Developed UI/UX & Frontend. Coordinated a cross-functional team and drove early-stage growth initiatives.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["LPG ERP", "UI/UX Design", "Frontend Dev", "Team Leadership", "Strategic Planning"].map(t => (
                      <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <a href="https://stockxbd.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 self-start">
                  <Button variant="outline" className="rounded-full gap-2 text-sm group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    Visit Site <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </MotionCard>

          {/* Project cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {[
              {
                name: "Vetmedix",
                url: "https://vetmedixbd.com",
                icon: HeartPulse,
                role: "Full-Stack Developer & Advisor",
                desc: "Full-stack pet-care platform with integrated E-commerce, Veterinary Clinic, Vet Doctors & Appointment Booking system.",
                tags: ["React", "E-commerce", "Full-Stack"],
              },
              {
                name: "SLI Policy Calculator",
                url: "https://slipolicy.vercel.app",
                icon: Globe,
                role: "Financial Advisor — Sonali Life Insurance",
                desc: "Custom Premium Calculator to automate complex policy assessments. Managing client portfolios and policy planning.",
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
                  className="flex flex-col h-full p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: -5 }}
                      className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
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
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">{t}</span>
                    ))}
                  </div>
                </a>
              </MotionCard>
            ))}
          </div>

          {/* Skills section */}
          <MotionCard index={2} className="mt-12">
            <div className="p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/50">
              <h3 className="font-bold text-foreground text-xl font-serif mb-6 flex items-center gap-3">
                <Zap className="text-primary" size={22} />
                Technical Skills & Competencies
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { category: "Development", skills: ["Full-Stack Web Dev", "React / TypeScript", "UI/UX Design (Figma)", "Frontend & Backend Integration", "ERP Development", "E-commerce Platforms"] },
                  { category: "Agriculture", skills: ["Crop Science", "Soil Management", "Plant Nutrition", "Sustainable Farming", "Agricultural Research", "Organic Solutions"] },
                  { category: "Soft Skills", skills: ["Leadership & Management", "Public Speaking & Debating", "Strategic Planning", "Team Coordination", "MS Office (Expert)", "English & Bengali (Fluent)"] },
                ].map((group) => (
                  <div key={group.category} className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">{group.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
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

      {/* ═══════════════════════════ ACHIEVEMENTS ═══════════════════════════ */}
      <section id="achievements" className="py-20 md:py-28 section-padding bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 blob blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Achievements"
            title="Awards &"
            highlight="Recognition"
            description="A collection of academic, leadership, and competitive achievements."
            center
          />

          {/* Tab switcher */}
          <MotionCard className="mt-10">
            <div className="flex justify-center gap-2 mb-8">
              {[
                { key: "debating" as const, label: "Debating", icon: Mic },
                { key: "startup" as const, label: "Startup & Innovation", icon: Lightbulb },
                { key: "scientific" as const, label: "Scientific & Leadership", icon: FlaskConical },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  <tab.icon size={14} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </MotionCard>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {(activeTab === "debating"
              ? [
                  { text: "1st Runner-up — Intra-University Debate Tournament, LAW Debating Club, GSTU", icon: Trophy },
                  { text: "Semi-Finalist — Intra-University Debate Tournament, BMB Debating Club", icon: Star },
                  { text: "Agriculture Debating Club became Champion — Freshers Debate 3.0 & 4.0, GSTU Central Debating Society", icon: Trophy },
                  { text: "Agriculture Debating Club became Runner-up — Organized by Environment Science & Disaster Management Club", icon: Star },
                ]
              : activeTab === "startup"
              ? [
                  { text: "Ranked in Top 3 — UIHP Startup Founders Competition", icon: Trophy },
                  { text: "Founder & CEO — Stock-X BD Ltd.", icon: Briefcase },
                  { text: "Advisor in Startups: Coco Coffee, Vetmedix", icon: Lightbulb },
                ]
              : [
                  { text: "1st Runner-up — Poster Presentation, IAAS Bangladesh Scientific Event 2024, GSTU", icon: FlaskConical },
                  { text: "Champion — Poster Presentation on Mushroom Production Technology, IAAS Bangladesh 2025, GSTU", icon: Trophy },
                  { text: "Vice President — GSTU Central Debating Society", icon: Users },
                  { text: "President — Agriculture Debating Club, GSTU", icon: Users },
                ]
            ).map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-2xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <item.icon className="text-accent group-hover:text-accent-foreground transition-colors" size={16} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════ PERSONAL INFO ═══════════════════════════ */}
      <section className="py-16 md:py-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeader tag="Personal" title="Personal" highlight="Information" center />
          <MotionCard className="mt-10">
            <div className="p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/50">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5">
                {[
                  { label: "Full Name", value: "KH. Nayeam Ibna Nasir" },
                  { label: "Father", value: "Kh Nasir Uddin" },
                  { label: "Mother", value: "Nasima Khandakar" },
                  { label: "Date of Birth", value: "31 January, 2000" },
                  { label: "Gender", value: "Male" },
                  { label: "Blood Group", value: "AB+ve" },
                  { label: "Religion", value: "Islam" },
                  { label: "Nationality", value: "Bangladeshi" },
                  { label: "Marital Status", value: "Unmarried" },
                ].map((info) => (
                  <div key={info.label}>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{info.label}</p>
                    <p className="text-sm font-medium text-foreground mt-0.5">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionCard>
        </div>
      </section>

      {/* ═══════════════════════════ REFERENCES ═══════════════════════════ */}
      <section className="py-16 md:py-20 section-padding bg-card/50">
        <div className="max-w-4xl mx-auto">
          <SectionHeader tag="References" title="Professional" highlight="References" center />
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {[
              {
                name: "Dr. Zilhas Ahmed Jewel",
                position: "Dean & Chairman, Department of Agriculture",
                institution: "Gopalganj Science & Technology University",
                phone: "+8801753661866",
              },
              {
                name: "Md. Rahat Tuhin",
                position: "Lecturer, Department of Marketing",
                institution: "Gopalganj Science & Technology University",
                phone: "+8801751843035",
              },
            ].map((ref, i) => (
              <MotionCard key={ref.name} index={i} className="group">
                <div className="p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold font-serif text-lg">
                      {ref.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{ref.name}</h4>
                      <p className="text-xs text-primary font-medium mt-0.5">{ref.position}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{ref.institution}</p>
                      <a href={`tel:${ref.phone}`} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary mt-2 transition-colors">
                        <Phone size={10} /> {ref.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ CONTACT ═══════════════════════════ */}
      <section id="contact" className="py-20 md:py-28 section-padding relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 blob blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            tag="Contact"
            title="Let's"
            highlight="Connect"
            description="Whether it's agricultural innovation, tech startups, or full-stack development — I'm ready to collaborate."
            center
          />

          <div className="grid sm:grid-cols-3 gap-4 mt-10 mb-10">
            {[
              { icon: Phone, label: "+880 1710-651618", href: "tel:+8801710651618", action: "Call" },
              { icon: Mail, label: "khnayeam009@gmail.com", href: "mailto:khnayeam009@gmail.com", action: "Email" },
              { icon: MapPin, label: "132/A, Jahanara Garden, Green Road, Farmgate, Dhaka", href: "#", action: "Location" },
            ].map((c, i) => (
              <MotionCard key={c.label} index={i}>
                <a href={c.href} className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    <c.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                  </motion.div>
                  <span className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors">{c.label}</span>
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
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                  aria-label={s.label}
                >
                  <s.icon size={20} />
                </motion.a>
              ))}
            </div>
          </MotionCard>
        </div>
      </section>

      {/* ═══════════════════════════ FOOTER ═══════════════════════════ */}
      <footer className="py-8 section-padding border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} KH. Nayeam Ibna Nasir. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            Built with passion for agriculture & technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
