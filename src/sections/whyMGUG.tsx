import {
  Award,
  Microscope,
  Building,
  Globe,
  Target,
  Library,
} from "lucide-react";
import AnimatedCard from "@/components/animatedCard";
import FeatureCard from "@/components/featureCard";

export default function WhyMGUG() {
  return (
    <div>
      <section className="relative z-20 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Why Choose MGUG?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover what makes Mahayogi Gorakhnath University a premier
              destination for higher education
            </p>
          </AnimatedCard>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="Academic Excellence"
              description="Dedicated to maintaining high academic standards through innovative teaching and a student-first approach."
              delay={0}
            />
            <FeatureCard
              icon={<Microscope className="w-8 h-8" />}
              title="Research Excellence"
              description="State-of-the-art research facilities and opportunities for groundbreaking discoveries across disciplines."
              delay={200}
            />
            <FeatureCard
              icon={<Building className="w-8 h-8" />}
              title="Modern Infrastructure"
              description="Contemporary campus with smart classrooms, advanced labs, and world-class facilities."
              delay={400}
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="Global Partnerships"
              description="International collaborations and exchange programs with renowned universities worldwide."
              delay={600}
            />
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="Industry Focused"
              description="Curriculum designed with industry needs in mind, ensuring graduates are job-ready."
              delay={800}
            />
            <FeatureCard
              icon={<Library className="w-8 h-8" />}
              title="Digital Learning"
              description="Cutting-edge e-learning platforms and digital resources for enhanced educational experience."
              delay={1000}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
