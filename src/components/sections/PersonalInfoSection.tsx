import { User, Calendar, Heart, Flag, Star } from "lucide-react";
import MotionCard from "@/components/MotionCard";

const PersonalInfoSection = () => (
  <section aria-label="Personal information" className="py-16 md:py-20 section-padding">
    <div className="max-w-5xl mx-auto">
      <MotionCard>
        <div className="text-center mb-12">
          <span className="pill-tag pill-tag-primary mb-3"><User size={12} /> Personal</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-foreground mt-3">
            Personal <span className="gradient-text">Information</span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base max-w-lg mx-auto">
            A quick glance at who I am beyond the professional profile.
          </p>
        </div>
      </MotionCard>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {[
          { icon: User, label: "Full Name", value: "KH. Nayeam Ibna Nasir" },
          { icon: User, label: "Father", value: "Kh Nasir Uddin" },
          { icon: User, label: "Mother", value: "Nasima Khandakar" },
          { icon: Calendar, label: "Date of Birth", value: "31 Jan, 2000" },
          { icon: Heart, label: "Blood Group", value: "AB+ve" },
          { icon: Flag, label: "Nationality", value: "Bangladeshi" },
          { icon: Star, label: "Religion", value: "Islam" },
          { icon: User, label: "Gender", value: "Male" },
          { icon: Heart, label: "Marital Status", value: "Unmarried" },
        ].map((info, i) => (
          <MotionCard key={info.label} index={i}>
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <info.icon className="text-primary" size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{info.label}</p>
                <p className="text-base font-bold text-foreground mt-0.5 truncate">{info.value}</p>
              </div>
            </div>
          </MotionCard>
        ))}
      </div>
    </div>
  </section>
);

export default PersonalInfoSection;
