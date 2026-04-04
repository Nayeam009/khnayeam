import { motion } from "framer-motion";
import { FlaskConical, Lightbulb, Briefcase } from "lucide-react";
import MotionCard from "@/components/MotionCard";
import { useSiteContent } from "@/hooks/useSiteContent";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  FlaskConical, Lightbulb, Briefcase,
};

interface ResearchItem {
  title: string;
  supervisor: string;
  desc: string;
  status: string;
  icon: string;
}

const DEFAULTS: ResearchItem[] = [
  { title: "Adaptation of Technology in Entrepreneurship", supervisor: "Md. Rahat Tuhin, Lecturer, Dept. of Marketing, GSTU", desc: "Conducting research on the integration of modern technology into entrepreneurial ventures.", status: "Ongoing", icon: "Lightbulb" },
  { title: "Developing 4-4-4 Super Food for Plants", supervisor: "Md. Mahfuzur Rahman, Lecturer, Dept. of Agriculture, GSTU", desc: "Working on formulation and application methods for an organic plant nutrient solution.", status: "Ongoing", icon: "FlaskConical" },
  { title: "University Innovation Hub Program (UIHP)", supervisor: "GSTU Entrepreneurship Program", desc: "Completed intensive entrepreneurship training focused on innovation.", status: "Completed", icon: "Briefcase" },
];

const accentMap: Record<number, string> = {
  0: "border-t-4 border-t-primary",
  1: "border-t-4 border-t-accent",
  2: "border-t-4 border-t-growth",
};

const ResearchSection = () => {
  const { data } = useSiteContent<{ items: ResearchItem[] }>("research");
  const items = data?.items ?? DEFAULTS;

  return (
    <section id="research" aria-label="Research projects" className="py-20 md:py-28 section-padding bg-card/50 relative overflow-hidden">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {items.map((r, i) => {
            const Icon = iconMap[r.icon] || FlaskConical;
            return (
              <MotionCard key={r.title} index={i} className="group">
                <div className={`bento-card h-full ${accentMap[i] || "border-t-4 border-t-primary"}`}>
                  <div className="flex items-center justify-between mb-5">
                    <motion.div whileHover={{ rotate: 10 }} className="circle-icon circle-icon-md bg-primary/10 group-hover:bg-primary transition-all duration-300">
                      <Icon className="text-primary group-hover:text-primary-foreground transition-colors" size={22} />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
