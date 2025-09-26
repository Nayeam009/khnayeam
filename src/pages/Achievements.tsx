import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, MessageSquare, Lightbulb, Award, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import { OrganicBackground, GrowingElement } from "@/components/OrganicElements";

const Achievements = () => {
  const debatingAchievements = [
    {
      title: "1st Runner-up",
      event: "Intra-University Debate Tournament",
      organizer: "LAW Debating Club, GSTU",
      year: "2023",
      icon: Trophy,
      color: "primary"
    },
    {
      title: "Semi-Finalist",
      event: "Intra-University Debate Tournament", 
      organizer: "BMB Debating Club",
      year: "2023",
      icon: MessageSquare,
      color: "growth"
    },
    {
      title: "Champion",
      event: "Freshers Debate 3.0 & 4.0",
      organizer: "GSTU Central Debating Society",
      year: "2022-2023",
      icon: Award,
      color: "accent"
    },
    {
      title: "1st Runner-up",
      event: "ESD Debate Tournament 2025",
      organizer: "Environment Science Club",
      year: "2025",
      icon: Star,
      color: "soil"
    }
  ];

  const startupAchievements = [
    {
      title: "Top 3 Ranking",
      event: "UIHP Startup Founders Competition",
      organizer: "University Innovation Hub Program, GSTU",
      description: "Recognized for innovative startup concept and exceptional business plan presentation",
      year: "2023",
      icon: Lightbulb,
      color: "primary"
    },
    {
      title: "Successful Founder & CEO",
      event: "Stock-X BD Ltd.",
      organizer: "GSTU Startup Project",
      description: "Successfully founded and operated a university-based startup for 8 months",
      year: "2023",
      icon: Trophy,
      color: "growth"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "border-primary/30 bg-primary/5 text-primary",
      growth: "border-growth/30 bg-growth/5 text-growth", 
      accent: "border-accent/30 bg-accent/5 text-accent",
      soil: "border-soil/30 bg-soil/5 text-soil"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <GrowingElement>
            <h1 className="text-5xl font-bold text-primary mb-6">Achievements</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition for excellence in debating, entrepreneurship, and academic pursuits
            </p>
          </GrowingElement>
        </div>

        {/* Achievement Overview */}
        <GrowingElement delay="0.3s">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6">
                <Trophy className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-2xl font-bold text-primary">8+</h3>
                <p className="text-muted-foreground">Awards Won</p>
              </CardContent>
            </Card>
            <Card className="text-center border-growth/20 hover:border-growth/40 transition-all duration-300">
              <CardContent className="p-6">
                <MessageSquare className="text-growth mx-auto mb-4" size={40} />
                <h3 className="text-2xl font-bold text-growth">4</h3>
                <p className="text-muted-foreground">Debate Championships</p>
              </CardContent>
            </Card>
            <Card className="text-center border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-6">
                <Lightbulb className="text-accent mx-auto mb-4" size={40} />
                <h3 className="text-2xl font-bold text-accent">5+</h3>
                <p className="text-muted-foreground">Startup Ventures</p>
              </CardContent>
            </Card>
            <Card className="text-center border-soil/20 hover:border-soil/40 transition-all duration-300">
              <CardContent className="p-6">
                <Award className="text-soil mx-auto mb-4" size={40} />
                <h3 className="text-2xl font-bold text-soil">3.65</h3>
                <p className="text-muted-foreground">CGPA Achievement</p>
              </CardContent>
            </Card>
          </div>
        </GrowingElement>

        {/* Debating Achievements */}
        <div className="mb-16">
          <GrowingElement delay="0.5s">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <MessageSquare size={32} />
              Debating Excellence
            </h2>
          </GrowingElement>
          
          <div className="grid md:grid-cols-2 gap-6">
            {debatingAchievements.map((achievement, index) => (
              <GrowingElement key={index} delay={`${0.7 + index * 0.1}s`}>
                <Card className={`hover:shadow-xl transition-all duration-500 ${getColorClasses(achievement.color)}`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(achievement.color)}`}>
                        <achievement.icon size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{achievement.title}</CardTitle>
                        <p className="text-sm opacity-80">{achievement.year}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2">{achievement.event}</h4>
                    <p className="text-sm opacity-80 mb-4">{achievement.organizer}</p>
                    <Badge variant="secondary">{achievement.organizer.split(',')[0]}</Badge>
                  </CardContent>
                </Card>
              </GrowingElement>
            ))}
          </div>
        </div>

        {/* Startup & Innovation Achievements */}
        <div className="mb-16">
          <GrowingElement delay="1.0s">
            <h2 className="text-3xl font-bold text-growth mb-8 flex items-center gap-3">
              <Lightbulb size={32} />
              Startup & Innovation
            </h2>
          </GrowingElement>

          <div className="space-y-6">
            {startupAchievements.map((achievement, index) => (
              <GrowingElement key={index} delay={`${1.2 + index * 0.2}s`}>
                <Card className={`hover:shadow-xl transition-all duration-500 ${getColorClasses(achievement.color)}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${getColorClasses(achievement.color)}`}>
                        <achievement.icon size={32} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{achievement.title}</CardTitle>
                        <p className="text-lg opacity-90 mb-2">{achievement.event}</p>
                        <p className="text-sm opacity-80">{achievement.organizer} • {achievement.year}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="opacity-90 leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </GrowingElement>
            ))}
          </div>
        </div>

        {/* Skills & Recognition */}
        <GrowingElement delay="1.6s">
          <Card className="bg-gradient-to-r from-primary/5 via-growth/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-primary">Core Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <MessageSquare className="text-primary mx-auto mb-4" size={40} />
                  <h4 className="font-semibold text-primary mb-3">Communication Excellence</h4>
                  <p className="text-muted-foreground">
                    Proven track record in competitive debating with multiple championship wins and runner-up positions
                  </p>
                </div>
                <div>
                  <Lightbulb className="text-growth mx-auto mb-4" size={40} />
                  <h4 className="font-semibold text-growth mb-3">Entrepreneurial Vision</h4>
                  <p className="text-muted-foreground">
                    Successfully founded and managed startup ventures, ranking in top competitions
                  </p>
                </div>
                <div>
                  <Award className="text-accent mx-auto mb-4" size={40} />
                  <h4 className="font-semibold text-accent mb-3">Academic Excellence</h4>
                  <p className="text-muted-foreground">
                    Consistent high performance throughout academic career with distinction in agricultural science
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </GrowingElement>
      </div>
    </div>
  );
};

export default Achievements;