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
      {/* Floating soil particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <FloatingElement 
          key={`soil-${i}`}
          delay={`${i * 1.2}s`}
          className={`absolute w-2 h-2 bg-soil/20 rounded-full`}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        >
          <div />
        </FloatingElement>
      ))}
      
      {/* Growing elements */}
      {Array.from({ length: 4 }).map((_, i) => (
        <GrowingElement 
          key={`growth-${i}`}
          delay={`${i * 0.8}s`}
          className={`absolute w-4 h-4 bg-growth/15 rounded-full animate-organic-pulse`}
          style={{
            right: `${10 + i * 20}%`,
            bottom: `${20 + i * 15}%`,
          }}
        >
          <div />
        </GrowingElement>
      ))}
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-growth/5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-soil/5 to-transparent" />
    </div>
  );
};