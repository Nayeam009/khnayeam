import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import { OrganicBackground, GrowingElement } from "@/components/OrganicElements";
import profileImage from "@/assets/nayeam-profile.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <GrowingElement>
            <h1 className="text-5xl font-bold text-primary mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate agronomist dedicated to sustainable agriculture and innovative food systems
            </p>
          </GrowingElement>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <GrowingElement delay="0.3s">
            <Card className="lg:col-span-1">
              <CardHeader className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                  <img 
                    src={profileImage} 
                    alt="KH. Nayeam Ibna Nasir"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-primary">KH. Nayeam Ibna Nasir</CardTitle>
                <p className="text-muted-foreground">Agricultural Scientist & Entrepreneur</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-primary" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <GraduationCap size={18} className="text-primary" />
                    <span>BSc in Agriculture, GSTU</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar size={18} className="text-primary" />
                    <span>Graduated 2020</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </GrowingElement>

          {/* Bio and Career Objective */}
          <div className="lg:col-span-2 space-y-8">
            <GrowingElement delay="0.5s">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Career Objective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I would like to be part of an organization that will assist my professional growth and provide 
                    a challenging and rewarding career while allowing me to utilize my knowledge and skills in 
                    agricultural science, sustainable farming practices, and innovative food production systems.
                  </p>
                </CardContent>
              </Card>
            </GrowingElement>

            <GrowingElement delay="0.7s">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-growth">Educational Background</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        Bachelor of Science (Honours) in Agriculture
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        Gopalganj Science and Technology University, Gopalganj
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">Session: 2019-20</Badge>
                        <Badge variant="outline">CGPA: 3.65/4.00</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Specialized in crop science, soil management, and sustainable agriculture practices
                      </p>
                    </div>

                    <div className="border-l-4 border-growth pl-6">
                      <h3 className="text-xl font-semibold text-growth mb-2">
                        Higher Secondary School Certificate (HSC)
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        Notre Dame College Mymensingh
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">2019, Science Group</Badge>
                        <Badge variant="outline">GPA: 4.25/5.00</Badge>
                      </div>
                    </div>

                    <div className="border-l-4 border-accent pl-6">
                      <h3 className="text-xl font-semibold text-accent mb-2">
                        Secondary School Certificate (SSC)
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        Suti V. M. Pilot Model High School
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">2016, Science Group</Badge>
                        <Badge variant="outline">GPA: 5.00/5.00</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </GrowingElement>

            <GrowingElement delay="0.9s">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Core Competencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Agricultural Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Crop Science</Badge>
                        <Badge>Soil Management</Badge>
                        <Badge>Plant Nutrition</Badge>
                        <Badge>Sustainable Farming</Badge>
                        <Badge>Agricultural Research</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-growth mb-3">Business Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Entrepreneurship</Badge>
                        <Badge variant="secondary">Startup Development</Badge>
                        <Badge variant="secondary">Innovation Management</Badge>
                        <Badge variant="secondary">Team Leadership</Badge>
                        <Badge variant="secondary">Strategic Planning</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </GrowingElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;