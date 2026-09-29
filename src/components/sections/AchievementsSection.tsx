import { Trophy, Mic, Lightbulb, FlaskConical, Star, Briefcase, Users } from "lucide-react";
import MotionCard from "@/components/MotionCard";
import { AwardCard, type AwardItem } from "@/components/ui/award-carousel";
import { useSiteContent } from "@/hooks/useSiteContent";
import { getOptimizedStorageUrl } from "@/lib/storage-images";
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
  { title: "Champion — Mushroom Production Technology", category: "Scientific", description: "Won championship poster presentation at IAAS Bangladesh Scientific Event 2025, GSTU.", badge: "Champion", bgImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600", icon: "FlaskConical" },
  { title: "1st Runner-up — Poster Presentation, IAAS 2024", category: "Scientific", description: "1st Runner-up at IAAS Bangladesh Scientific Event 2024, GSTU.", badge: "1st Runner-up", bgImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600", icon: "Star" },
  { title: "Top 3 — UIHP Startup Founders Competition", category: "Startup", description: "Ranked Top 3 among UIHP startup founders; provided advisory to Coco Coffee, Vetmedix, Acqua Lence, and Z AgroTech.", badge: "Top 3", bgImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600", icon: "Trophy" },
  { title: "Agriculture Debating Club — Champion", category: "Debating", description: "Led Agriculture Debating Club to back-to-back championship victories — Freshers Debate 3.0 & 4.0.", badge: "Champion", bgImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600", icon: "Mic" },
  { title: "Vice President — GSTU Central Debating Society", category: "Leadership", description: "Elected Vice President of the GSTU Central Debating Society.", badge: "VP", bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600", icon: "Users" },
  { title: "BDT 520K — UIHP Awards & Seed Funding", category: "Startup", description: "Cumulative BDT 520,000 in UIHP competition awards and national-level seed funding across four ventures.", badge: "₹520K", bgImage: "https://images.unsplash.com/photo-1553729459-uj4545fce28a?w=600", icon: "Briefcase" },
];

const AchievementsSection = () => {
  const { data } = useSiteContent<{ items: AchievementData[] }>("achievements");
  const items = data?.items ?? DEFAULTS;

  const allAwards: AwardItem[] = items.map((a) => ({
    title: a.title,
    category: a.category,
    description: a.description,
    badge: a.badge,
    bgImage: getOptimizedStorageUrl(a.bgImage, { width: 960, quality: 80 }),
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

      <div className="relative" role="region" aria-label="Achievements carousel">
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          mask: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMask: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }} />
        <div className="flex gap-5 py-4 w-max achievements-scroll" style={{ animation: "achievements-scroll 40s linear infinite" }}>
          {duplicated.map((award, index) => (
            <div key={index} className="shrink-0 w-[300px] sm:w-[340px] md:w-[380px]">
              <AwardCard award={award} index={index} backgroundImage={award.bgImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
