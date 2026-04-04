"use client";
import React from "react";
import { motion } from "framer-motion";

interface ColumnItem {
  text: string;
  icon: React.ReactNode;
  label: string;
}

export const InfoColumn = (props: {
  className?: string;
  items: ColumnItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 14,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.items.map(({ text, icon, label }, i) => (
              <div
                className="p-6 sm:p-8 rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg shadow-primary/5 max-w-xs w-full hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                key={i}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    {label}
                  </span>
                </div>
                <div className="text-base font-bold text-foreground">{text}</div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
