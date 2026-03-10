import { Badge } from "@/components/ui/badge";
import { Trophy, MessageSquare, Lightbulb, Award, Microscope, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import { OrganicBackground, GrowingElement } from "@/components/OrganicElements";

const Achievements = () => {
  const debating = [
    { title: "1st Runner-up", event: "Intra-University Debate Tournament", org: "LAW Debating Club, GSTU" },
    { title: "Semi-Finalist", event: "Intra-University Debate Tournament", org: "BMB Debating Club" },
    { title: "Champion", event: "Freshers Debate 3.0 & 4.0", org: "GSTU Central Debating Society" },
    { title: "Runner-up", event: "Debate Tournament", org: "Organized by Environment Science & Disaster Management Club" },
  ];

  const scientific = [
    { title: "Champion", event: "Poster Presentation — Mushroom Production Technology", org: "IAAS Bangladesh Scientific Event 2025, GSTU" },
    { title: "1st Runner-up", event: "Poster Presentation", org: "IAAS Bangladesh Scientific Event 2024, GSTU" },
  ];

  const leadership = [
    { title: "Vice President", org: "GSTU Central Debating Society" },
    { title: "President", org: "Agriculture Debating Club, GSTU" },
  ];

  const startup = [
    { title: "Top 3 Ranking", event: "UIHP Startup Founders Competition", org: "University Innovation Hub Program, GSTU" },
    { title: "Founder & CEO", event: "Stock-X BD Ltd.", org: "GSTU Startup Project — 1 year, 8 months" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <GrowingElement delay="0.1s">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Achievements</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-16 max-w-3xl">
            Awards, leadership & <span className="gradient-text">recognition</span>
          </h1>
        </GrowingElement>

        {/* Stats */}
        <GrowingElement delay="0.15s">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Trophy, value: "10+", label: "Awards" },
              { icon: MessageSquare, value: "4+", label: "Debate Wins" },
              { icon: Microscope, value: "2", label: "Scientific Awards" },
              { icon: Users, value: "2", label: "Leadership Roles" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-5 rounded-2xl border border-border/50 bg-card hover-lift">
                <stat.icon className="text-primary mx-auto mb-3" size={24} />
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </GrowingElement>

        {/* Debating */}
        <GrowingElement delay="0.2s">
          <div className="rounded-2xl border border-border/50 bg-card p-8 mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <MessageSquare size={18} className="text-primary" />
              Debating Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {debating.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
                  <Trophy size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.event}</p>
                    <p className="text-xs text-muted-foreground">{item.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GrowingElement>

        {/* Scientific */}
        <GrowingElement delay="0.3s">
          <div className="rounded-2xl border border-border/50 bg-card p-8 mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Microscope size={18} className="text-primary" />
              Scientific Competitions
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {scientific.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
                  <Award size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.event}</p>
                    <p className="text-xs text-muted-foreground">{item.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GrowingElement>

        {/* Startup */}
        <GrowingElement delay="0.4s">
          <div className="rounded-2xl border border-border/50 bg-card p-8 mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Lightbulb size={18} className="text-primary" />
              Startup & Innovation
            </h2>
            <div className="space-y-3">
              {startup.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30">
                  <Lightbulb size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.event}</p>
                    <p className="text-xs text-muted-foreground">{item.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GrowingElement>

        {/* Leadership */}
        <GrowingElement delay="0.5s">
          <div className="rounded-2xl border border-border/50 bg-card p-8">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users size={18} className="text-primary" />
              Leadership Positions
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {leadership.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GrowingElement>
      </div>
    </div>
  );
};

export default Achievements;
