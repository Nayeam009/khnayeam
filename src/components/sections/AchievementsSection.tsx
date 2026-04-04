import {
  Trophy, Mic, Lightbulb, FlaskConical,
  Star, Briefcase, Users,
} from "lucide-react";
import MotionCard from "@/components/MotionCard";
import { AwardCarousel, AwardCard, type AwardItem } from "@/components/ui/award-carousel";

const allAwards: AwardItem[] = [
  {
    title: "Agriculture Debating Club — Champion, Freshers Debate 3.0 & 4.0",
    category: "Debating",
    description: "Led the Agriculture Debating Club to back-to-back championship victories in the prestigious Freshers Debate tournaments at GSTU, showcasing strong argumentation and teamwork.",
    icon: <Trophy className="text-accent" size={20} />,
    badge: "Champion",
    bgImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "1st Runner-up — Intra-University Debate, LAW Debating Club, GSTU",
    category: "Debating",
    description: "Secured first runner-up position in the highly competitive Intra-University Debate Tournament organized by the LAW Debating Club at GSTU.",
    icon: <Star className="text-accent" size={20} />,
    badge: "Runner-up",
    bgImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Semi-Finalist — BMB Debating Club Intra-University Tournament",
    category: "Debating",
    description: "Reached the semi-finals of the Intra-University Debate Tournament organized by the BMB Debating Club, competing against top debaters.",
    icon: <Mic className="text-accent" size={20} />,
    badge: "Semi-Final",
    bgImage: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Runner-up — Environment Science & Disaster Management Club",
    category: "Debating",
    description: "Agriculture Debating Club achieved runner-up position in the debate tournament organized by the Environment Science & Disaster Management Club.",
    icon: <Star className="text-accent" size={20} />,
    badge: "Runner-up",
    bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Top 3 — UIHP Startup Founders Competition",
    category: "Startup & Entrepreneurship",
    description: "Ranked in the Top 3 of the UIHP Startup Founders Competition, demonstrating innovative business acumen and entrepreneurial vision.",
    icon: <Trophy className="text-accent" size={20} />,
    badge: "Top 3",
    bgImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Founder & CEO — Stock-X BD Ltd.",
    category: "Startup & Entrepreneurship",
    description: "Founded and led Stock-X BD Ltd., building a startup from the ground up with a focus on digital innovation and business strategy.",
    icon: <Briefcase className="text-accent" size={20} />,
    badge: "Founder",
    bgImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Advisor — Coco Coffee & Vetmedix Startups",
    category: "Startup & Entrepreneurship",
    description: "Served as a strategic advisor for multiple startups including Coco Coffee and Vetmedix, providing guidance on growth and operations.",
    icon: <Lightbulb className="text-accent" size={20} />,
    badge: "Advisor",
    bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Champion — Poster on Mushroom Production Technology, IAAS 2025",
    category: "Scientific & Leadership",
    description: "Won the championship in poster presentation on Mushroom Production Technology at IAAS Bangladesh 2025, demonstrating research excellence.",
    icon: <FlaskConical className="text-accent" size={20} />,
    badge: "Champion",
    bgImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "1st Runner-up — Poster Presentation, IAAS Bangladesh 2024",
    category: "Scientific & Leadership",
    description: "Achieved first runner-up in poster presentation at IAAS Bangladesh 2024 at GSTU, showcasing agricultural research findings.",
    icon: <FlaskConical className="text-accent" size={20} />,
    badge: "Runner-up",
    bgImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Vice President — GSTU Central Debating Society",
    category: "Scientific & Leadership",
    description: "Elected as Vice President of the GSTU Central Debating Society, leading organizational initiatives and mentoring new debaters.",
    icon: <Users className="text-accent" size={20} />,
    badge: "VP",
    bgImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "President — Agriculture Debating Club, GSTU",
    category: "Scientific & Leadership",
    description: "Served as President of the Agriculture Debating Club at GSTU, organizing tournaments and fostering a culture of intellectual discourse.",
    icon: <Users className="text-accent" size={20} />,
    badge: "President",
    bgImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=60",
  },
];

const AchievementsSection = () => {
  const cards = allAwards.map((award, index) => (
    <AwardCard
      key={index}
      award={award}
      index={index}
      backgroundImage={award.bgImage}
    />
  ));

  return (
    <section id="achievements" aria-label="Achievements and awards" className="py-20 md:py-28 section-padding bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto">
        <MotionCard>
          <div className="text-center mb-10">
            <span className="pill-tag pill-tag-primary mb-3"><Trophy size={12} /> Achievements</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground mt-3">
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              A collection of academic, leadership, and competitive achievements. Click any card to learn more.
            </p>
          </div>
        </MotionCard>

        <AwardCarousel items={cards} />
      </div>
    </section>
  );
};

export default AchievementsSection;
