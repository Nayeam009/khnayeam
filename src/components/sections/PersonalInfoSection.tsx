import { User, Calendar, Heart, Flag, Star } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import MotionCard from "@/components/MotionCard";

const PersonalInfoSection = () => (
  <section aria-label="Personal information" className="py-16 md:py-20 section-padding">
    <div className="max-w-4xl mx-auto">
      <MotionCard>
        <div className="text-center mb-10">
          <span className="pill-tag pill-tag-primary mb-3"><User size={12} /> Personal</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-foreground mt-3">
            Personal <span className="gradient-text">Information</span>
          </h2>
        </div>
      </MotionCard>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { icon: User, label: "Full Name", value: "KH. Nayeam Ibna Nasir", tip: "Full legal name" },
          { icon: User, label: "Father", value: "Kh Nasir Uddin", tip: "Father's name" },
          { icon: User, label: "Mother", value: "Nasima Khandakar", tip: "Mother's name" },
          { icon: Calendar, label: "Date of Birth", value: "31 Jan, 2000", tip: "Born January 31, 2000" },
          { icon: Heart, label: "Blood Group", value: "AB+ve", tip: "Blood type AB positive" },
          { icon: Flag, label: "Nationality", value: "Bangladeshi", tip: "Nationality: Bangladeshi" },
          { icon: Star, label: "Religion", value: "Islam", tip: "Religion: Islam" },
          { icon: User, label: "Gender", value: "Male", tip: "Gender: Male" },
          { icon: Heart, label: "Marital Status", value: "Unmarried", tip: "Currently unmarried" },
        ].map((info, i) => (
          <MotionCard key={info.label} index={i}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bento-card flex items-center gap-3 cursor-default">
                  <div className="circle-icon circle-icon-sm bg-primary/10 flex-shrink-0">
                    <info.icon className="text-primary" size={14} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{info.label}</p>
                    <p className="text-sm font-medium text-foreground mt-0.5 truncate">{info.value}</p>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{info.tip}</p>
              </TooltipContent>
            </Tooltip>
          </MotionCard>
        ))}
      </div>
    </div>
  </section>
);

export default PersonalInfoSection;
