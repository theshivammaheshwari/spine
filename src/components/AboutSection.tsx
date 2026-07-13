import { motion } from "framer-motion";
import { Shield, Award, Heart } from "lucide-react";
import { doctor } from "@/data/siteData";

const badges = [
  { icon: Shield, label: "Licensed & Certified" },
  { icon: Award, label: "Top Ranked in India" },
  { icon: Heart, label: "5,003+ Patients" },
];

const AboutSection = () => (
  <section id="about" className="py-20 gradient-section">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            Spinal Care Chiropractic Clinic, Jaipur
          </h2>
          <p className="text-muted-foreground mb-6">
            {doctor.bio}
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 mb-8">
            "{doctor.quote}"
          </blockquote>

          <div className="flex flex-wrap gap-4">
            {badges.map((b, i) => (
              <div key={i} className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-card">
                <b.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
