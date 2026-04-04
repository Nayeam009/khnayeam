import { motion } from "framer-motion";
import { Users, Phone } from "lucide-react";
import MotionCard from "@/components/MotionCard";
import { useSiteContent } from "@/hooks/useSiteContent";

interface RefItem {
  name: string;
  position: string;
  institution: string;
  phone: string;
  initials: string;
}

const DEFAULTS: RefItem[] = [
  { name: "Dr. Zilhas Ahmed Jewel", position: "Dean & Chairman, Dept. of Agriculture", institution: "Gopalganj Science & Technology University", phone: "+8801753661866", initials: "ZA" },
  { name: "Md. Rahat Tuhin", position: "Lecturer, Dept. of Marketing", institution: "Gopalganj Science & Technology University", phone: "+8801751843035", initials: "RT" },
];

const ReferencesSection = () => {
  const { data } = useSiteContent<{ items: RefItem[] }>("references_section");
  const items = data?.items ?? DEFAULTS;

  return (
    <section aria-label="Professional references" className="py-16 md:py-20 section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <MotionCard>
          <div className="text-center mb-10">
            <span className="pill-tag pill-tag-primary mb-3"><Users size={12} /> References</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-foreground mt-3">
              Professional <span className="gradient-text">References</span>
            </h2>
          </div>
        </MotionCard>
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((ref, i) => (
            <MotionCard key={ref.name} index={i} className="group">
              <div className="bento-card flex flex-col items-center text-center gap-4">
                <motion.div whileHover={{ scale: 1.1 }} className="circle-icon w-20 h-20 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-bold font-serif text-2xl">
                  {ref.initials}
                </motion.div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{ref.name}</h4>
                  <p className="text-xs text-primary font-medium mt-1">{ref.position}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{ref.institution}</p>
                </div>
                <a href={`tel:${ref.phone}`} className="pill-tag pill-tag-muted hover:pill-tag-primary transition-all">
                  <Phone size={10} /> {ref.phone}
                </a>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
