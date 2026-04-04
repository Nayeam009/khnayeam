import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";

const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ResearchSection = lazy(() => import("@/components/sections/ResearchSection"));
const ExperienceSection = lazy(() => import("@/components/sections/ExperienceSection"));
const AchievementsSection = lazy(() => import("@/components/sections/AchievementsSection"));
const PersonalInfoSection = lazy(() => import("@/components/sections/PersonalInfoSection"));
const ReferencesSection = lazy(() => import("@/components/sections/ReferencesSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));
const FooterSection = lazy(() => import("@/components/sections/FooterSection"));

const SectionFallback = () => (
  <div className="py-20 flex justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Home = () => {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowFab(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navigation />
        <main>
          <HeroSection />
          <StatsSection />
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
            <ResearchSection />
            <ExperienceSection />
            <AchievementsSection />
            <PersonalInfoSection />
            <ReferencesSection />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <FooterSection />
        </Suspense>

        <AnimatePresence>
          {showFab && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fab"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </TooltipProvider>
  );
};

export default Home;
