import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, UserCheck, Sparkles } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Licensed & Certified", desc: "One of the few licensed and certified chiropractors in India with proper credentials." },
  { icon: Stethoscope, title: "FDA-Approved Equipment", desc: "All modern modalities from FDA-approved U.S.A equipment for safe, effective treatment." },
  { icon: UserCheck, title: "Personalized Care", desc: "Tailored treatment plans designed for each patient's unique condition and recovery goals." },
  { icon: Sparkles, title: "No Surgery, No Medicine", desc: "100% natural, non-invasive chiropractic techniques that let your body heal itself." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 gradient-section">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Quality Care, Every Patient, Every Time</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mx-auto mb-5">
              <f.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>


    </div>
  </section>
);

export default WhyChooseUs;
