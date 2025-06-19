import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedCard from "@/components/animatedCard";
import ModernCard from "@/components/modernCards";

export default function Contact() {
  return (
    <div>
      <section id="contact" className="relative z-20 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedCard className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              We're here to help you take the next step in your educational
              journey
            </p>
          </AnimatedCard>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0}>
              <a
                href="https://www.google.com/maps?q=Mahayogi+Gorakhnath+University,+Gorakhpur,+Uttar+Pradesh,+India+273009"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ModernCard className="text-center cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-orange-600/20 text-orange-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Address
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Mahayogi Gorakhnath University
                    <br />
                    Gorakhpur, Uttar Pradesh
                    <br />
                    India - 273009
                  </p>
                </ModernCard>
              </a>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <a href="tel:+919415266014">
                <ModernCard className="text-center cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-orange-600/20 text-orange-400">
                      <Phone className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-400 text-sm">
                    +91-9415266014
                    <br />
                    +91-9935904499
                    <br />
                    (Admissions Helpline)
                  </p>
                </ModernCard>
              </a>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <a href="mailto:mguniversitygkp@mgug.ac.in">
                <ModernCard className="text-center cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-orange-600/20 text-orange-400">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-400 text-sm">
                    mguniversitygkp@mgug.ac.in
                    <br />
                    info@mgug.ac.in
                    <br />
                    support@mgug.ac.in
                  </p>
                </ModernCard>
              </a>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
}
