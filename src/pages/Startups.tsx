import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Coffee, Heart, Lightbulb, ExternalLink, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import { OrganicBackground, GrowingElement } from "@/components/OrganicElements";

const Startups = () => {
  const mainStartup = {
    name: "Stock-X BD Ltd.",
    role: "Founder & CEO",
    duration: "8 months",
    description: "Founded and led a university-based startup under the University Innovation Hub Program (UIHP), GSTU. Oversaw product development, operations, and strategic planning while coordinating a cross-functional team and driving early-stage growth initiatives.",
    achievements: [
      "Ranked in Top 3 — UIHP Startup Founders Competition",
      "Successfully launched and operated for 8 months",
      "Led cross-functional team development",
      "Managed strategic planning and operations"
    ]
  };

  const advisoryRoles = [
    {
      name: "Coco Coffee",
      tagline: "Naturally Sweet, Powerfully Refreshing",
      description: "Premium, ready-to-drink beverage brand creating delicious chilled coffee naturally sweetened with pure honey, serving health-conscious consumers on the go.",
      features: [
        "100% Honey-Sweetened: No refined sugar or artificial sweeteners",
        "All-Natural Ingredients: Premium coffee beans, purified water, and pure honey", 
        "Healthy & Functional: Clean energy lift without sugar crash",
        "Convenient & Portable: Eco-friendly bottles for busy lifestyle"
      ],
      target: "Health-conscious millennials and Gen Z, students, fitness enthusiasts, and young professionals",
      icon: Coffee
    },
    {
      name: "Vetmedix", 
      tagline: "Your Pet's Wellness, Delivered",
      description: "Comprehensive veterinary care platform providing convenient, reliable, and affordable pet healthcare solutions through digital innovation and expert veterinary services.",
      features: [
        "Digital Health Records: Comprehensive pet health tracking",
        "Expert Consultation: Access to certified veterinarians",
        "Medicine Delivery: Convenient home delivery of pet medications",
        "Emergency Care: 24/7 emergency veterinary support"
      ],
      target: "Pet owners seeking convenient and comprehensive veterinary care solutions",
      icon: Heart
    },
    {
      name: "Bionex",
      tagline: "Bridging Biology and Innovation",
      description: "Biotechnology startup focused on developing sustainable biological solutions for agricultural and environmental challenges through cutting-edge research and innovation.",
      features: [
        "Biological Solutions: Eco-friendly agricultural innovations",
        "Research & Development: Advanced biotechnology applications",
        "Sustainable Practices: Environmentally conscious methodologies",
        "Agricultural Enhancement: Improved crop yields and soil health"
      ],
      target: "Agricultural businesses and environmentally conscious organizations",
      icon: Lightbulb
    },
    {
      name: "Aqualanse",
      tagline: "Pure Water, Pure Innovation",
      description: "Water technology company developing advanced filtration and purification systems to provide clean, safe drinking water through innovative and sustainable solutions.",
      features: [
        "Advanced Filtration: State-of-the-art purification technology",
        "Sustainable Solutions: Environmentally friendly water systems",
        "Quality Assurance: Rigorous water quality monitoring",
        "Accessible Design: User-friendly and affordable systems"
      ],
      target: "Communities and businesses requiring reliable water purification solutions",
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <GrowingElement>
            <h1 className="text-5xl font-bold text-primary mb-6">Startup Ventures</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entrepreneurial journey in building innovative startups and advising emerging companies across various industries
            </p>
          </GrowingElement>
        </div>

        {/* Main Startup */}
        <GrowingElement delay="0.3s">
          <Card className="mb-12 border-primary/30 bg-gradient-to-r from-primary/5 to-growth/5">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Building className="text-primary" size={32} />
                </div>
                <div>
                  <CardTitle className="text-3xl text-primary">{mainStartup.name}</CardTitle>
                  <p className="text-lg text-muted-foreground">{mainStartup.role} • {mainStartup.duration}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {mainStartup.description}
              </p>
              
              <h4 className="font-semibold text-primary mb-4">Key Achievements</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {mainStartup.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              <Badge className="bg-primary/10 text-primary border-primary/20">
                University Innovation Hub Program (UIHP), GSTU
              </Badge>
            </CardContent>
          </Card>
        </GrowingElement>

        {/* Advisory Roles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-growth mb-8">Advisory & Consulting Roles</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {advisoryRoles.map((startup, index) => (
              <GrowingElement key={startup.name} delay={`${0.5 + index * 0.2}s`}>
                <Card className="h-full hover:shadow-xl transition-all duration-500">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-growth/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <startup.icon className="text-growth" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-growth">{startup.name}</CardTitle>
                        <p className="text-sm text-muted-foreground italic">{startup.tagline}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {startup.description}
                    </p>
                    
                    <h4 className="font-semibold text-primary mb-3">Key Features</h4>
                    <ul className="space-y-2 mb-6">
                      {startup.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-growth rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mb-4">
                      <h4 className="font-semibold text-accent mb-2">Target Market</h4>
                      <p className="text-sm text-muted-foreground">{startup.target}</p>
                    </div>

                    <Button variant="outline" size="sm">
                      <Users size={16} className="mr-2" />
                      Advisory Role
                    </Button>
                  </CardContent>
                </Card>
              </GrowingElement>
            ))}
          </div>
        </div>

        {/* Entrepreneurship Philosophy */}
        <GrowingElement delay="1.5s">
          <Card className="bg-gradient-to-r from-accent/5 via-primary/5 to-growth/5">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-primary">Entrepreneurial Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="text-primary" size={32} />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Innovation First</h4>
                  <p className="text-sm text-muted-foreground">
                    Focusing on innovative solutions that address real-world problems with sustainable approaches
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-growth/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-growth" size={32} />
                  </div>
                  <h4 className="font-semibold text-growth mb-2">Collaborative Leadership</h4>
                  <p className="text-sm text-muted-foreground">
                    Building strong teams and fostering collaborative environments for maximum impact and growth
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-accent" size={32} />
                  </div>
                  <h4 className="font-semibold text-accent mb-2">Purpose Driven</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating ventures that generate positive impact while delivering value to stakeholders and society
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

export default Startups;