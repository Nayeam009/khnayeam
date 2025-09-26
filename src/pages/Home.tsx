import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Leaf, Droplet, Mountain, Wind } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { OrganicBackground, FloatingElement, GrowingElement } from "@/components/OrganicElements";
import heroBackground from "@/assets/agricultural-hero-bg.jpg";
import profileImage from "@/assets/nayeam-profile-new.jpg";
import soilElement from "@/assets/soil-element.jpg";
import plantGrowth from "@/assets/plant-growth.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <FloatingElement delay="0.5s">
            <div className="mb-8 mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-sm bg-white/5 hover:shadow-3xl transition-all duration-700 hover:scale-105">
              <img 
                src={profileImage} 
                alt="KH. Nayeam Ibna Nasir"
                className="w-full h-full object-cover object-center mix-blend-normal"
              />
            </div>
          </FloatingElement>
          
          <GrowingElement delay="1s">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              KH. Nayeam Ibna Nasir
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Agricultural Scientist & Entrepreneur
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-4xl mx-auto">
              Bridging the gap between traditional agriculture and modern technology through innovative research, sustainable practices, and entrepreneurial ventures in the agricultural sector.
            </p>
          </GrowingElement>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/about">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                Explore My Work <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating natural elements */}
        <FloatingElement delay="2s" className="absolute top-20 left-10 opacity-60">
          <Leaf className="text-white" size={40} />
        </FloatingElement>
        <FloatingElement delay="2.5s" className="absolute top-40 right-20 opacity-60">
          <Droplet className="text-white" size={35} />
        </FloatingElement>
        <FloatingElement delay="3s" className="absolute bottom-40 left-20 opacity-60">
          <Mountain className="text-white" size={45} />
        </FloatingElement>
        <FloatingElement delay="3.5s" className="absolute bottom-20 right-10 opacity-60">
          <Wind className="text-white" size={38} />
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
    </div>
  );
};

export default Home;