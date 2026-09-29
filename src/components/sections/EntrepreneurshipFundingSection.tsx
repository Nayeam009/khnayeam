import { motion } from "framer-motion";
import {
  Rocket,
  Trophy,
  BadgeDollarSign,
  Sprout,
  Zap,
  TrendingUp,
} from "lucide-react";
import MotionCard from "@/components/MotionCard";
import AnimatedCounter from "@/components/AnimatedCounterInline";

const cohortAwards = [
  {
    place: "3rd Place",
    name: "Stock-X BD Ltd.",
    cohort: "1st UIHP Cohort",
    amount: "BDT 50k",
    desc: "LPG digital ERP solution",
    accent: "border-l-amber-500",
    badge: "bg-amber-500/10 text-amber-600",
  },
  {
    place: "2nd Place",
    name: "Coco Coffee",
    cohort: "2nd UIHP Cohort",
    amount: "BDT 65k",
    desc: "Health-product e-commerce marketplace",
    accent: "border-l-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-600",
  },
  {
    place: "4th Place",
    name: "Vet-Medix",
    cohort: "2nd UIHP Cohort",
    amount: "BDT 40k",
    desc: "Integrated digital pet-care platform",
    accent: "border-l-sky-500",
    badge: "bg-sky-500/10 text-sky-600",
  },
  {
    place: "2nd Place",
    name: "Acqua Lence",
    cohort: "4th UIHP Cohort",
    amount: "BDT 65k",
    desc: "IoT-oriented aqua monitoring device",
    accent: "border-l-violet-500",
    badge: "bg-violet-500/10 text-violet-600",
  },
];

const seedFunding = [
  { name: "Stock-X BD Ltd.", amount: "BDT 80k" },
  { name: "Vet-Medix", amount: "BDT 80k" },
  { name: "Coco Coffee", amount: "BDT 100k" },
];

const EntrepreneurshipFundingSection = () => {
  return (
    <section
      id="funding"
      aria-label="Entrepreneurship achievements and seed funding"
      className="py-20 md:py-28 section-padding relative overflow-hidden bg-card/50"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blob blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blob blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <MotionCard>
          <div className="flex items-center gap-3 mb-2">
            <span className="pill-tag pill-tag-primary">
              <Rocket size={12} /> Entrepreneurship & Funding
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground">
            UIHP <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
            Achieved competitive recognition across four UIHP startup cohorts
            with four different venture projects at Gopalganj Science &
            Technology University.
          </p>
        </MotionCard>

        {/* Total Funding Hero Card */}
        <MotionCard index={0} className="mt-10">
          <div className="bento-card bg-gradient-to-br from-primary/8 via-card to-accent/5 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="circle-icon w-20 h-20 bg-primary/15 flex-shrink-0"
              >
                <BadgeDollarSign className="text-primary" size={36} />
              </motion.div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                  Total UIHP Competition Awards & Seed Funding
                </p>
                <div className="flex items-baseline gap-2 justify-center md:justify-start">
                  <span className="text-4xl sm:text-5xl font-bold font-serif gradient-text">
                    ৳520,000
                  </span>
                  <span className="text-sm text-muted-foreground">BDT</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                  Combined competition awards (BDT 220,000) and national seed
                  funding (BDT 300,000) across four ventures.
                </p>
              </div>

              <div className="flex flex-row gap-6 flex-shrink-0">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground font-serif">4</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Ventures</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground font-serif">4</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Cohorts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground font-serif">3</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Seed Funded</p>
                </div>
              </div>
            </div>
          </div>
        </MotionCard>

        {/* Cohort Awards Grid */}
        <div className="mt-8">
          <MotionCard index={1}>
            <h3 className="text-lg font-bold font-serif text-foreground mb-5 flex items-center gap-2">
              <Trophy className="text-accent" size={18} />
              Competition Awards — BDT 220,000
            </h3>
          </MotionCard>

          <div className="grid sm:grid-cols-2 gap-4">
            {cohortAwards.map((award, i) => (
              <MotionCard key={award.name} index={i + 2} className="group">
                <div
                  className={`bento-card h-full border-l-4 ${award.accent} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold ${award.badge}`}
                    >
                      <Trophy size={10} />
                      {award.place}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {award.cohort}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground text-base font-serif">
                    {award.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {award.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-border/30">
                    <span className="text-sm font-bold text-primary font-serif">
                      Awarded {award.amount}
                    </span>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>
        </div>

        {/* National Seed Funding */}
        <MotionCard index={6} className="mt-8">
          <div className="bento-card bg-gradient-to-r from-card via-primary/[0.03] to-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary/30 rounded-full" />
            <div className="pl-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="circle-icon circle-icon-md bg-primary/10">
                  <Sprout className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg font-serif">
                    National UIHP Seed Round
                  </h3>
                  <p className="text-xs text-primary font-medium">
                    National-Level Recognition & Funding — BDT 300,000
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-5 max-w-xl">
                Selected in the national UIHP seed round, with three ventures
                receiving a combined BDT 300,000 in seed funding:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {seedFunding.map((s) => (
                  <div
                    key={s.name}
                    className="p-4 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm text-center hover:border-primary/30 hover:shadow-md transition-all duration-200"
                  >
                    <p className="font-bold text-foreground text-sm">{s.name}</p>
                    <p className="text-lg font-bold text-primary font-serif mt-1">
                      {s.amount}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      Seed Funding
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionCard>
      </div>
    </section>
  );
};

export default EntrepreneurshipFundingSection;
