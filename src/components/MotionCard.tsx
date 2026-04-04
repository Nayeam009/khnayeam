import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface MotionCardProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

const MotionCard = ({ children, index = 0, className = "" }: MotionCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;
