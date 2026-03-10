import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, Coffee, Heart, ArrowUpRight, Briefcase } from "lucide-react";
import Navigation from "@/components/Navigation";
import { OrganicBackground, GrowingElement } from "@/components/OrganicElements";

const Startups = () => {
  const portfolio = [
    {
      name: "Stock-X BD",
      url: "stockxbd.com",
      role: "Founder & CEO",
      duration: "1 year, 8 months",
      desc: "University-based startup under UIHP, GSTU. Developed UI/UX & Frontend for an LPG ERP platform. Oversaw product development, operations, and strategic planning.",
      tags: ["ERP", "UI/UX", "Frontend"],
      featured: true,
    },
    {
      name: "Vetmedix",
      url: "vetmedixbd.com",
      role: "Full-Stack Developer & Advisor",
      desc: "Built a full-stack pet-care platform with integrated e-commerce, veterinary clinic directory, doctor profiles, and appointment booking.",
      tags: ["Full-Stack", "E-commerce", "Healthcare"],
      featured: true,
    },
    {
      name: "Coco Coffee",
      url: "cococoffee.lovable.app",
      role: "Advisor & Developer",
      desc: "Launched an e-commerce marketplace for health products. Premium ready-to-drink beverages naturally sweetened with pure honey.",
      tags: ["E-commerce", "Health", "Marketplace"],
      featured: false,
    },
    {
      name: "SLI Policy Calculator",
      url: "slipolicy.vercel.app",
      role: "Developer",
      desc: "Engineered a custom Premium Calculator for Sonali Life Insurance to automate complex policy assessments and client portfolio management.",
      tags: ["FinTech", "Automation", "Insurance"],
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <GrowingElement delay="0.1s">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Startups & Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-3xl">
            Building products that <span className="gradient-text">solve real problems</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-16">
            From founding startups to advising emerging companies — a journey of building, shipping, and scaling digital products.
          </p>
        </GrowingElement>

        {/* Stats */}
        <GrowingElement delay="0.2s">
          <div className="grid grid-cols-3 gap-4 mb-16">
            {[
              { value: "5+", label: "Projects Shipped" },
              { value: "1.5yr+", label: "Startup Experience" },
              { value: "Top 3", label: "UIHP Competition" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl border border-border/50 bg-card">
                <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </GrowingElement>

        {/* Portfolio */}
        <div className="space-y-4">
          {portfolio.map((project, i) => (
            <GrowingElement key={project.name} delay={`${0.3 + i * 0.1}s`}>
              <a
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300 p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      {project.featured && (
                        <Badge className="text-[10px]">Featured</Badge>
                      )}
                    </div>
                    <p className="text-sm text-primary font-medium">
                      {project.role} {project.duration && `· ${project.duration}`}
                    </p>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-all group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0 mt-1" size={22} />
                </div>
              </a>
            </GrowingElement>
          ))}
        </div>

        {/* Advisory */}
        <GrowingElement delay="0.8s">
          <div className="mt-16 rounded-2xl border border-border/50 bg-card p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Advisory Roles</h3>
            <p className="text-muted-foreground mb-6">
              Beyond building, I advise early-stage startups on product strategy, tech decisions, and go-to-market execution.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Coco Coffee", "Vetmedix"].map((name) => (
                <div key={name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-sm">
                  <Briefcase size={14} className="text-primary" />
                  <span className="text-foreground font-medium">{name}</span>
                  <span className="text-muted-foreground">— Advisor</span>
                </div>
              ))}
            </div>
          </div>
        </GrowingElement>
      </div>
    </div>
  );
};

export default Startups;
