import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin, Calendar, Download, Mail, Phone, Code, Globe, Pen } from "lucide-react";
import Navigation from "@/components/Navigation";
import { OrganicBackground, GrowingElement } from "@/components/OrganicElements";
import profileImage from "@/assets/nayeam-profile.jpg";

const About = () => {
  const skills = [
    { category: "Development", items: ["Full-Stack Web Dev", "UI/UX Design (Figma)", "Frontend/Backend Integration"] },
    { category: "Tools & Languages", items: ["MS Office (Expert)", "English (Fluent)", "Bengali (Native)"] },
    { category: "Leadership", items: ["Organizing & Leadership", "Presentation Skills", "Strategic Planning"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <OrganicBackground />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Header */}
        <GrowingElement delay="0.1s">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">About Me</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl">
            Agriculture graduate, full-stack developer & <span className="gradient-text">startup founder</span>
          </h1>
        </GrowingElement>

        <div className="grid lg:grid-cols-3 gap-12 mt-12">
          {/* Sidebar */}
          <div className="space-y-6">
            <GrowingElement delay="0.2s">
              <div className="rounded-2xl overflow-hidden border border-border/50 bg-card">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={profileImage} alt="KH. Nayeam Ibna Nasir" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-foreground">KH. Nayeam Ibna Nasir</h2>
                    <p className="text-sm text-muted-foreground">Agricultural Scientist & Full-Stack Developer</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={16} className="text-primary flex-shrink-0" />
                      <span>Farmgate, Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail size={16} className="text-primary flex-shrink-0" />
                      <span>khnayeam009@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone size={16} className="text-primary flex-shrink-0" />
                      <span>+880 1710 651618</span>
                    </div>
                  </div>

                  <a href="/cv-kh-nayeam-ibna-nasir.pdf" download className="block">
                    <Button className="w-full rounded-xl" size="lg">
                      <Download className="mr-2" size={16} />
                      Download CV
                    </Button>
                  </a>
                </div>
              </div>
            </GrowingElement>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Career Objective */}
            <GrowingElement delay="0.3s">
              <div className="rounded-2xl border border-border/50 bg-card p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Pen size={18} className="text-primary" />
                  Career Objective
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  B.Sc. Agriculture graduate and Dynamic Full-Stack Developer with a background in Finance and Startup leadership. Proven track record of building scalable digital solutions designed to bridge technical innovation with business strategy. Seeking to leverage my multidisciplinary expertise and award-winning leadership to drive growth and operational efficiency in a forward-thinking organization.
                </p>
              </div>
            </GrowingElement>

            {/* Education */}
            <GrowingElement delay="0.4s">
              <div className="rounded-2xl border border-border/50 bg-card p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <GraduationCap size={18} className="text-primary" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
                    <h4 className="font-semibold text-foreground">BSc (Honours) in Agriculture</h4>
                    <p className="text-sm text-muted-foreground mt-1">Gopalganj Science and Technology University</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">Session: 2019–20</Badge>
                      <Badge variant="outline" className="text-xs">CGPA: 3.59/4.00</Badge>
                      <Badge variant="outline" className="text-xs">Completed: July 2025</Badge>
                    </div>
                  </div>
                  <div className="relative pl-6 border-l-2 border-accent/30">
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent" />
                    <h4 className="font-semibold text-foreground">HSC — Science</h4>
                    <p className="text-sm text-muted-foreground mt-1">Notre Dame College Mymensingh</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">2019</Badge>
                      <Badge variant="outline" className="text-xs">GPA: 4.25/5.00</Badge>
                    </div>
                  </div>
                  <div className="relative pl-6 border-l-2 border-muted-foreground/20">
                    <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-muted-foreground/40" />
                    <h4 className="font-semibold text-foreground">SSC — Science</h4>
                    <p className="text-sm text-muted-foreground mt-1">Suti V. M. Pilot Model High School</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">2016</Badge>
                      <Badge variant="outline" className="text-xs">GPA: 5.00/5.00</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </GrowingElement>

            {/* Skills */}
            <GrowingElement delay="0.5s">
              <div className="rounded-2xl border border-border/50 bg-card p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Code size={18} className="text-primary" />
                  Skills & Competencies
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {skills.map((group) => (
                    <div key={group.category}>
                      <p className="text-sm font-medium text-primary mb-3">{group.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Badge key={item} variant="secondary" className="text-xs font-normal">{item}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GrowingElement>

            {/* Experience */}
            <GrowingElement delay="0.6s">
              <div className="rounded-2xl border border-border/50 bg-card p-8">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Globe size={18} className="text-primary" />
                  Professional Experience
                </h3>
                <div className="space-y-5">
                  {[
                    { role: "Founder & CEO", org: "Stock-X BD Ltd.", duration: "1 year, 8 months", desc: "Founded and led a university-based startup under UIHP. Oversaw product development, operations, and strategic planning." },
                    { role: "Financial Advisor", org: "Sonali Life Insurance", duration: "Ongoing", desc: "Managing client portfolios and policy planning. Built a custom Premium Calculator to automate complex policy assessments." },
                  ].map((exp, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Briefcase size={18} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{exp.role}</h4>
                        <p className="text-sm text-muted-foreground">{exp.org} · {exp.duration}</p>
                        <p className="text-sm text-muted-foreground mt-1">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GrowingElement>
          </div>
        </div>
      </div>
    </div>
  );
};

// Need Briefcase icon
import { Briefcase } from "lucide-react";

export default About;
