import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sprout, ArrowUpRight, Download, GraduationCap, Briefcase,
  MapPin, ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import profileImage from "@/assets/nayeam-profile-latest.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const typedText = useTypingEffect([
    "Agriculture Graduate",
    "Full-Stack Developer",
    "Startup Founder",
    "Research Enthusiast",
  ]);

  return (
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
                <img src={profileImage} alt="KH. Nayeam Ibna Nasir — Agriculture Graduate & Full-Stack Developer" className="w-full h-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-primary-foreground badge-pulse" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-3 glass-card glass-hover rounded-xl px-3 py-2 shadow-xl hidden sm:block"
              >
                <p className="text-[10px] text-muted-foreground">CGPA</p>
                <p className="text-lg font-bold gradient-text font-serif">3.59</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -top-3 -right-3 glass-card glass-hover rounded-xl px-3 py-2 shadow-xl hidden sm:block"
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
  );
};

export default HeroSection;
