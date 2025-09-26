import { ReactNode, CSSProperties } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: string;
  className?: string;
  style?: CSSProperties;
}

export const FloatingElement = ({ children, delay = "0s", className = "", style }: FloatingElementProps) => {
  return (
    <div 
      className={`animate-float ${className}`}
      style={{ animationDelay: delay, ...style }}
    >
      {children}
    </div>
  );
};

interface GrowingElementProps {
  children: ReactNode;
  delay?: string;
  className?: string;
  style?: CSSProperties;
}

export const GrowingElement = ({ children, delay = "0s", className = "", style }: GrowingElementProps) => {
  return (
    <div 
      className={`animate-grow ${className}`}
      style={{ animationDelay: delay, ...style }}
    >
      {children}
    </div>
  );
};

export const OrganicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced floating soil particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloatingElement 
          key={`soil-${i}`}
          delay={`${i * 0.8}s`}
          className={`absolute bg-soil/15 rounded-full animate-drift`}
          style={{
            width: `${8 + (i % 3) * 4}px`,
            height: `${8 + (i % 3) * 4}px`,
            left: `${15 + i * 12}%`,
            top: `${25 + (i * 8) % 50}%`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-soil/30 to-soil/10 rounded-full" />
        </FloatingElement>
      ))}
      
      {/* Enhanced growing elements */}
      {Array.from({ length: 6 }).map((_, i) => (
        <GrowingElement 
          key={`growth-${i}`}
          delay={`${i * 0.6}s`}
          className={`absolute bg-gradient-to-br from-growth/20 to-growth/5 rounded-full animate-breath`}
          style={{
            width: `${12 + (i % 4) * 6}px`,
            height: `${12 + (i % 4) * 6}px`,
            right: `${5 + i * 15}%`,
            bottom: `${15 + (i * 12) % 60}%`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-transparent via-growth/10 to-transparent rounded-full animate-shimmer" />
        </GrowingElement>
      ))}
      
      {/* Floating water droplets */}
      {Array.from({ length: 4 }).map((_, i) => (
        <FloatingElement 
          key={`water-${i}`}
          delay={`${2 + i * 0.7}s`}
          className={`absolute w-3 h-3 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full animate-organic-pulse`}
          style={{
            left: `${60 + i * 10}%`,
            top: `${40 + i * 15}%`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-transparent to-white/20 rounded-full" />
        </FloatingElement>
      ))}
      
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-growth/8 animate-breath" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-soil/8 to-accent/5" />
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/3 via-transparent to-green-500/3 animate-drift" />
    </div>
  );
};