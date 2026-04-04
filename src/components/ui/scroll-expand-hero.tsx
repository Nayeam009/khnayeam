import {
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollExpandHeroProps {
  mediaSrc: string;
  bgImageSrc: string;
  title?: string;
  subtitle?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandHero = ({
  mediaSrc,
  bgImageSrc,
  title,
  subtitle,
  scrollToExpand = 'Scroll to Explore',
  textBlend = true,
  children,
}: ScrollExpandHeroProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const expandedRef = useRef(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Keep refs in sync for event handlers
  useEffect(() => {
    progressRef.current = scrollProgress;
  }, [scrollProgress]);
  useEffect(() => {
    expandedRef.current = mediaFullyExpanded;
  }, [mediaFullyExpanded]);

  useEffect(() => {
    const updateProgress = (delta: number) => {
      const current = progressRef.current;
      const next = Math.min(Math.max(current + delta, 0), 1);
      setScrollProgress(next);

      if (next >= 1) {
        setMediaFullyExpanded(true);
        setShowContent(true);
      } else if (next < 0.75) {
        setShowContent(false);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (expandedRef.current && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setShowContent(false);
        e.preventDefault();
      } else if (!expandedRef.current) {
        e.preventDefault();
        updateProgress(e.deltaY * 0.0015);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const startY = touchStartY;
      if (!startY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = startY - touchY;

      if (expandedRef.current && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setShowContent(false);
        e.preventDefault();
      } else if (!expandedRef.current) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.01 : 0.007;
        updateProgress(deltaY * factor);
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    const handleScroll = () => {
      if (!expandedRef.current) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStartY]);

  // Responsive media dimensions
  const mediaWidth = isMobile
    ? 240 + scrollProgress * 720
    : 320 + scrollProgress * 1200;
  const mediaHeight = isMobile
    ? 320 + scrollProgress * 300
    : 420 + scrollProgress * 380;
  const textTranslateX = scrollProgress * (isMobile ? 200 : 160);
  const borderRadius = Math.max(24 - scrollProgress * 24, 0);
  const overlayOpacity = Math.min(scrollProgress * 0.6, 0.5);

  const firstWord = title ? title.split(' ').slice(0, 2).join(' ') : '';
  const restOfTitle = title ? title.split(' ').slice(2).join(' ') : '';

  return (
    <div ref={sectionRef}>
      <section className="relative">
        <div className={`${mediaFullyExpanded ? '' : 'h-screen'} overflow-hidden`}>
          <div className={`${mediaFullyExpanded ? '' : 'fixed inset-0 z-30'} flex flex-col`}>

            {/* Background layer */}
            <div className="absolute inset-0 -z-10">
              <img
                src={bgImageSrc}
                alt=""
                className="h-full w-full object-cover will-change-transform"
                loading="eager"
                style={{
                  transform: `scale(${1 + scrollProgress * 0.05})`,
                  transition: 'transform 150ms linear',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.4)_100%)]" />
            </div>

            {/* Main centered layout */}
            <div className="relative flex h-screen w-full flex-col items-center justify-center px-4">

              {/* Profile image container with scroll-driven expansion */}
              <div className="relative flex items-center justify-center">
                <div
                  className="overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] will-change-transform"
                  style={{
                    width: `${mediaWidth}px`,
                    height: `${mediaHeight}px`,
                    maxWidth: '96vw',
                    maxHeight: '92vh',
                    borderRadius: `${borderRadius}px`,
                    transition: 'width 80ms linear, height 80ms linear, border-radius 80ms linear',
                  }}
                >
                  <img
                    src={mediaSrc}
                    alt={title || 'Profile'}
                    className="h-full w-full object-cover object-[50%_15%]"
                    loading="eager"
                  />
                  {/* Gradient overlay on image */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
                    style={{ opacity: 0.4 + overlayOpacity }}
                  />
                </div>

                {/* Bottom overlay hints (fade out as media expands) */}
                <AnimatePresence>
                  {scrollProgress < 0.7 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pointer-events-none absolute inset-x-0 bottom-4 flex flex-col items-center gap-2 px-4 sm:bottom-6 sm:flex-row sm:justify-between sm:px-8"
                    >
                      {subtitle && (
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase backdrop-blur-md sm:text-xs">
                          {subtitle}
                        </span>
                      )}
                      <div className="flex items-center gap-1.5 text-[10px] font-medium tracking-[0.2em] text-white/50 uppercase sm:text-xs">
                        <span>{scrollToExpand}</span>
                        <motion.div
                          animate={{ y: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ChevronDown size={14} className="text-white/50" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Title text with mix-blend-difference */}
              <motion.h1
                className={`pointer-events-none absolute select-none font-serif font-bold leading-[0.9] tracking-[-0.03em] ${
                  textBlend ? 'text-white mix-blend-difference' : 'text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
                }`}
                style={{
                  fontSize: isMobile ? 'clamp(2.2rem, 12vw, 3.5rem)' : 'clamp(3rem, 7vw, 6rem)',
                  transform: `translateX(-${textTranslateX}%)`,
                  transition: 'transform 80ms linear',
                }}
              >
                <span className="block">{firstWord}</span>
                <span className="block">{restOfTitle}</span>
              </motion.h1>
            </div>

            {/* Revealed content after full expansion */}
            <motion.div
              className="w-full bg-gradient-to-b from-black/90 via-black/80 to-black/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-8 md:px-16 lg:py-16">
                {children}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandHero;
