import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Leaf, Droplet, Mountain, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { OrganicBackground, FloatingElement, GrowingElement } from "@/components/OrganicElements";
import heroBackground from "@/assets/agricultural-hero-bg.jpg";
import profileImage from "@/assets/nayeam-profile-latest.jpg";
import soilElement from "@/assets/soil-element.jpg";
import plantGrowth from "@/assets/plant-growth.jpg";
const Home = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 opacity-10">
          <img src={heroBackground} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <GrowingElement delay="0.3s">
              <div className="space-y-6">
                <div className="inline-block">
                  
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="text-foreground">Hey There</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-growth to-accent bg-clip-text text-transparent">
                    I'm Nayeam
                  </span>
                </h1>
                
                <div className="space-y-3">
                  <p className="text-2xl md:text-3xl font-semibold text-primary">
                    Agricultural Scientist
                  </p>
                  <p className="text-xl md:text-2xl text-muted-foreground">
                    Entrepreneur & Innovator
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Bridging traditional agriculture with modern technology through innovative research and sustainable entrepreneurial ventures.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/about">
                    <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Explore My Work <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300">
                      Get In Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </GrowingElement>
            
            {/* Right Content - Profile with Artistic Elements */}
            <FloatingElement delay="0.5s">
              <div className="relative flex justify-center lg:justify-end">
                {/* Artistic brush stroke elements */}
                <div className="absolute inset-0 -m-8">
                  {/* Main brush stroke - agricultural green */}
                  <div className="absolute top-1/4 right-8 w-72 h-80 bg-gradient-to-br from-growth/40 via-primary/30 to-accent/20 transform rotate-12 rounded-[40%_60%_70%_30%] blur-sm animate-pulse"></div>
                  
                  {/* Secondary brush stroke */}
                  <div className="absolute top-1/3 right-16 w-64 h-72 bg-gradient-to-tl from-primary/30 via-growth/25 to-soil/15 transform -rotate-6 rounded-[60%_40%_50%_60%] blur-md"></div>
                  
                  {/* Accent stroke */}
                  <div className="absolute top-1/2 right-4 w-48 h-56 bg-gradient-to-r from-accent/25 to-growth/20 transform rotate-3 rounded-[50%_50%_60%_40%] blur-lg"></div>
                  
                  {/* Small accent elements */}
                  <div className="absolute top-20 right-32 w-16 h-16 bg-primary/20 rounded-full blur-md"></div>
                  <div className="absolute bottom-32 right-48 w-12 h-12 bg-growth/30 rounded-full blur-sm animate-bounce"></div>
                </div>
                
                {/* Profile Image Container */}
                <div className="relative z-10">
                  <div className="relative w-80 h-96 md:w-96 md:h-[28rem]">
                    {/* Decorative border elements */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-growth/20 to-accent/20 rounded-3xl blur-xl"></div>
                    
                    {/* Main image container */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-background/50 backdrop-blur-sm transform transition-all duration-700 hover:scale-105 hover:shadow-3xl hover:border-primary/30">
                      <img src={profileImage} alt="KH. Nayeam Ibna Nasir - Agricultural Scientist" className="w-full h-full object-cover object-center" />
                      
                      {/* Gradient overlay for better integration */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent mix-blend-soft-light"></div>
                    </div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-growth rounded-full blur-md opacity-60 animate-pulse"></div>
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-accent to-soil rounded-full blur-md opacity-50"></div>
                  </div>
                </div>
              </div>
            </FloatingElement>
          </div>
        </div>
        
        {/* Floating natural elements */}
        <FloatingElement delay="2s" className="absolute top-20 left-10 opacity-30 hidden xl:block">
          <Leaf className="text-growth" size={40} />
        </FloatingElement>
        <FloatingElement delay="2.5s" className="absolute top-40 right-20 opacity-30 hidden xl:block">
          <Droplet className="text-primary" size={35} />
        </FloatingElement>
        <FloatingElement delay="3s" className="absolute bottom-40 left-20 opacity-30 hidden xl:block">
          <Mountain className="text-soil" size={45} />
        </FloatingElement>
        <FloatingElement delay="3.5s" className="absolute bottom-20 right-10 opacity-30 hidden xl:block">
          <Wind className="text-accent" size={38} />
        </FloatingElement>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">Agricultural Innovation</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining scientific research with entrepreneurial vision to create sustainable solutions for modern agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <GrowingElement delay="0.2s">
            <Card className="h-full hover:shadow-xl transition-all duration-500 border-primary/20 hover:border-primary/40">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <img src={soilElement} alt="Soil Research" className="w-12 h-12 rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Research & Development</h3>
                <p className="text-muted-foreground">
                  Developing innovative plant nutrition solutions and sustainable agricultural practices
                </p>
              </CardContent>
            </Card>
          </GrowingElement>

          <GrowingElement delay="0.4s">
            <Card className="h-full hover:shadow-xl transition-all duration-500 border-growth/20 hover:border-growth/40">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-growth/10 rounded-full flex items-center justify-center">
                  <img src={plantGrowth} alt="Plant Growth" className="w-12 h-12 rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-growth mb-4">Entrepreneurship</h3>
                <p className="text-muted-foreground">
                  Founded multiple startups focusing on agricultural innovation and sustainable solutions
                </p>
              </CardContent>
            </Card>
          </GrowingElement>

          <GrowingElement delay="0.6s">
            <Card className="h-full hover:shadow-xl transition-all duration-500 border-accent/20 hover:border-accent/40">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <Leaf className="text-accent" size={30} />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-4">Education</h3>
                <p className="text-muted-foreground">
                  BSc in Agriculture from Gopalganj Science and Technology University with distinction
                </p>
              </CardContent>
            </Card>
          </GrowingElement>

          <GrowingElement delay="0.8s">
            <Card className="h-full hover:shadow-xl transition-all duration-500 border-soil/20 hover:border-soil/40">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-soil/10 rounded-full flex items-center justify-center">
                  <Mountain className="text-soil" size={30} />
                </div>
                <h3 className="text-xl font-semibold text-soil mb-4">Leadership</h3>
                <p className="text-muted-foreground">
                  Recognized debater and startup founder with multiple awards and achievements
                </p>
              </CardContent>
            </Card>
          </GrowingElement>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 via-growth/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Let's Cultivate Innovation Together</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Interested in collaborating on agricultural research or sustainable farming solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="shadow-lg">
                Start a Conversation <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="shadow-lg">
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;