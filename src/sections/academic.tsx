import { Stethoscope, HeartPulse, Award, Building } from "lucide-react";
import AnimatedCard from "@/components/animatedCard";
import ProgramCard from "@/components/programCard";

export default function Academic() {
  return (
    <div>
      <section id="programs" className="relative z-20 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Academic Programs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our comprehensive range of medical, allied health, and
              management programs.
            </p>
          </AnimatedCard>
          <div className="grid md:grid-cols-2 gap-8">
            <ProgramCard
              title="Medical & Surgery"
              description="MBBS and postgraduate medical degrees with a focus on clinical excellence and research."
              icon={<Stethoscope className="w-6 h-6" />}
              delay={0}
            />
            <ProgramCard
              title="Management & Commerce"
              description="MBA, BBA, B.Com, M.Com with specializations in Finance, Marketing, and Entrepreneurship."
              icon={<Building className="w-6 h-6" />}
              delay={200}
            />
            <ProgramCard
              title="Allied Health Sciences"
              description="Programs in Physiotherapy, Medical Lab Technology, Radiology, and other healthcare fields."
              icon={<HeartPulse className="w-6 h-6" />}
              delay={400}
            />
            <ProgramCard
              title="Nursing & Biomedical Sciences"
              description="B.Sc Nursing, M.Sc Nursing, and research-oriented biomedical science courses."
              icon={<Award className="w-6 h-6" />}
              delay={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
