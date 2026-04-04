import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import PersonalInfoSection from "@/components/sections/PersonalInfoSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

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
          <AboutSection />
          <ResearchSection />
          <ExperienceSection />
          <AchievementsSection />
          <PersonalInfoSection />
          <ReferencesSection />
          <ContactSection />
        </main>
        <FooterSection />

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
