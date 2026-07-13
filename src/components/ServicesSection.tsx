import { motion } from "framer-motion";
import { Bone, Activity, Zap, Dumbbell, Brain, HeartPulse, ShieldAlert, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Bone, title: "Spine Alignment", slug: "spine-alignment", desc: "Correct spinal misalignment to relieve nerve pressure and restore natural body balance." },
  { icon: Activity, title: "Back Pain Treatment", slug: "back-pain", desc: "Comprehensive lower & upper back pain management using modern chiropractic techniques." },
  { icon: Brain, title: "Cervical Spine Adjustment", slug: "neck-pain", desc: "Expert neck pain therapy and cervical spine correction for lasting relief." },
  { icon: Zap, title: "Sciatica & Slip Disc", slug: "sciatica", desc: "Non-surgical treatment for sciatica and slipped disc problems with proven results." },
  { icon: ShieldAlert, title: "Herniated Disc", slug: "herniated-disc", desc: "Specialized non-surgical decompression and adjustment for herniated and bulging discs." },
  { icon: Bone, title: "Joint Pain Relief", slug: "joint-pain", desc: "Expert care for chronic joint pain in knees, hips, and wrists through precise adjustments." },
  { icon: Brain, title: "Migraine & Headache", slug: "migraine", desc: "Natural relief from chronic migraines and tension headaches by correcting cervical spine issues." },
  { icon: Zap, title: "Pinching Nerve", slug: "pinching-nerve", desc: "Effective treatment to release compressed nerves and restore normal neurological function." },
  { icon: Dumbbell, title: "Posture Correction", slug: "posture-correction", desc: "Advanced postural analysis and corrective exercises to fix modern 'tech neck' and slouching." },
  { icon: HeartPulse, title: "Acid Reflux (Acidity)", slug: "acid-reflux-acidity", desc: "Holistic chiropractic approach to help manage digestive issues and acid reflux naturally." },
  { icon: Dumbbell, title: "Sports Injury Rehab", slug: "spine-alignment", desc: "Specialized rehabilitation for sports injuries focusing on mobility and performance recovery." },
  { icon: HeartPulse, title: "Osteopathy & Acupuncture", slug: "osteopathy", desc: "Holistic treatments combining osteopathy and acupuncture for permanent pain elimination." },
];

const ServicesSection = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Comprehensive Chiropractic Care</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">From spine alignment to sports injury rehabilitation — we offer a full range of non-surgical, drug-free treatments.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
          >
            <Link to={`/services/${s.slug}`} className="block">
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Frozen Shoulder - Full Width with Detail on Right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 bg-card rounded-3xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left - Service Card Style */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center mb-5">
              <ShieldAlert className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
              <span className="text-gradient">Frozen Shoulder</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Treating glenohumeral joint fixation, scapulothoracic dysfunction, cervical spine involvement (C4–C6), and muscle imbalance — focusing on the entire kinetic chain, not just the shoulder joint.
            </p>
          </div>
          {/* Right - Chiropractic Approach Detail */}
          <div className="p-8 md:p-10 bg-muted/30 border-t md:border-t-0 md:border-l border-border/50">
            <h4 className="font-display text-lg font-bold text-foreground mb-4">Chiropractic Approach</h4>
            <p className="text-muted-foreground text-sm mb-3">A chiropractor typically sees frozen shoulder as a combination of:</p>
            <ul className="space-y-2 mb-4">
              <li className="flex gap-2 text-sm"><span className="text-primary font-bold">•</span> <span className="text-muted-foreground"><strong className="text-foreground">Glenohumeral joint fixation</strong> — true capsular restriction</span></li>
              <li className="flex gap-2 text-sm"><span className="text-primary font-bold">•</span> <span className="text-muted-foreground"><strong className="text-foreground">Scapulothoracic dysfunction</strong> — poor shoulder blade movement</span></li>
              <li className="flex gap-2 text-sm"><span className="text-primary font-bold">•</span> <span className="text-muted-foreground"><strong className="text-foreground">Cervical spine involvement</strong> — especially C4–C6 nerve contribution</span></li>
              <li className="flex gap-2 text-sm"><span className="text-primary font-bold">•</span> <span className="text-muted-foreground"><strong className="text-foreground">Muscle imbalance + guarding</strong></span></li>
            </ul>
            <p className="text-muted-foreground text-sm font-medium italic">The focus is not only the shoulder joint — but the entire kinetic chain.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
