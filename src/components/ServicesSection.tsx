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
];

const ServicesSection = () => (
  <section id="services" className="py-24 relative overflow-hidden bg-zinc-50">
    <div className="container mx-auto px-4 relative z-10">
      
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Specialized Care
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight">
            Comprehensive <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Treatments.</span>
          </h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-md">
          <p className="text-muted-foreground text-lg leading-relaxed">
            From targeted spine alignment to holistic rehabilitation, we offer advanced, non-surgical therapies to get you back to living pain-free.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
            className={`group relative rounded-[2rem] p-8 md:p-10 transition-all duration-500 overflow-hidden ${
              i === 0 || i === 3 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-blue-700 text-white" : "bg-white border border-border shadow-xl hover:shadow-2xl"
            }`}
          >
            {/* Background flourish for solid colored cards */}
            {(i === 0 || i === 3) && (
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            )}
            
            <Link to={`/services/${s.slug}`} className="flex flex-col h-full relative z-10">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${
                i === 0 || i === 3 ? "bg-white/20 backdrop-blur-md" : "bg-blue-50 text-primary"
              }`}>
                <s.icon className={`w-8 h-8 ${i === 0 || i === 3 ? "text-white" : "text-primary"}`} />
              </div>
              
              <h3 className={`font-display text-2xl font-bold mb-4 ${i === 0 || i === 3 ? "text-white" : "text-foreground"}`}>
                {s.title}
              </h3>
              
              <p className={`text-base leading-relaxed mb-8 flex-grow ${i === 0 || i === 3 ? "text-white/80" : "text-muted-foreground"}`}>
                {s.desc}
              </p>
              
              <div className={`inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group-hover:gap-4 ${
                i === 0 || i === 3 ? "text-white" : "text-primary"
              }`}>
                Explore Therapy <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <Link to="/services" className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-white border border-border/50 text-foreground font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl group">
          View All Treatments
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </motion.div>

    </div>
  </section>
);

export default ServicesSection;
