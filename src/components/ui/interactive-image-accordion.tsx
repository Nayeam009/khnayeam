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
}: {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={cn(
        "relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-in-out",
        isActive ? "flex-[4]" : "flex-[0.8]"
      )}
      style={{ minHeight: "350px" }}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
        onError={(e) => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src =
            "https://placehold.co/400x450/2d3748/ffffff?text=Image";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 p-4 transition-all duration-500",
          isActive ? "opacity-100 translate-y-0" : "opacity-70 translate-y-1"
        )}
      >
        <span className="text-sm sm:text-base font-semibold text-primary-foreground drop-shadow-lg">
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
    <div className={cn("flex gap-2 h-[350px] sm:h-[400px]", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={activeIndex === index}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
