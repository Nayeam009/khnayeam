import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Beaker, Leaf, Users, Target, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import { OrganicBackground, GrowingElement } from "@/components/OrganicElements";
import soilElement from "@/assets/soil-element.jpg";
import plantGrowth from "@/assets/plant-growth.jpg";

const Research = () => {
  const researchProjects = [
    {
      id: 1,
      title: "Developing 4-4-4 Super Food for Plants",
      supervisor: "Md. Mahfuzur Rahman, Lecturer, Department of Agriculture, GSTU",
      description: "Working on formulation and application methods for an organic plant nutrient solution that provides balanced nutrition to enhance plant growth and productivity.",
      focus: ["Plant Nutrition", "Organic Fertilizers", "Sustainable Agriculture"],
      status: "Ongoing",
      icon: plantGrowth,
    },
    {
      id: 2,
      title: "Adaptation of Technology in Entrepreneurship",
      supervisor: "Md. Rahat Tuhin, Lecturer, Department of Marketing, GSTU",
      description: "Conducting research on the integration of modern technology into entrepreneurial ventures, focusing on agricultural innovation and digital transformation in farming.",
      focus: ["AgTech", "Digital Innovation", "Entrepreneurship", "Modern Agriculture"],
      status: "Ongoing",
      icon: soilElement,
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
            <h1 className="text-5xl font-bold text-primary mb-6">Research & Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering research in agricultural science, sustainable farming practices, and innovative plant nutrition solutions
            </p>
          </GrowingElement>
        </div>

        {/* Research Overview */}
        <GrowingElement delay="0.3s">
          <Card className="mb-12 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl text-primary flex items-center gap-3">
                <Beaker className="text-primary" size={32} />
                Research Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My research focuses on bridging the gap between traditional agricultural practices and modern scientific approaches. 
                I believe in developing practical, sustainable solutions that can be easily adopted by farmers while maintaining 
                environmental integrity and improving crop productivity.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <Leaf className="text-primary mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-primary">Sustainability</h4>
                  <p className="text-sm text-muted-foreground">Eco-friendly solutions</p>
                </div>
                <div className="text-center p-4 bg-growth/5 rounded-lg">
                  <Target className="text-growth mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-growth">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Cutting-edge approaches</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Users className="text-accent mx-auto mb-2" size={24} />
                  <h4 className="font-semibold text-accent">Impact</h4>
                  <p className="text-sm text-muted-foreground">Real-world applications</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </GrowingElement>

        {/* Current Research Projects */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-growth mb-8">Current Research Projects</h2>
          
          {researchProjects.map((project, index) => (
            <GrowingElement key={project.id} delay={`${0.5 + index * 0.2}s`}>
              <Card className="hover:shadow-xl transition-all duration-500">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-primary/10 flex items-center justify-center">
                      <img 
                        src={project.icon} 
                        alt={project.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-primary mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground mb-3">
                        <strong>Supervisor:</strong> {project.supervisor}
                      </p>
                      <Badge variant={project.status === 'Ongoing' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Research Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.focus.map((area, idx) => (
                        <Badge key={idx} variant="outline">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <ExternalLink size={16} className="mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </GrowingElement>
          ))}
        </div>

        {/* Research Impact */}
        <GrowingElement delay="1.2s">
          <Card className="mt-12 bg-gradient-to-r from-primary/5 via-growth/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-primary">Research Impact & Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-growth mb-4">Current Achievements</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed organic nutrient formulations showing 25% improvement in plant growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-growth rounded-full mt-2 flex-shrink-0"></div>
                      <span>Integrated modern technology solutions in agricultural entrepreneurship models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Collaborated with interdisciplinary teams on sustainable farming practices</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-accent mb-4">Future Objectives</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Scale organic fertilizer solutions for commercial application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-growth rounded-full mt-2 flex-shrink-0"></div>
                      <span>Develop digital platforms for precision agriculture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Publish findings in peer-reviewed agricultural journals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </GrowingElement>
      </div>
    </div>
  );
};

export default Research;