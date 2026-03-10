import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Code, Sprout, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { OrganicBackground, GrowingElement } from "@/components/OrganicElements";
import profileImage from "@/assets/nayeam-profile-latest.jpg";

const Home = () => {
  const highlights = [
    { icon: Code, label: "Full-Stack Dev", desc: "Web apps & UI/UX" },
    { icon: Sprout, label: "Agriculture", desc: "BSc Agriculture, GSTU" },
    { icon: Briefcase, label: "Startups", desc: "Founder, Stock-X BD" },
    { icon: Award, label: "Leader", desc: "VP, GSTU Debating" },
  ];

  const projects = [
    { name: "Stock-X BD", url: "stockxbd.com", desc: "LPG ERP Platform — UI/UX & Frontend" },
    { name: "Vetmedix", url: "vetmedixbd.com", desc: "Full-stack pet-care & e-commerce platform" },
    { name: "Coco Coffee", url: "cococoffee.lovable.app", desc: "E-commerce marketplace for health products" },
    { name: "SLI Policy", url: "slipolicy.vercel.app", desc: "Premium Calculator for Sonali Life Insurance" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <GrowingElement delay="0.1s">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Open to opportunities
                </div>
              </GrowingElement>

              <GrowingElement delay="0.2s">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="text-foreground">Hi, I'm</span>
                  <br />
                  <span className="gradient-text">Nayeam</span>
                </h1>
              </GrowingElement>

              <GrowingElement delay="0.35s">
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  B.Sc. Agriculture graduate & Full-Stack Developer bridging technical innovation with business strategy. Building scalable digital solutions for forward-thinking organizations.
                </p>
              </GrowingElement>

              <GrowingElement delay="0.5s">
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link to="/about">
                    <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                      View My Work
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Button>
                  </Link>
                  <a href="/cv-kh-nayeam-ibna-nasir.pdf" download>
                    <Button size="lg" variant="outline" className="rounded-full">
                      Download CV
                    </Button>
                  </a>
                </div>
              </GrowingElement>
            </div>

            {/* Profile */}
            <GrowingElement delay="0.4s">
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Decorative rings */}
                  <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 p-[2px]">
                    <div className="w-full h-full rounded-3xl bg-background" />
                  </div>
                  
                  <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={profileImage}
                      alt="KH. Nayeam Ibna Nasir"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 shadow-lg">
                    <p className="text-xs text-muted-foreground">CGPA</p>
                    <p className="text-xl font-bold gradient-text">3.59</p>
                  </div>
                  <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-lg">
                    <p className="text-xs text-muted-foreground">Projects</p>
                    <p className="text-xl font-bold gradient-text">5+</p>
                  </div>
                </div>
              </div>
            </GrowingElement>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="py-16 px-6 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <GrowingElement key={item.label} delay={`${0.1 + i * 0.1}s`}>
                <div className="flex items-center gap-4 p-4 rounded-2xl hover-lift cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </GrowingElement>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <GrowingElement delay="0.1s">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Portfolio</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
              </div>
              <Link to="/startups" className="text-sm text-primary font-medium hover:underline hidden md:block">
                View all →
              </Link>
            </div>
          </GrowingElement>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <GrowingElement key={project.name} delay={`${0.2 + i * 0.1}s`}>
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.desc}</p>
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-all group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
                </a>
              </GrowingElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <GrowingElement delay="0.1s">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-accent p-12 md:p-16 text-center">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Let's Build Something Together
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Whether it's agricultural innovation, tech startups, or full-stack development — I'm ready to collaborate.
                </p>
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="rounded-full shadow-lg">
                    Get In Touch <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </GrowingElement>
        </div>
      </section>
    </div>
  );
};

export default Home;
