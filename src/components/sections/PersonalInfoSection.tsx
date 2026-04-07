import { User, Calendar, Heart, Flag, Star, type LucideIcon } from "lucide-react";
import MotionCard from "@/components/MotionCard";
import { InfoColumn } from "@/components/ui/info-columns";
import { useSiteContent } from "@/hooks/useSiteContent";

const iconMap: Record<string, LucideIcon> = {
  User, Calendar, Heart, Flag, Star,
};

interface PersonalItem {
  label: string;
  text: string;
  icon: string;
}

const DEFAULTS: PersonalItem[] = [
  { icon: "User", label: "Full Name", text: "KH. Nayeam Ibna Nasir" },
  { icon: "User", label: "Father", text: "Kh Nasir Uddin" },
  { icon: "User", label: "Mother", text: "Nasima Khandakar" },
  { icon: "Calendar", label: "Date of Birth", text: "31 Jan, 2000" },
  { icon: "Heart", label: "Blood Group", text: "AB+ve" },
  { icon: "Flag", label: "Nationality", text: "Bangladeshi" },
  { icon: "Star", label: "Religion", text: "Islam" },
  { icon: "User", label: "Gender", text: "Male" },
  { icon: "Heart", label: "Marital Status", text: "Unmarried" },
];

const PersonalInfoSection = () => {
  const { data } = useSiteContent<{ items: PersonalItem[] }>("personal_info");
  const items = data?.items ?? DEFAULTS;

  const mapped = items.map((item) => {
    const Icon = iconMap[item.icon] || User;
    return { icon: <Icon className="text-primary" size={18} />, label: item.label, text: item.text };
  });

  const col1 = mapped.slice(0, 3);
  const col2 = mapped.slice(3, 6);
  const col3 = mapped.slice(6, 9);

  return (
    <section id="personal-info" aria-label="Personal information" className="py-16 md:py-20 section-padding">
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

        {/* Mobile: simple grid showing all items */}
        <div className="sm:hidden grid grid-cols-2 gap-3">
          {mapped.map(({ icon, label, text }, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  {label}
                </span>
              </div>
              <div className="text-sm font-bold text-foreground">{text}</div>
            </div>
          ))}
        </div>

        {/* Desktop/tablet: animated scrolling columns */}
        <div className="hidden sm:flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[500px] overflow-hidden">
          <InfoColumn items={col1} duration={12} className="hidden md:block" />
          <InfoColumn items={col2} duration={16} />
          <InfoColumn items={col3} duration={14} />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoSection;
