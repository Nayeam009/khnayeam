import { ReactNode, CSSProperties } from "react";

interface GrowingElementProps {
  children: ReactNode;
  delay?: string;
  className?: string;
  style?: CSSProperties;
}

export const GrowingElement = ({ children, delay = "0s", className = "", style }: GrowingElementProps) => (
  <div className={`animate-fade-up ${className}`} style={{ animationDelay: delay, animationFillMode: "both", ...style }}>
    {children}
  </div>
);

export const FloatingElement = ({ children, delay = "0s", className = "", style }: GrowingElementProps) => (
  <div className={`animate-float ${className}`} style={{ animationDelay: delay, ...style }}>
    {children}
  </div>
);

export const OrganicBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blob blur-[100px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blob blur-[80px]" />
  </div>
);
