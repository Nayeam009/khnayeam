import { motion } from "framer-motion";
import {
  Sprout, Code, Briefcase, Trophy, Target,
  GraduationCap, Award, BookOpen, Leaf, Globe, FolderKanban, Clock,
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

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 mt-10 auto-rows-auto">

        {/* Career Objective — large card */}
        <MotionCard index={0} className="sm:col-span-2 lg:col-span-3 lg:row-span-2">
          <div className="bento-card h-full relative overflow-hidden bg-gradient-to-br from-primary/5 via-card to-card p-6 sm:p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rounded-full" />
            <div className="flex items-center gap-3 mb-5">
              <div className="circle-icon circle-icon-md bg-primary/10">
                <Target className="text-primary" size={20} />
              </div>
              <h3 className="font-bold text-foreground font-serif text-lg">Career Objective</h3>
            </div>
            <blockquote className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-4 italic">
              B.Sc. Agriculture graduate and Dynamic Full-Stack Developer with a background in Finance and Startup leadership.
              Proven track record of building scalable digital solutions designed to bridge technical innovation with business strategy.
              Seeking to leverage multidisciplinary expertise and award-winning leadership to drive growth and operational efficiency
              in a forward-thinking organization.
            </blockquote>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Agriculture", "Full-Stack Dev", "Startup Leader", "Finance"].map(t => (
                <span key={t} className="pill-tag pill-tag-muted">{t}</span>
              ))}
            </div>
          </div>
        </MotionCard>

        {/* Agricultural Science — small */}
        <MotionCard index={1} className="lg:col-span-1 group">
          <div className="bento-card h-full flex flex-col items-start gap-4 min-h-[140px] hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="circle-icon circle-icon-lg bg-primary/10 group-hover:bg-primary transition-all duration-200"
            >
              <Sprout className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
            </motion.div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Agricultural Science</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Crop science, soil management & sustainable farming</p>
            </div>
          </div>
        </MotionCard>

        {/* Full-Stack Dev — wide */}
        <MotionCard index={2} className="lg:col-span-2 group">
          <div className="bento-card h-full flex flex-col items-start gap-4 min-h-[140px] hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="circle-icon circle-icon-lg bg-primary/10 group-hover:bg-primary transition-all duration-200"
            >
              <Code className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
            </motion.div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Full-Stack Dev</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">React, TypeScript, Figma, backend integration</p>
            </div>
          </div>
        </MotionCard>

        {/* Startup Leadership — small */}
        <MotionCard index={3} className="lg:col-span-1 group">
          <div className="bento-card h-full flex flex-col items-start gap-4 min-h-[140px] hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="circle-icon circle-icon-lg bg-primary/10 group-hover:bg-primary transition-all duration-200"
            >
              <Briefcase className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
            </motion.div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Startup Leadership</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Founded Stock-X BD, led ops & strategy</p>
            </div>
          </div>
        </MotionCard>

        {/* Award-Winning — wide accent */}
        <MotionCard index={4} className="sm:col-span-2 lg:col-span-2 group">
          <div className="bento-card h-full flex flex-col items-start gap-4 min-h-[140px] bg-gradient-to-br from-accent/30 to-card hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="circle-icon circle-icon-lg bg-primary/10 group-hover:bg-primary transition-all duration-200"
            >
              <Trophy className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
            </motion.div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Award-Winning</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">VP of GSTU Central Debating Society</p>
            </div>
          </div>
        </MotionCard>

        {/* Quick Stats — horizontal strip */}
        <MotionCard index={5} className="sm:col-span-2 lg:col-span-4">
          <div className="bento-card h-full flex flex-wrap items-center justify-around gap-4 sm:gap-6 py-5 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
            {[
              { icon: Globe, label: "Languages", value: "3", sub: "BN · EN · HI" },
              { icon: FolderKanban, label: "Projects", value: "10+", sub: "Built & shipped" },
              { icon: Clock, label: "Experience", value: "3+ yrs", sub: "Tech & Agri" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3 text-center sm:text-left">
                <div className="circle-icon circle-icon-sm bg-primary/10">
                  <stat.icon className="text-primary" size={14} />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground font-serif leading-none">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </MotionCard>
      </div>

      {/* Education */}
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
              step: "01",
              year: "2019–2025",
              title: "B.Sc. (Honours) in Agriculture",
              subtitle: "Gopalganj Science & Technology University",
              badge: "CGPA 3.59 / 4.00",
              icon: GraduationCap,
            },
            {
              step: "02",
              year: "2019",
              title: "HSC — Science",
              subtitle: "Notre Dame College, Mymensingh",
              badge: "GPA 4.25 / 5.00",
              icon: GraduationCap,
            },
            {
              step: "03",
              year: "2016",
              title: "SSC — Science",
              subtitle: "Suti V.M. Pilot Model High School",
              badge: "GPA 5.00 / 5.00",
              icon: Award,
            },
          ].map((edu, i) => (
            <MotionCard key={edu.year} index={i} className="group">
              <div className="bento-card h-full relative hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <span className="absolute top-3 left-4 text-[10px] font-bold text-primary/30 font-serif">{edu.step}</span>
                <div className="flex items-center justify-between mb-4 pt-2">
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
