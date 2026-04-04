import { GraduationCap, Code, Trophy, Briefcase } from "lucide-react";
import MotionCard from "@/components/MotionCard";
import AnimatedCounter from "@/components/AnimatedCounterInline";
import { useSiteContent } from "@/hooks/useSiteContent";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  GraduationCap, Code, Trophy, Briefcase,
};

interface StatItem {
  end: number;
  decimals?: number;
  suffix: string;
  label: string;
  icon: string;
}

const DEFAULTS: StatItem[] = [
  { end: 3.59, decimals: 2, suffix: "", label: "CGPA (out of 4.00)", icon: "GraduationCap" },
  { end: 5, suffix: "+", label: "Digital Projects", icon: "Code" },
  { end: 7, suffix: "+", label: "Awards & Honors", icon: "Trophy" },
  { end: 20, suffix: "+", label: "Months Leading Stock-X", icon: "Briefcase" },
];

const StatsSection = () => {
  const { data } = useSiteContent<{ items: StatItem[] }>("stats");
  const items = data?.items ?? DEFAULTS;

  return (
    <section aria-label="Key statistics" className="py-12 md:py-16 section-padding border-y border-border/30 bg-card/20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {items.map((stat, i) => {
          const Icon = iconMap[stat.icon] || GraduationCap;
          return (
            <MotionCard key={stat.label} index={i}>
              <div className="bento-card flex flex-col items-center gap-2 sm:gap-3 text-center p-3 sm:p-6">
                <div className="circle-icon circle-icon-md bg-primary/10">
                  <Icon className="text-primary" size={20} />
                </div>
                <AnimatedCounter end={stat.end} decimals={stat.decimals} suffix={stat.suffix} label={stat.label} />
              </div>
            </MotionCard>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
