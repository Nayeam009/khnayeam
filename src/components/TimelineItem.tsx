import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  badge?: string;
  index: number;
}

const TimelineItem = ({ year, title, subtitle, description, icon, badge, index }: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-start gap-4 md:gap-6"
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-12 h-12 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center z-10"
        >
          {icon}
        </motion.div>
        <div className="w-0.5 h-full bg-border/60 mt-2 min-h-[2rem]" />
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{year}</span>
        <h3 className="font-bold text-foreground text-lg font-serif mt-2">{title}</h3>
        <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
        {badge && (
          <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2.5 py-0.5 rounded-full mt-2">{badge}</span>
        )}
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
