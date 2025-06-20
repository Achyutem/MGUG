import AnimatedCard from "@/components/animatedCard";
import StatsCard from "@/components/statsCard";
import { PiGraduationCapDuotone } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";

export default function AboutMain() {
  return (
    <div>
      <section id="about" className="relative z-20 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Excellence in Numbers
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our commitment to academic excellence is reflected in our
              achievements and growing community
            </p>
          </AnimatedCard>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard
              number="3,000+"
              label="Students"
              icon={<FaUsers className="w-6 h-6" />}
              delay={0}
            />
            <StatsCard
              number="300+"
              label="Faculty"
              icon={<PiGraduationCapDuotone className="w-6 h-6" />}
              delay={200}
            />
            <StatsCard
              number="40+"
              label="Programs"
              icon={<FiBookOpen className="w-6 h-6" />}
              delay={400}
            />
            <StatsCard
              number="98%"
              label="Placement Rate"
              icon={<LuTrophy className="w-6 h-6" />}
              delay={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
