import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandHeroProps {
  mediaSrc: string;
  bgImageSrc: string;
  title?: string;
  subtitle?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

const ScrollExpandHero = ({
  mediaSrc,
  bgImageSrc,
  title,
  subtitle,
  scrollToExpand = 'Scroll to Expand',
  children,
}: ScrollExpandHeroProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e: globalThis.WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const delta = e.deltaY * 0.0009;
        const next = Math.min(Math.max(scrollProgress + delta, 0), 1);
        setScrollProgress(next);
        if (next >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: globalThis.TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const next = Math.min(Math.max(scrollProgress + deltaY * factor, 0), 1);
        setScrollProgress(next);
        if (next >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    const handleScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
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
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div ref={sectionRef}>
      <section className="relative">
        <div
          className={`${mediaFullyExpanded ? '' : 'h-screen'} overflow-hidden`}
        >
          <div
            className={`${
              mediaFullyExpanded ? '' : 'fixed inset-0'
            } flex flex-col`}
          >
            {/* Background */}
            <div className="absolute inset-0 -z-10">
              <img
                src={bgImageSrc}
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Main layout */}
            <div className="relative flex h-screen w-full flex-col items-center justify-center px-4">
              {/* Media container */}
              <div className="relative flex items-center justify-center">
                <div
                  className="overflow-hidden rounded-3xl shadow-2xl transition-all duration-100 ease-linear"
                  style={{
                    width: `${mediaWidth}px`,
                    height: `${mediaHeight}px`,
                    maxWidth: '95vw',
                    maxHeight: '90vh',
                  }}
                >
                  <img
                    src={mediaSrc}
                    alt={title || 'Profile'}
                    className="h-full w-full object-cover object-[50%_18%]"
                    loading="eager"
                  />
                </div>

                {/* Overlay info */}
                <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-between px-6">
                  {subtitle && (
                    <motion.p
                      className="text-xs font-medium tracking-widest text-white/70 uppercase"
                      animate={{ opacity: scrollProgress < 0.8 ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {subtitle}
                    </motion.p>
                  )}
                  {scrollToExpand && (
                    <motion.p
                      className="text-xs font-medium tracking-widest text-white/70 uppercase"
                      animate={{ opacity: scrollProgress < 0.8 ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {scrollToExpand}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Title text */}
              <motion.h2
                className="pointer-events-none absolute font-serif text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95] text-white mix-blend-difference"
                style={{
                  transform: `translateX(-${textTranslateX}%)`,
                }}
              >
                <span className="block">{firstWord}</span>
                <span className="block">{restOfTitle}</span>
              </motion.h2>
            </div>

            {/* Expanded content */}
            <motion.section
              className="flex w-full flex-col px-8 py-10 md:px-16 lg:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandHero;
