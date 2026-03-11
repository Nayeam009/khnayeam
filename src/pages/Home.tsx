import Navigation from "@/components/Navigation";
import { useReveal } from "@/hooks/useReveal";
import profileImage from "@/assets/nayeam-profile-latest.jpg";
import {
  Sprout, Code, Trophy, Briefcase, ArrowUpRight, Download,
  GraduationCap, FlaskConical, Lightbulb, Users, Award, Mic,
  Mail, Phone, MapPin, Linkedin, Github, Facebook,
  ChevronDown, Leaf, Globe, HeartPulse, Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* ─── HERO ─── */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16">
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-primary/5 blob blur-[100px]" />
          <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-accent/8 blob blur-[80px]" />
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-growth/4 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full section-padding py-12 md:py-20">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-3 space-y-6 md:space-y-8">
              <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4">
                  <Sprout size={14} />
                  Agriculture Graduate · Full-Stack Developer
                </div>
              </div>

              <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
                  KH. Nayeam
                  <br />
                  <span className="gradient-text">Ibna Nasir</span>
                </h1>
              </div>

              <div className="animate-fade-up" style={{ animationDelay: "0.35s" }}>
                <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                  B.Sc. Agriculture graduate bridging <em className="text-foreground font-medium not-italic">agricultural science</em> with{" "}
                  <em className="text-foreground font-medium not-italic">full-stack development</em>. Building scalable digital solutions that connect technical innovation with business strategy.
                </p>
              </div>

              <div className="animate-fade-up flex flex-wrap gap-3 pt-2" style={{ animationDelay: "0.5s" }}>
                <a href="#contact">
                  <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all group">
                    Get In Touch
                    <ArrowUpRight className="ml-1 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" size={16} />
                  </Button>
                </a>
                <a href="/cv-kh-nayeam-ibna-nasir.pdf" download>
                  <Button size="lg" variant="outline" className="rounded-full gap-2">
                    <Download size={16} /> Download CV
                  </Button>
                </a>
              </div>

              {/* Quick stats */}
              <div className="animate-fade-up grid grid-cols-3 gap-4 pt-4 max-w-md" style={{ animationDelay: "0.6s" }}>
                {[
                  { value: "3.59", label: "CGPA" },
                  { value: "5+", label: "Projects" },
                  { value: "7+", label: "Awards" },
                ].map((s) => (
                  <div key={s.label} className="text-center sm:text-left">
                    <p className="text-2xl sm:text-3xl font-bold gradient-text font-serif">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile image */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-[22rem]">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blob blur-2xl" />
                <div className="absolute -inset-[3px] rounded-[2rem] bg-gradient-to-br from-primary/40 to-accent/30" />
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src={profileImage}
                    alt="KH. Nayeam Ibna Nasir"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
                </div>
                {/* Floating badges */}
                <div className="absolute -bottom-3 -left-3 glass-card rounded-xl px-3 py-2 shadow-lg animate-float">
                  <p className="text-[10px] text-muted-foreground">CGPA</p>
                  <p className="text-lg font-bold gradient-text font-serif">3.59</p>
                </div>
                <div className="absolute -top-3 -right-3 glass-card rounded-xl px-3 py-2 shadow-lg animate-float" style={{ animationDelay: "2s" }}>
                  <Sprout className="text-primary" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="text-muted-foreground" size={24} />
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-20 md:py-28 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">About Me</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Rooted in Agriculture,<br className="hidden sm:block" />
              <span className="gradient-text"> Growing in Technology</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-10">
            <div className="space-y-6 reveal reveal-delay-1">
              <p className="text-muted-foreground leading-relaxed">
                A dynamic B.Sc. Agriculture graduate with a background in Finance and Startup leadership. Proven track record of building scalable digital solutions designed to bridge technical innovation with business strategy. Award-winning leader seeking to drive growth and operational efficiency in forward-thinking organizations.
              </p>

              {/* Education cards */}
              <div className="space-y-4">
                {[
                  { degree: "B.Sc. (Honours) in Agriculture", school: "Gopalganj Science & Technology University", year: "2019–20 | Completed July 2025", grade: "CGPA 3.59 / 4.00", icon: GraduationCap },
                  { degree: "Higher Secondary (HSC) — Science", school: "Notre Dame College, Mymensingh", year: "2019", grade: "GPA 4.25 / 5.00", icon: GraduationCap },
                  { degree: "Secondary (SSC) — Science", school: "Suti V.M. Pilot Model High School", year: "2016", grade: "GPA 5.00 / 5.00", icon: Award },
                ].map((edu) => (
                  <div key={edu.degree} className="flex gap-4 p-4 rounded-2xl bg-card border border-border/50 hover-lift">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <edu.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{edu.degree}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{edu.school}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-xs text-muted-foreground">{edu.year}</span>
                        <span className="text-xs font-semibold text-primary">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill highlights */}
            <div className="space-y-4 reveal reveal-delay-2">
              {[
                { icon: Sprout, title: "Agricultural Science", desc: "B.Sc. Agriculture with deep understanding of crop science, soil management, and sustainable farming practices." },
                { icon: Code, title: "Full-Stack Development", desc: "Web development, UI/UX design with Figma, and frontend/backend integration for scalable digital platforms." },
                { icon: Briefcase, title: "Startup Leadership", desc: "Founded Stock-X BD Ltd. under UIHP, managing product development, operations, and strategic planning." },
                { icon: Trophy, title: "Award-Winning Debater", desc: "VP of GSTU Central Debating Society with multiple championship wins and tournament achievements." },
              ].map((skill) => (
                <div key={skill.title} className="group flex gap-4 p-5 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <skill.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm font-sans">{skill.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESEARCH ─── */}
      <section id="research" className="py-20 md:py-28 section-padding bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Research & Projects</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Academic <span className="gradient-text">Research</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">Exploring the intersection of agriculture, technology, and entrepreneurship through academic research.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Lightbulb,
                title: "Adaptation of Technology in Entrepreneurship",
                supervisor: "Md. Rahat Tuhin, Lecturer, Dept. of Marketing, GSTU",
                desc: "Conducting research on the integration of modern technology into entrepreneurial ventures.",
              },
              {
                icon: FlaskConical,
                title: "Developing 4-4-4 Super Food for Plants",
                supervisor: "Md. Mahfuzur Rahman, Lecturer, Dept. of Agriculture, GSTU",
                desc: "Working on formulation and application methods for an organic plant nutrient solution.",
              },
              {
                icon: Briefcase,
                title: "University Innovation Hub Program (UIHP)",
                supervisor: "GSTU Entrepreneurship Program",
                desc: "Completed intensive entrepreneurship training focused on innovation, startup development, and business strategy.",
              },
            ].map((r, i) => (
              <div key={r.title} className={`reveal reveal-delay-${i + 1} group p-6 sm:p-8 rounded-2xl border border-border/50 bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300`}>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <r.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-bold text-foreground text-lg font-serif mb-2">{r.title}</h3>
                <p className="text-xs text-primary font-medium mb-3">Under {r.supervisor}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE / PORTFOLIO ─── */}
      <section id="experience" className="py-20 md:py-28 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Experience & Portfolio</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Startups & <span className="gradient-text">Projects</span>
            </h2>
          </div>

          {/* Main startup */}
          <div className="reveal reveal-delay-1 mt-12 p-6 sm:p-8 md:p-10 rounded-3xl border border-border/50 bg-gradient-to-br from-primary/5 via-card to-card">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Briefcase className="text-primary" size={26} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="font-bold text-xl text-foreground font-serif">Stock-X BD Ltd.</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium w-fit">Founder & CEO</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Founded under UIHP at GSTU. Led product development, operations, and strategic planning for an LPG ERP platform. Coordinated a cross-functional team and drove early-stage growth initiatives over 1 year 8 months.
                </p>
              </div>
              <a href="https://stockxbd.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <Button variant="outline" className="rounded-full gap-2 text-sm">
                  Visit <ArrowUpRight size={14} />
                </Button>
              </a>
            </div>
          </div>

          {/* Other projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[
              { name: "Vetmedix", url: "https://vetmedixbd.com", icon: HeartPulse, role: "Full-Stack Developer & Advisor", desc: "Pet-care platform with E-commerce, Vet clinic & appointment booking." },
              { name: "SLI Policy Calculator", url: "https://slipolicy.vercel.app", icon: Globe, role: "Financial Advisor", desc: "Custom premium calculator for Sonali Life Insurance policy assessments." },
              { name: "Coco Coffee", url: "https://coco-coffee.lovable.app", icon: Coffee, role: "Advisor", desc: "E-commerce marketplace for health and wellness products." },
              { name: "Bionex / Aqualanse", url: "#", icon: Leaf, role: "Advisor", desc: "Agri-tech and aquaculture startup advisory roles." },
            ].map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${(i % 4) + 1} group p-5 sm:p-6 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300 block`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <p.icon className="text-primary" size={16} />
                  </div>
                  <ArrowUpRight className="ml-auto text-muted-foreground group-hover:text-primary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={16} />
                </div>
                <h3 className="font-bold text-foreground text-sm font-sans">{p.name}</h3>
                <p className="text-[11px] text-primary font-medium mt-0.5">{p.role}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>

          {/* Skills strip */}
          <div className="reveal reveal-delay-2 mt-12 p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/50">
            <h3 className="font-bold text-foreground text-lg font-serif mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Full-Stack Web Dev", "UI/UX Design (Figma)", "Frontend Development", "Backend Integration",
                "React / TypeScript", "MS Office (Expert)", "ERP Development", "E-commerce Platforms",
                "English (Fluent)", "Bengali (Native)", "Leadership", "Presentation Skills",
              ].map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-full bg-muted text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ACHIEVEMENTS ─── */}
      <section id="achievements" className="py-20 md:py-28 section-padding bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Achievements</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Debating */}
            <div className="reveal reveal-delay-1 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mic className="text-primary" size={18} />
                </div>
                <h3 className="font-bold text-foreground font-serif text-lg">Debating</h3>
              </div>
              {[
                "1st Runner-up — Intra-University Debate, LAW Debating Club, GSTU",
                "Semi-Finalist — Intra-University Debate, BMB Debating Club",
                "Champion — Freshers Debate 3.0 & 4.0, GSTU Central Debating Society",
                "Runner-up — Environment Science & Disaster Mgmt Club Debate",
              ].map((a) => (
                <div key={a} className="flex gap-3 text-sm text-muted-foreground">
                  <Trophy className="text-accent flex-shrink-0 mt-0.5" size={14} />
                  <span>{a}</span>
                </div>
              ))}
            </div>

            {/* Startup & Innovation */}
            <div className="reveal reveal-delay-2 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Lightbulb className="text-accent" size={18} />
                </div>
                <h3 className="font-bold text-foreground font-serif text-lg">Startup & Innovation</h3>
              </div>
              {[
                "Top 3 — UIHP Startup Founders Competition",
                "Founder & CEO — Stock-X BD Ltd.",
                "Advisor — Coco Coffee, Vetmedix",
              ].map((a) => (
                <div key={a} className="flex gap-3 text-sm text-muted-foreground">
                  <Award className="text-accent flex-shrink-0 mt-0.5" size={14} />
                  <span>{a}</span>
                </div>
              ))}
            </div>

            {/* Scientific & Leadership */}
            <div className="reveal reveal-delay-3 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-growth/10 flex items-center justify-center">
                  <FlaskConical className="text-growth" size={18} />
                </div>
                <h3 className="font-bold text-foreground font-serif text-lg">Scientific & Leadership</h3>
              </div>
              {[
                "1st Runner-up — Poster Presentation, IAAS 2024, GSTU",
                "Champion — Poster on Mushroom Production, IAAS 2025, GSTU",
                "Vice President — GSTU Central Debating Society",
                "President — Agriculture Debating Club, GSTU",
              ].map((a) => (
                <div key={a} className="flex gap-3 text-sm text-muted-foreground">
                  <Users className="text-growth flex-shrink-0 mt-0.5" size={14} />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-20 md:py-28 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10">
              Whether it's agricultural innovation, tech startups, or full-stack development — I'm ready to collaborate.
            </p>
          </div>

          <div className="reveal reveal-delay-1 grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Phone, label: "+880 1710-651618", href: "tel:+8801710651618" },
              { icon: Mail, label: "khnayeam009@gmail.com", href: "mailto:khnayeam009@gmail.com" },
              { icon: MapPin, label: "Farmgate, Dhaka, Bangladesh", href: "#" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <c.icon className="text-primary" size={18} />
                </div>
                <span className="text-sm text-muted-foreground">{c.label}</span>
              </a>
            ))}
          </div>

          <div className="reveal reveal-delay-2 flex items-center justify-center gap-3">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/khnayeam", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/khnayeam", label: "GitHub" },
              { icon: Facebook, href: "https://facebook.com/khnayeam", label: "Facebook" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all">
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 section-padding border-t border-border/50 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} KH. Nayeam Ibna Nasir. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
