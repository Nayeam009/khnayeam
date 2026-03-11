import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  tag: string;
  title: string;
  highlight: string;
  description?: string;
  center?: boolean;
}

const SectionHeader = ({ tag, title, highlight, description, center = false }: SectionHeaderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={center ? "text-center" : ""}
    >
      <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">{tag}</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && (
        <p className={`text-muted-foreground max-w-xl leading-relaxed ${center ? "mx-auto" : ""}`}>{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
