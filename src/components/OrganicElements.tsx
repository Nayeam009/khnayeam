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
      className={`animate-fade-up ${className}`}
      style={{ animationDelay: delay, animationFillMode: 'both', ...style }}
    >
      {children}
    </div>
  );
};

export const OrganicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle gradient mesh */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-growth/3 rounded-full blur-[150px]" />
      
      {/* Subtle dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />
    </div>
  );
};
