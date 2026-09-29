import { motion } from "framer-motion";
import {
  Mic,
  Trophy,
  Medal,
  Users,
  Award,
  Crown,
  Shield,
} from "lucide-react";
import MotionCard from "@/components/MotionCard";

const leadershipRoles = [
  {
    title: "Vice President",
    org: "GSTU Central Debating Society",
    icon: Shield,
  },
  {
    title: "President",
    org: "Agriculture Debating Club",
    icon: Crown,
    desc: "Event coordination, mentoring, team preparation, and competitive participation.",
  },
];

const debateAchievements = [
  {
    title: "Champion — Freshers Debate 3.0 & 4.0",
    org: "GSTU Central Debating Society",
    detail: "Agriculture Debating Club",
    badge: "Champion",
    badgeClass: "bg-amber-500/10 text-amber-600",
    icon: Trophy,
  },
  {
    title: "1st Runner-up — Intra-University Debate Tournament",
    org: "Law Debating Club, GSTU",
    detail: "",
    badge: "1st Runner-up",
    badgeClass: "bg-sky-500/10 text-sky-600",
    icon: Medal,
  },
  {
    title: "Semi-Finalist — BMB Debating Club Tournament",
    org: "BMB Debating Club",
    detail: "",
    badge: "Semi-Finalist",
    badgeClass: "bg-violet-500/10 text-violet-600",
    icon: Award,
  },
  {
    title: "Runner-up — Debate Competition",
    org: "Environment Science & Disaster Management Club",
    detail: "Agriculture Debating Club",
    badge: "Runner-up",
    badgeClass: "bg-emerald-500/10 text-emerald-600",
    icon: Medal,
  },
];

const DebateLeadershipSection = () => {
  return (
    <section
      id="leadership"
      aria-label="Leadership and debate achievements"
      className="py-20 md:py-28 section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 blob blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <MotionCard>
          <div className="flex items-center gap-3 mb-2">
            <span className="pill-tag pill-tag-primary">
              <Mic size={12} /> Leadership & Debates
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground">
            Leadership & <span className="gradient-text">Debate</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
            Competitive debating, team leadership, and organizational roles at
            GSTU.
          </p>
        </MotionCard>

        {/* Leadership Roles */}
        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {leadershipRoles.map((role, i) => {
            const Icon = role.icon;
            return (
              <MotionCard key={role.title} index={i} className="group">
                <div className="bento-card h-full bg-gradient-to-br from-primary/5 via-card to-card border-t-4 border-t-primary relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-3 sm:gap-4 mb-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="circle-icon circle-icon-lg bg-primary/10 group-hover:bg-primary transition-all duration-300"
                    >
                      <Icon
                        className="text-primary group-hover:text-primary-foreground transition-colors"
                        size={24}
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-foreground text-base sm:text-lg font-serif">
                        {role.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-primary font-medium">
                        {role.org}
                      </p>
                    </div>
                  </div>
                  {role.desc && (
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2">
                      {role.desc}
                    </p>
                  )}
                </div>
              </MotionCard>
            );
          })}
        </div>

        {/* Debate Achievements */}
        <MotionCard index={2} className="mt-10">
          <h3 className="text-lg font-bold font-serif text-foreground mb-5 flex items-center gap-2">
            <Trophy className="text-accent" size={18} />
            Selected Debate & Academic Achievements
          </h3>
        </MotionCard>

        <div className="grid sm:grid-cols-2 gap-4">
          {debateAchievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <MotionCard key={a.title} index={i + 3} className="group">
                <div className="bento-card h-full hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <motion.div
                      whileHover={{ rotate: -5 }}
                      className="circle-icon circle-icon-md bg-accent/10 group-hover:bg-accent transition-all duration-300"
                    >
                      <Icon
                        className="text-accent group-hover:text-accent-foreground transition-colors"
                        size={18}
                      />
                    </motion.div>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${a.badgeClass}`}
                    >
                      {a.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground text-sm font-serif mb-1">
                    {a.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{a.org}</p>
                  {a.detail && (
                    <p className="text-[10px] text-primary font-medium mt-1">
                      {a.detail}
                    </p>
                  )}
                </div>
              </MotionCard>
            );
          })}
        </div>

        {/* Languages */}
        <MotionCard index={7} className="mt-8">
          <div className="bento-card bg-gradient-to-r from-card via-primary/[0.03] to-card">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 py-2">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  Languages
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-sm font-bold text-foreground">Bengali</p>
                  <p className="text-[10px] text-muted-foreground">Native</p>
                </div>
                <div className="w-px h-8 bg-border/50" />
                <div className="text-center">
                  <p className="text-sm font-bold text-foreground">English</p>
                  <p className="text-[10px] text-muted-foreground">Fluent</p>
                </div>
              </div>
            </div>
          </div>
        </MotionCard>
      </div>
    </section>
  );
};

export default DebateLeadershipSection;
