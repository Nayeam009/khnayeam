import { Trophy, Mic, Lightbulb, FlaskConical, Star, Briefcase, Users } from "lucide-react";
import MotionCard from "@/components/MotionCard";
import { AwardCard, type AwardItem } from "@/components/ui/award-carousel";
import { useSiteContent } from "@/hooks/useSiteContent";
import React from "react";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="text-accent" size={20} />,
  Star: <Star className="text-accent" size={20} />,
  Mic: <Mic className="text-accent" size={20} />,
  Lightbulb: <Lightbulb className="text-accent" size={20} />,
  FlaskConical: <FlaskConical className="text-accent" size={20} />,
  Briefcase: <Briefcase className="text-accent" size={20} />,
  Users: <Users className="text-accent" size={20} />,
};

interface AchievementData {
  title: string;
  category: string;
  description: string;
  badge: string;
  bgImage: string;
  icon?: string;
}

const DEFAULTS: AchievementData[] = [
  { title: "Agriculture Debating Club — Champion", category: "Debating", description: "Led to back-to-back championship victories.", badge: "Champion", bgImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600" },
  { title: "Top 3 — UIHP Startup Founders", category: "Startup", description: "Ranked Top 3.", badge: "Top 3", bgImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600" },
  { title: "Champion — Mushroom Production Technology", category: "Scientific", description: "Won championship at IAAS 2025.", badge: "Champion", bgImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600" },
];

const AchievementsSection = () => {
  const { data } = useSiteContent<{ items: AchievementData[] }>("achievements");
  const items = data?.items ?? DEFAULTS;

  const allAwards: AwardItem[] = items.map((a) => ({
    title: a.title,
    category: a.category,
    description: a.description,
    badge: a.badge,
    bgImage: a.bgImage,
    icon: iconMap[a.icon || "Trophy"] || <Trophy className="text-accent" size={20} />,
  }));

  const duplicated = [...allAwards, ...allAwards];

  return (
    <section id="achievements" aria-label="Achievements and awards" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto section-padding">
        <MotionCard>
          <div className="text-center mb-12">
            <span className="pill-tag pill-tag-primary mb-3"><Trophy size={12} /> Achievements</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mt-3">
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              A collection of academic, leadership, and competitive achievements. Click any card to learn more.
            </p>
          </div>
        </MotionCard>
      </div>

      <div className="relative">
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          mask: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMask: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }} />
        <div className="flex gap-5 py-4 w-max achievements-scroll" style={{ animation: "achievements-scroll 40s linear infinite" }}>
          {duplicated.map((award, index) => (
            <div key={index} className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px]">
              <AwardCard award={award} index={index} backgroundImage={award.bgImage} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes achievements-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .achievements-scroll:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default AchievementsSection;
