import { Badge } from "@/components/ui/badge";
import { Beaker, Sprout, Cpu, GraduationCap, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { OrganicBackground, GrowingElement } from "@/components/OrganicElements";

const Research = () => {
  const researchProjects = [
    {
      title: "Adaptation of Technology in Entrepreneurship",
      supervisor: "Md. Rahat Tuhin, Lecturer, Department of Marketing, GSTU",
      description: "Conducting research on the integration of modern technology into entrepreneurial ventures, focusing on agricultural innovation and digital transformation.",
      tags: ["AgTech", "Digital Innovation", "Entrepreneurship"],
      icon: Cpu,
      status: "Ongoing",
    },
    {
      title: "Developing 4-4-4 Super Food for Plants",
      supervisor: "Md. Mahfuzur Rahman, Lecturer, Department of Agriculture, GSTU",
      description: "Working on formulation and application methods for an organic plant nutrient solution that provides balanced nutrition to enhance plant growth and productivity.",
      tags: ["Plant Nutrition", "Organic Fertilizers", "Sustainable Agriculture"],
      icon: Sprout,
      status: "Ongoing",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <GrowingElement delay="0.1s">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Research & Projects</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 max-w-3xl">
            Pioneering research in agriculture & <span className="gradient-text">technology</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-16">
            Bridging traditional agricultural practices with modern scientific approaches to develop practical, sustainable solutions.
          </p>
        </GrowingElement>

        {/* Research Philosophy */}
        <GrowingElement delay="0.2s">
          <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Beaker className="text-primary" size={20} />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Research Philosophy</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My research focuses on developing practical, sustainable solutions that can be easily adopted by farmers while maintaining environmental integrity and improving crop productivity. I believe in bridging the gap between traditional agriculture and modern technology.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Sustainability", desc: "Eco-friendly solutions for farming" },
                { label: "Innovation", desc: "Cutting-edge tech in agriculture" },
                { label: "Impact", desc: "Real-world field applications" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-muted/50">
                  <p className="font-medium text-foreground text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </GrowingElement>

        {/* Projects */}
        <GrowingElement delay="0.3s">
          <h2 className="text-2xl font-bold text-foreground mb-8">Current Research Projects</h2>
        </GrowingElement>

        <div className="space-y-6">
          {researchProjects.map((project, index) => (
            <GrowingElement key={project.title} delay={`${0.4 + index * 0.15}s`}>
              <div className="rounded-2xl border border-border/50 bg-card p-8 hover-lift group">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <project.icon className="text-primary" size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                      <Badge className="flex-shrink-0">{project.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Supervisor:</span> {project.supervisor}
                    </p>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GrowingElement>
          ))}
        </div>

        {/* UIHP */}
        <GrowingElement delay="0.7s">
          <div className="rounded-2xl border border-border/50 bg-card p-8 mt-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <GraduationCap className="text-accent" size={20} />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Entrepreneurship Training</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Completed the University Innovation Hub Program (UIHP) at GSTU — an intensive entrepreneurship training program focused on innovation, startup development, and business strategy. This program led to founding Stock-X BD Ltd. as a university startup project.
            </p>
          </div>
        </GrowingElement>
      </div>
    </div>
  );
};

export default Research;
