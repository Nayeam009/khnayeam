import { motion } from "framer-motion";
import {
  Briefcase, HeartPulse, Globe, Coffee,
  ExternalLink, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MotionCard from "@/components/MotionCard";
import { ImageAccordion } from "@/components/ui/interactive-image-accordion";

const skillImages = [
  { id: 1, title: "Web Development", imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1974&auto=format&fit=crop" },
  { id: 2, title: "Agriculture & Farming", imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop" },
  { id: 3, title: "UI/UX Design", imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2036&auto=format&fit=crop" },
  { id: 4, title: "Leadership", imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, title: "Research & Innovation", imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" },
];

const ExperienceSection = () => (
  <section id="experience" aria-label="Experience and projects" className="py-20 md:py-28 section-padding">
    <div className="max-w-7xl mx-auto">
      <MotionCard>
        <div className="flex items-center gap-3 mb-2">
          <span className="pill-tag pill-tag-primary"><Briefcase size={12} /> Experience & Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground">
          Startups & <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
          Building real-world digital solutions across agriculture, healthcare, finance, and e-commerce.
        </p>
      </MotionCard>

      <MotionCard index={0} className="mt-10">
        <div className="bento-card bg-gradient-to-br from-primary/5 via-card to-card group">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors" />
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="circle-icon circle-icon-lg bg-primary/15 flex-shrink-0"
            >
              <Briefcase className="text-primary" size={28} />
            </motion.div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                <h3 className="font-bold text-xl md:text-2xl text-foreground font-serif">Stock-X BD Ltd.</h3>
                <span className="pill-tag pill-tag-primary w-fit">Founder & CEO</span>
                <span className="pill-tag pill-tag-accent w-fit">1 Year 8 Months</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-2xl">
                Founded under UIHP at GSTU. Led product development, operations, and strategic planning for an LPG ERP platform.
                Developed UI/UX & Frontend. Coordinated a cross-functional team and drove early-stage growth initiatives.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["LPG ERP", "UI/UX Design", "Frontend Dev", "Team Leadership", "Strategic Planning"].map(t => (
                  <span key={t} className="pill-tag pill-tag-muted text-[10px]">{t}</span>
                ))}
              </div>
            </div>
            <a href="https://stockxbd.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 self-start w-full sm:w-auto">
              <Button variant="outline" className="rounded-full gap-2 text-sm group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 w-full sm:w-auto min-h-[48px]">
                Visit Site <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </MotionCard>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {[
          {
            name: "Vetmedix",
            url: "https://vetmedixbd.com",
            icon: HeartPulse,
            role: "Full-Stack Developer & Advisor",
            desc: "Full-stack pet-care platform with integrated E-commerce, Vet Clinic, Doctors & Appointment Booking.",
            tags: ["React", "E-commerce", "Full-Stack"],
          },
          {
            name: "SLI Policy Calculator",
            url: "https://slipolicy.vercel.app",
            icon: Globe,
            role: "Financial Advisor — Sonali Life Insurance",
            desc: "Custom Premium Calculator to automate complex policy assessments and client portfolio management.",
            tags: ["Finance", "Automation", "Web App"],
          },
          {
            name: "Coco Coffee",
            url: "https://coco-coffee.lovable.app",
            icon: Coffee,
            role: "Advisor",
            desc: "E-commerce marketplace for health and wellness products. Launched and scaled the platform.",
            tags: ["E-commerce", "Health", "Marketplace"],
          },
        ].map((p, i) => (
          <MotionCard key={p.name} index={i + 1} className="group h-full">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: -5 }}
                  className="circle-icon circle-icon-md bg-primary/10 group-hover:bg-primary transition-all duration-300"
                >
                  <p.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                </motion.div>
                <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={16} />
              </div>
              <h3 className="font-bold text-foreground text-base font-sans">{p.name}</h3>
              <p className="text-xs text-primary font-medium mt-0.5">{p.role}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map(t => (
                  <span key={t} className="pill-tag pill-tag-muted text-[10px]">{t}</span>
                ))}
              </div>
            </a>
          </MotionCard>
        ))}
      </div>

      <MotionCard index={2} className="mt-10">
        <div className="bento-card p-0 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Skills content */}
            <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="circle-icon circle-icon-md bg-primary/10">
                  <Zap className="text-primary" size={20} />
                </div>
                <span className="pill-tag pill-tag-primary text-xs">Core Expertise</span>
              </div>
              <h3 className="font-bold text-foreground text-2xl sm:text-3xl font-serif mb-2">
                Technical Skills & Competencies
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-lg">
                Build high-performance solutions across web development, agriculture, and leadership domains.
              </p>

              <div className="space-y-5">
                {[
                  { category: "Development", skills: ["Full-Stack Web Dev", "React / TypeScript", "UI/UX Design (Figma)", "Frontend & Backend", "ERP Development", "E-commerce"] },
                  { category: "Agriculture", skills: ["Crop Science", "Soil Management", "Plant Nutrition", "Sustainable Farming", "Agricultural Research", "Organic Solutions"] },
                  { category: "Soft Skills", skills: ["Leadership", "Public Speaking", "Strategic Planning", "Team Coordination", "MS Office (Expert)", "English & Bengali"] },
                ].map((group) => (
                  <div key={group.category} className="space-y-2.5">
                    <h4 className="text-sm font-bold text-foreground tracking-wide">{group.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="pill-tag pill-tag-muted cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive Image Accordion */}
            <div className="lg:w-[45%] p-4 sm:p-6">
              <ImageAccordion
                items={skillImages}
                defaultActive={2}
                className="h-[280px] sm:h-[350px] lg:h-full lg:min-h-[420px]"
              />
            </div>
          </div>
        </div>
      </MotionCard>
    </div>
  </section>
);

export default ExperienceSection;
