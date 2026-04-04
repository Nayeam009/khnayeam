import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy, Mic, Lightbulb, FlaskConical,
  Star, Briefcase, Users,
} from "lucide-react";
import MotionCard from "@/components/MotionCard";

type TabKey = "debating" | "startup" | "scientific";

const achievementData: Record<TabKey, { text: string; icon: typeof Trophy; badge: string }[]> = {
  debating: [
    { text: "1st Runner-up — Intra-University Debate Tournament, LAW Debating Club, GSTU", icon: Trophy, badge: "Runner-up" },
    { text: "Semi-Finalist — Intra-University Debate Tournament, BMB Debating Club", icon: Star, badge: "Semi-Final" },
    { text: "Agriculture Debating Club became Champion — Freshers Debate 3.0 & 4.0, GSTU", icon: Trophy, badge: "Champion" },
    { text: "Agriculture Debating Club became Runner-up — Environment Science & Disaster Management Club", icon: Star, badge: "Runner-up" },
  ],
  startup: [
    { text: "Ranked in Top 3 — UIHP Startup Founders Competition", icon: Trophy, badge: "Top 3" },
    { text: "Founder & CEO — Stock-X BD Ltd.", icon: Briefcase, badge: "Founder" },
    { text: "Advisor in Startups: Coco Coffee, Vetmedix", icon: Lightbulb, badge: "Advisor" },
  ],
  scientific: [
    { text: "1st Runner-up — Poster Presentation, IAAS Bangladesh 2024, GSTU", icon: FlaskConical, badge: "Runner-up" },
    { text: "Champion — Poster on Mushroom Production Technology, IAAS Bangladesh 2025", icon: Trophy, badge: "Champion" },
    { text: "Vice President — GSTU Central Debating Society", icon: Users, badge: "VP" },
    { text: "President — Agriculture Debating Club, GSTU", icon: Users, badge: "President" },
  ],
};

const achievementCounts: Record<TabKey, number> = {
  debating: 4,
  startup: 3,
  scientific: 4,
};

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("debating");

  return (
    <section id="achievements" aria-label="Achievements and awards" className="py-20 md:py-28 section-padding bg-card/50 relative overflow-hidden">
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

        <MotionCard className="mb-8">
          <div className="flex justify-center gap-2 flex-wrap" role="tablist">
            {([
              { key: "debating" as const, label: "Debating", icon: Mic },
              { key: "startup" as const, label: "Startup", icon: Lightbulb },
              { key: "scientific" as const, label: "Scientific & Leadership", icon: FlaskConical },
            ]).map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                <tab.icon size={14} />
                <span>{tab.label}</span>
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
            role="tabpanel"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {achievementData[activeTab].map((item, i) => (
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
  );
};

export default AchievementsSection;
