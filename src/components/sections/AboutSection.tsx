import { motion } from "framer-motion";
import {
  Sprout, Code, Briefcase, Trophy, Target,
  GraduationCap, Award, BookOpen, Leaf,
} from "lucide-react";
import MotionCard from "@/components/MotionCard";

const AboutSection = () => (
  <section id="about" aria-label="About me" className="py-20 md:py-28 section-padding">
    <div className="max-w-7xl mx-auto">
      <MotionCard>
        <div className="flex items-center gap-3 mb-2">
          <span className="pill-tag pill-tag-primary"><Leaf size={12} /> About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-foreground">
          Rooted in Agriculture, <span className="gradient-text">Growing in Technology</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base">
          A dynamic multidisciplinary professional bridging agriculture, technology, and entrepreneurship.
        </p>
      </MotionCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <MotionCard index={0} className="sm:col-span-2 sm:row-span-2">
          <div className="bento-card h-full bg-gradient-to-br from-primary/5 via-card to-card">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="flex items-center gap-3 mb-4">
              <div className="circle-icon circle-icon-md bg-primary/10">
                <Target className="text-primary" size={20} />
              </div>
              <h3 className="font-bold text-foreground font-serif text-lg">Career Objective</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              B.Sc. Agriculture graduate and Dynamic Full-Stack Developer with a background in Finance and Startup leadership.
              Proven track record of building scalable digital solutions designed to bridge technical innovation with business strategy.
              Seeking to leverage multidisciplinary expertise and award-winning leadership to drive growth and operational efficiency
              in a forward-thinking organization.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Agriculture", "Full-Stack Dev", "Startup Leader", "Finance"].map(t => (
                <span key={t} className="pill-tag pill-tag-muted">{t}</span>
              ))}
            </div>
          </div>
        </MotionCard>

        {[
          { icon: Sprout, title: "Agricultural Science", desc: "Crop science, soil management & sustainable farming" },
          { icon: Code, title: "Full-Stack Dev", desc: "React, TypeScript, Figma, backend integration" },
          { icon: Briefcase, title: "Startup Leadership", desc: "Founded Stock-X BD, led ops & strategy" },
          { icon: Trophy, title: "Award-Winning", desc: "VP of GSTU Central Debating Society" },
        ].map((skill, i) => (
          <MotionCard key={skill.title} index={i + 1} className="group">
            <div className="bento-card h-full flex flex-col items-start gap-4 group-hover:bg-card min-h-[140px]">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="circle-icon circle-icon-lg bg-primary/10 group-hover:bg-primary transition-all duration-200"
              >
                <skill.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{skill.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{skill.desc}</p>
              </div>
            </div>
          </MotionCard>
        ))}
      </div>

      <div className="mt-14">
        <MotionCard>
          <h3 className="font-bold text-foreground font-serif text-2xl mb-8 flex items-center gap-3">
            <div className="circle-icon circle-icon-md bg-primary/10">
              <BookOpen className="text-primary" size={20} />
            </div>
            Educational Background
          </h3>
        </MotionCard>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            {
              year: "2019–2025",
              title: "B.Sc. (Honours) in Agriculture",
              subtitle: "Gopalganj Science & Technology University",
              badge: "CGPA 3.59 / 4.00",
              icon: GraduationCap,
            },
            {
              year: "2019",
              title: "HSC — Science",
              subtitle: "Notre Dame College, Mymensingh",
              badge: "GPA 4.25 / 5.00",
              icon: GraduationCap,
            },
            {
              year: "2016",
              title: "SSC — Science",
              subtitle: "Suti V.M. Pilot Model High School",
              badge: "GPA 5.00 / 5.00",
              icon: Award,
            },
          ].map((edu, i) => (
            <MotionCard key={edu.year} index={i} className="group">
              <div className="bento-card h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="circle-icon circle-icon-sm bg-primary/10 group-hover:bg-primary transition-all duration-300">
                    <edu.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={16} />
                  </div>
                  <span className="pill-tag pill-tag-primary text-[10px]">{edu.year}</span>
                </div>
                <h4 className="font-bold text-foreground text-sm font-serif">{edu.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{edu.subtitle}</p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="pill-tag pill-tag-success text-[10px] font-bold">{edu.badge}</span>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
