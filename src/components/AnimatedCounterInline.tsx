import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  decimals?: number;
  suffix?: string;
  label: string;
}

const AnimatedCounter = ({ end, decimals = 0, suffix = "", label }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text font-serif">
        {count.toFixed(decimals)}{suffix}
      </p>
      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
