import { User, Calendar, Heart, Flag, Star } from "lucide-react";
import MotionCard from "@/components/MotionCard";
import { InfoColumn } from "@/components/ui/info-columns";

const personalItems = [
  { icon: <User className="text-primary" size={18} />, label: "Full Name", text: "KH. Nayeam Ibna Nasir" },
  { icon: <User className="text-primary" size={18} />, label: "Father", text: "Kh Nasir Uddin" },
  { icon: <User className="text-primary" size={18} />, label: "Mother", text: "Nasima Khandakar" },
  { icon: <Calendar className="text-primary" size={18} />, label: "Date of Birth", text: "31 Jan, 2000" },
  { icon: <Heart className="text-primary" size={18} />, label: "Blood Group", text: "AB+ve" },
  { icon: <Flag className="text-primary" size={18} />, label: "Nationality", text: "Bangladeshi" },
  { icon: <Star className="text-primary" size={18} />, label: "Religion", text: "Islam" },
  { icon: <User className="text-primary" size={18} />, label: "Gender", text: "Male" },
  { icon: <Heart className="text-primary" size={18} />, label: "Marital Status", text: "Unmarried" },
];

const col1 = personalItems.slice(0, 3);
const col2 = personalItems.slice(3, 6);
const col3 = personalItems.slice(6, 9);

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

      {/* Scrolling columns — desktop: 3 cols, tablet: 2, mobile: 1 */}
      <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[500px] overflow-hidden">
        <InfoColumn items={col1} duration={12} className="hidden md:block" />
        <InfoColumn items={col2} duration={16} className="hidden sm:block" />
        <InfoColumn items={col3} duration={14} />
      </div>
    </div>
  </section>
);

export default PersonalInfoSection;
