import {
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollExpandHeroProps {
  mediaSrc: string;
  bgImageSrc: string;
  titleLine1?: string;
  titleLine2?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandHero = ({
  mediaSrc,
  bgImageSrc,
  titleLine1,
  titleLine2,
  textBlend = true,
  children,
}: ScrollExpandHeroProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const touchStartRef = useRef(0);
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
      touchStartRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const startY = touchStartRef.current;
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
        touchStartRef.current = touchY;
      }
    };

    const handleTouchEnd = () => { touchStartRef.current = 0; };

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

  // Responsive media dimensions (viewport-relative)
  const initialW = isMobile ? window.innerWidth * 0.55 : window.innerWidth * 0.22;
  const initialH = isMobile ? window.innerHeight * 0.45 : window.innerHeight * 0.55;
  const mediaWidth = initialW + scrollProgress * (window.innerWidth - initialW);
  const mediaHeight = initialH + scrollProgress * (window.innerHeight - initialH);
  const borderRadius = Math.max(20 - scrollProgress * 20, 0);
  const overlayOpacity = Math.min(scrollProgress * 0.5, 0.4);

  // Text split animation: line1 goes LEFT, line2 goes RIGHT
  const line1TranslateX = scrollProgress * (isMobile ? -120 : -200);
  const line2TranslateX = scrollProgress * (isMobile ? 120 : 200);
  const textOpacity = Math.max(1 - scrollProgress * 1.5, 0);

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
                decoding="async"
                fetchPriority="high"
                style={{
                  transform: `scale(${1 + scrollProgress * 0.08})`,
                  transition: 'transform 150ms linear',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            {/* Main centered layout */}
            <div className="relative flex h-screen w-full flex-col items-center justify-center px-4 pt-16 sm:pt-20">

              {/* Profile image container */}
              <div className="relative flex items-center justify-center">
                <div
                  className="overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] will-change-transform"
                  style={{
                    width: `${Math.min(mediaWidth, window.innerWidth)}px`,
                    height: `${Math.min(mediaHeight, window.innerHeight)}px`,
                    maxWidth: '98vw',
                    maxHeight: '95vh',
                    borderRadius: `${borderRadius}px`,
                    transition: 'width 80ms linear, height 80ms linear, border-radius 80ms linear',
                  }}
                >
                  <img
                    src={mediaSrc}
                    alt="Profile"
                    className="h-full w-full object-cover object-[50%_20%]"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                  {/* Gradient overlay on image */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"
                    style={{ opacity: 0.3 + overlayOpacity }}
                  />
                </div>
              </div>

              {/* Title text below image — splits on scroll */}
              <div className="mt-4 sm:mt-6 min-h-0 flex flex-col items-center overflow-hidden">
                {titleLine1 && (
                  <motion.span
                    className={`block font-serif font-bold leading-[1] tracking-[-0.02em] ${
                      textBlend ? 'text-white mix-blend-difference' : 'text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
                    }`}
                    style={{
                      fontSize: isMobile ? 'clamp(1.5rem, 7vw, 2.2rem)' : 'clamp(2.5rem, 4vw, 4rem)',
                      transform: `translateX(${line1TranslateX}%)`,
                      opacity: textOpacity,
                      transition: 'transform 100ms linear, opacity 100ms linear',
                    }}
                  >
                    {titleLine1}
                  </motion.span>
                )}
                {titleLine2 && (
                  <motion.span
                    className={`block font-serif font-bold leading-[1] tracking-[-0.02em] ${
                      textBlend ? 'text-white mix-blend-difference' : 'text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
                    }`}
                    style={{
                      fontSize: isMobile ? 'clamp(1.5rem, 7vw, 2.2rem)' : 'clamp(2.5rem, 4vw, 4rem)',
                      transform: `translateX(${line2TranslateX}%)`,
                      opacity: textOpacity,
                      transition: 'transform 100ms linear, opacity 100ms linear',
                    }}
                  >
                    {titleLine2}
                  </motion.span>
                )}
              </div>
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
