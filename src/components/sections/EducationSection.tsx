import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";
import MotionCard from "@/components/MotionCard";
import { getOptimizedStorageUrl, resolveCmsImageSource } from "@/lib/storage-images";

import eduUniversity from "@/assets/edu-university.jpg";
import eduCollege from "@/assets/edu-college.jpg";
import eduHighschool from "@/assets/edu-highschool.jpg";

const DEFAULT_IMAGE_MAP: Record<string, string> = {
  university: eduUniversity,
  college: eduCollege,
  highschool: eduHighschool,
};

interface EducationItem {
  step: string;
  year: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  imageUrl: string;
  imageKey: string;
}

interface EducationContent {
  heading: string;
  subheading: string;
  items: EducationItem[];
}

const DEFAULTS: EducationContent = {
  heading: "Educational Background",
  subheading: "A journey through academics — from foundational science to specialized agriculture.",
  items: [
    {
      step: "01",
      year: "2019–2025",
      title: "B.Sc. (Honours) in Agriculture",
      subtitle: "Gopalganj Science & Technology University",
      badge: "CGPA 3.59 / 4.00",
      description:
        "Comprehensive study in crop science, soil management, plant pathology, and agricultural economics. Engaged in multiple research projects on sustainable farming practices and modern agri-tech integration.",
      imageUrl: "",
      imageKey: "university",
    },
    {
      step: "02",
      year: "2019",
      title: "HSC — Science",
      subtitle: "Notre Dame College, Mymensingh",
      badge: "GPA 4.25 / 5.00",
      description:
        "Focused on Biology, Chemistry, Physics and Mathematics with strong academic performance. Built a solid scientific foundation that paved the way for university-level agricultural studies.",
      imageUrl: "",
      imageKey: "college",
    },
    {
      step: "03",
      year: "2016",
      title: "SSC — Science",
      subtitle: "Suti V.M. Pilot Model High School",
      badge: "GPA 5.00 / 5.00",
      description:
        "Achieved perfect GPA in the Secondary School Certificate examination. Active participant in science fairs and debating competitions, laying the groundwork for future academic excellence.",
      imageUrl: "",
      imageKey: "highschool",
    },
  ],
};

const EduCard = ({ item, index }: { item: EducationItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const translateY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  const reverse = index % 2 !== 0;
  const imgSrc = getOptimizedStorageUrl(
    resolveCmsImageSource({
      primary: item.imageUrl,
      fallbackKey: item.imageKey,
      fallbackMap: DEFAULT_IMAGE_MAP,
      fallbackSrc: eduUniversity,
    }),
    { width: 960, quality: 80 }
  );

  return (
    <div ref={ref} className="py-10 md:py-16">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } gap-8 md:gap-12 items-center`}
      >
        <motion.div
          style={shouldReduceMotion ? { opacity: 1 } : { opacity, y: translateY }}
          className="flex-1 space-y-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-5xl font-bold font-serif text-primary/15 leading-none">
              {item.step}
            </span>
            <span className="pill-tag pill-tag-primary text-xs">{item.year}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
            {item.title}
          </h3>

          <div className="flex items-center gap-2 text-muted-foreground">
            <GraduationCap size={16} className="text-primary" />
            <span className="text-sm">{item.subtitle}</span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
            {item.description}
          </p>

          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 pill-tag pill-tag-success text-xs font-bold">
              <Award size={12} />
              {item.badge}
            </span>
          </div>
        </motion.div>

        <motion.div
          style={shouldReduceMotion ? { clipPath: "inset(0 0% 0 0)" } : { clipPath }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 aspect-[4/3] sm:aspect-[4/5]">
            <img
              src={imgSrc}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const EducationSection = () => {
  const { data } = useSiteContent<EducationContent>("education");
  const content = data ?? DEFAULTS;
  const items = content.items?.length ? content.items : DEFAULTS.items;

  return (
    <section
      id="education"
      aria-label="Education"
      className="py-20 md:py-28 section-padding"
    >
      <div className="max-w-6xl mx-auto">
        <MotionCard>
          <div className="flex items-center gap-3 mb-2">
            <span className="pill-tag pill-tag-primary">
              <BookOpen size={12} /> Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground">
            {content.heading || DEFAULTS.heading}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
            {content.subheading || DEFAULTS.subheading}
          </p>
        </MotionCard>

        <div className="mt-8 divide-y divide-border/30">
          {items.map((item, i) => (
            <EduCard key={item.step || i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
