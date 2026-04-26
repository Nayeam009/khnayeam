import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
  onClick,
}: {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onFocus={onMouseEnter}
      onClick={onClick}
      tabIndex={0}
      className={cn(
        "relative h-full min-h-0 overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out",
        isActive ? "flex-[4]" : "flex-[0.8]"
      )}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.onerror = null;
          img.src =
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='450' fill='%232d3748'%3E%3Crect width='400' height='450'/%3E%3Ctext x='50%25' y='50%25' fill='%23fff' font-size='16' text-anchor='middle' dominant-baseline='middle'%3EImage%3C/text%3E%3C/svg%3E";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 p-3 sm:p-4 transition-all duration-500",
          isActive ? "opacity-100 translate-y-0" : "opacity-70 translate-y-1"
        )}
      >
        <span className="block max-w-full text-sm sm:text-base font-semibold leading-tight text-primary-foreground drop-shadow-lg">
          {item.title}
        </span>
      </div>
    </div>
  );
};

export interface ImageAccordionProps {
  items: AccordionItemData[];
  defaultActive?: number;
  className?: string;
}

export function ImageAccordion({
  items,
  defaultActive = 0,
  className,
}: ImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div className={cn("flex h-[280px] items-stretch gap-2 sm:h-[350px]", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={activeIndex === index}
          onMouseEnter={() => setActiveIndex(index)}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
