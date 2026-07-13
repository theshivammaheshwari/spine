import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Stethoscope, UserCheck, Sparkles } from "lucide-react";
import { useRef } from "react";

const features = [
  { icon: ShieldCheck, title: "Licensed & Certified", desc: "One of the few licensed and certified chiropractors in India with proper credentials." },
  { icon: Stethoscope, title: "FDA-Approved Equipment", desc: "All modern modalities from FDA-approved U.S.A equipment for safe, effective treatment." },
  { icon: UserCheck, title: "Personalized Care", desc: "Tailored treatment plans designed for each patient's unique condition and recovery goals." },
  { icon: Sparkles, title: "No Surgery, No Medicine", desc: "100% natural, non-invasive chiropractic techniques that let your body heal itself." },
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} id="why-us" className="py-32 bg-secondary/30 border-y border-white/5 overflow-hidden">
      
      {/* Infinite Scrolling Marquees */}
      <div className="flex flex-col gap-4 mb-32 opacity-20 pointer-events-none">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap font-display text-7xl md:text-9xl font-black uppercase text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)', x: x1 }}>
          Quality Care • Every Patient • Every Time • Quality Care • Every Patient • Every Time
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap font-display text-7xl md:text-9xl font-black uppercase text-transparent" style={{ WebkitTextStroke: '2px rgba(20,184,166,0.6)', x: x2 }}>
          No Surgery • No Medicine • Natural Healing • No Surgery • No Medicine • Natural Healing
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 -mt-40">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-background border border-white/10 rounded-[2rem] p-10 lg:p-12 group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <f.icon className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
                </div>
                <div className="text-6xl font-display font-black text-white/5 group-hover:text-primary/20 transition-colors">
                  0{i + 1}
                </div>
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">{f.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
