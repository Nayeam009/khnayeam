import { motion } from "framer-motion";
import {
  Sprout, Code, Briefcase, Trophy, Target,
  Award, BookOpen, Leaf, Globe, FolderKanban, Clock,
} from "lucide-react";
import MotionCard from "@/components/MotionCard";
import { useSiteContent } from "@/hooks/useSiteContent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  Sprout, Code, Briefcase, Trophy, Target, Award, BookOpen, Leaf, Globe, FolderKanban, Clock,
};

interface AboutContent {
  heading: string;
  subheading: string;
  career_objective: string;
  career_tags: string[];
  skills: { title: string; desc: string; icon: string; tags?: string[] }[];
  quick_stats: { icon: string; label: string; value: string; sub: string }[];
}


const AboutSection = () => {
  const { data: aboutData } = useSiteContent<AboutContent>("about");
  

  const about = aboutData ?? {
    heading: "Rooted in Agriculture, Growing in Technology",
    subheading: "A dynamic multidisciplinary professional bridging agriculture, technology, and entrepreneurship.",
    career_objective: "B.Sc. Agriculture graduate and Dynamic Full-Stack Developer with a background in Finance and Startup leadership.",
    career_tags: ["Agriculture", "Full-Stack Dev", "Startup Leader", "Finance"],
    skills: [
      { title: "Agricultural Science", desc: "Crop science, soil management & sustainable farming", icon: "Sprout" },
      { title: "Full-Stack Dev", desc: "React, TypeScript, Figma, backend integration", icon: "Code", tags: ["React", "TypeScript", "Tailwind", "Figma"] },
      { title: "Startup Leadership", desc: "Founded Stock-X BD, led ops & strategy", icon: "Briefcase" },
      { title: "Award-Winning", desc: "VP of GSTU Central Debating Society", icon: "Trophy" },
    ],
    quick_stats: [
      { icon: "Globe", label: "Languages", value: "3", sub: "BN · EN · HI" },
      { icon: "FolderKanban", label: "Projects", value: "10+", sub: "Built & shipped" },
      { icon: "Clock", label: "Experience", value: "3+ yrs", sub: "Tech & Agri" },
    ],
  };


  // Map skill icon names
  const skillIconNames = ["Sprout", "Code", "Briefcase", "Trophy"];
  const accentVariants = [
    { bg: "bg-gradient-to-br from-primary/5 via-card to-card", iconBg: "bg-primary/10" },
    { bg: "bg-gradient-to-b from-card to-primary/[0.03]", iconBg: "bg-primary/10" },
    { bg: "", iconBg: "bg-primary/10" },
    { bg: "bg-gradient-to-br from-accent/10 to-card", iconBg: "bg-accent/10" },
  ];

  return (
    <section id="about" aria-label="About me" className="py-20 md:py-28 section-padding">
      <div className="max-w-7xl mx-auto">
        <MotionCard>
          <div className="flex items-center gap-3 mb-2">
            <span className="pill-tag pill-tag-primary"><Leaf size={12} /> About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground">
            {about.heading.includes(",") ? (
              <>
                {about.heading.split(",")[0]}, <span className="gradient-text">{about.heading.split(",").slice(1).join(",").trim()}</span>
              </>
            ) : about.heading}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">{about.subheading}</p>
        </MotionCard>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10">
          {/* Career Objective */}
          <MotionCard index={0} className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="bento-card h-full relative overflow-hidden bg-gradient-to-br from-primary/5 via-card to-card p-6 sm:p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rounded-full" />
              <div className="flex items-center gap-3 mb-5">
                <div className="circle-icon circle-icon-md bg-primary/10"><Target className="text-primary" size={20} /></div>
                <h3 className="font-bold text-foreground font-serif text-lg">Career Objective</h3>
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-4 italic">
                {about.career_objective}
              </blockquote>
              <div className="flex flex-wrap gap-2 mt-6">
                {about.career_tags.map(t => <span key={t} className="pill-tag pill-tag-muted">{t}</span>)}
              </div>
            </div>
          </MotionCard>

          {/* Skills */}
          {about.skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || iconMap[skillIconNames[i]] || Sprout;
            const variant = accentVariants[i] || accentVariants[0];
            const isFullStack = i === 1;
            return (
              <MotionCard key={skill.title} index={i + 1} className={`lg:col-span-1 group ${isFullStack ? "lg:row-span-2" : ""}`}>
                <div className={`bento-card h-full flex flex-col items-start justify-center gap-4 min-h-[160px] ${variant.bg} hover:shadow-xl hover:border-primary/20 transition-all duration-300`}>
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className={`circle-icon circle-icon-lg ${variant.iconBg} group-hover:bg-primary transition-all duration-200`}>
                    <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{skill.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{skill.desc}</p>
                  </div>
                  {skill.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
                      {skill.tags.map(t => <span key={t} className="pill-tag pill-tag-muted text-[10px]">{t}</span>)}
                    </div>
                  )}
                </div>
              </MotionCard>
            );
          })}

          {/* Quick Stats */}
          <MotionCard index={5} className="sm:col-span-2 lg:col-span-3">
            <div className="bento-card h-full flex flex-col sm:flex-row flex-wrap items-center justify-around gap-4 sm:gap-6 py-5 sm:py-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
              {about.quick_stats.map((stat) => {
                const Icon = iconMap[stat.icon] || Globe;
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="circle-icon circle-icon-sm bg-primary/10"><Icon className="text-primary" size={14} /></div>
                    <div>
                      <p className="text-lg font-bold text-foreground font-serif leading-none">{stat.value}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{stat.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </MotionCard>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
