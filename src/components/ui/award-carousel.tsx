import React, { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, X } from "lucide-react";
import { cn } from "@/lib/utils";

// ===== Types =====
export interface AwardItem {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  bgImage?: string;
}

interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}

// ===== Hooks =====
const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: () => void,
) => {
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      callback();
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [ref, callback]);
};

// ===== Carousel =====
export const AwardCarousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll, checkScrollability]);

  const scrollBy = (dir: number) => {
    carouselRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        onScroll={checkScrollability}
        className="flex gap-4 sm:gap-6 overflow-x-scroll py-6 px-2 scrollbar-hide scroll-smooth"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            className="shrink-0 w-[260px] sm:w-[340px] md:w-[380px]"
          >
            {item}
          </motion.div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-end gap-2 mt-4 pr-2">
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canScrollLeft}
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center border border-border/50 transition-all duration-200",
            canScrollLeft
              ? "bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm"
              : "bg-muted/30 text-muted-foreground/30 cursor-not-allowed"
          )}
          aria-label="Scroll left"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={!canScrollRight}
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center border border-border/50 transition-all duration-200",
            canScrollRight
              ? "bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm"
              : "bg-muted/30 text-muted-foreground/30 cursor-not-allowed"
          )}
          aria-label="Scroll right"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

// ===== Award Card =====
export const AwardCard = ({
  award,
  backgroundImage = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&auto=format&fit=crop&q=60",
}: {
  award: AwardItem;
  index?: number;
  backgroundImage?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => setIsExpanded(true);
  const handleCollapse = useCallback(() => setIsExpanded(false), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCollapse();
    };

    if (isExpanded) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.dataset.scrollY = scrollY.toString();
    } else {
      const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo({ top: scrollY, behavior: "instant" as ScrollBehavior });
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isExpanded, handleCollapse]);

  useOutsideClick(containerRef, handleCollapse);

  return (
    <>
      {/* Expanded overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              ref={containerRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-3xl overflow-hidden bg-card border border-border/50 shadow-2xl"
            >
              {/* Background image header */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={backgroundImage}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <button
                  onClick={handleCollapse}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 -mt-8 relative">
                <span className="pill-tag pill-tag-accent text-xs mb-3">{award.badge}</span>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-2">
                  {award.category}
                </p>
                <h3 className="text-lg font-bold text-foreground font-serif mt-1">
                  {award.title}
                </h3>
                <div className="flex items-start gap-3 mt-4 pt-4 border-t border-border/50">
                  <Quote className="text-primary/30 flex-shrink-0 mt-1" size={18} />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card */}
      <motion.div
        onClick={handleExpand}
        whileHover={{ y: -4 }}
        className="cursor-pointer rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg shadow-primary/5 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
      >
        {/* Top image strip */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
          <div className="absolute bottom-3 left-4">
            {award.icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <span className="pill-tag pill-tag-accent text-[10px] w-fit mb-2">{award.badge}</span>
          <p className="text-sm font-bold text-foreground leading-snug line-clamp-2">
            {award.title}
          </p>
          <p className="text-xs text-muted-foreground mt-1.5">
            {award.category}
          </p>
        </div>
      </motion.div>
    </>
  );
};
