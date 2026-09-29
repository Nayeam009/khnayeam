import { motion } from "framer-motion";
import {
  Briefcase,
  HeartPulse,
  Calculator,
  Calendar,
} from "lucide-react";
import MotionCard from "@/components/MotionCard";

const jobs = [
  {
    title: "Field Organiser",
    organization: "BHP Tuberculosis Care & Prevention Program, BRAC",
    period: "May 2026 – Present",
    pin: "PIN: 296311",
    icon: HeartPulse,
    color: "from-rose-500/10 to-rose-500/5",
    borderColor: "border-t-rose-500",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
    responsibilities: [
      "Coordinate community-level TB care, prevention, awareness, referral, follow-up, and operational activities within the designated field area.",
      "Engage community members, local stakeholders, health workers, and partner actors to strengthen case-finding, treatment support, and program compliance.",
      "Manage field data collection, patient/community records, logistics, and routine reporting; monitor implementation gaps and communicate operational needs to the supervisory team.",
    ],
    tags: ["Public Health", "Field Operations", "Community Engagement", "Data Collection", "BRAC"],
  },
  {
    title: "Financial Advisor",
    organization: "Sonali Life Insurance",
    period: "Ongoing",
    pin: "",
    icon: Calculator,
    color: "from-amber-500/10 to-amber-500/5",
    borderColor: "border-t-amber-500",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    responsibilities: [
      "Manage client portfolios and policy planning; built a custom premium-calculator tool to automate policy assessments.",
    ],
    tags: ["Finance", "Client Management", "Automation", "Insurance"],
  },
];

const ProfessionalExperienceSection = () => {
  return (
    <section
      id="professional"
      aria-label="Professional experience"
      className="py-20 md:py-28 section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/3 blob blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <MotionCard>
          <div className="flex items-center gap-3 mb-2">
            <span className="pill-tag pill-tag-primary">
              <Briefcase size={12} /> Professional Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
            Hands-on roles spanning public health field operations, financial
            advisory, and community engagement.
          </p>
        </MotionCard>

        <div className="mt-10 space-y-6">
          {jobs.map((job, i) => {
            const Icon = job.icon;
            return (
              <MotionCard key={job.title} index={i}>
                <div
                  className={`bento-card border-t-4 ${job.borderColor} bg-gradient-to-br ${job.color} via-card to-card group relative overflow-hidden`}
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`circle-icon circle-icon-lg ${job.iconBg} flex-shrink-0`}
                    >
                      <Icon className={job.iconColor} size={28} />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1">
                        <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-foreground font-serif">
                          {job.title}
                        </h3>
                        {job.pin && (
                          <span className="pill-tag pill-tag-muted text-[10px] w-fit">
                            {job.pin}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-primary font-medium mb-1">
                        {job.organization}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={12} /> {job.period}
                        </span>
                      </div>

                      <ul className="space-y-3">
                        {job.responsibilities.map((resp, ri) => (
                          <li
                            key={ri}
                            className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-5">
                        {job.tags.map((t) => (
                          <span
                            key={t}
                            className="pill-tag pill-tag-muted text-[10px]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperienceSection;
