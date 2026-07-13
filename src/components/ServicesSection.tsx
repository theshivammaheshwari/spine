import { useState } from "react";
import { motion } from "framer-motion";
import { Bone, Activity, Zap, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Bone, title: "Spine Alignment", slug: "spine-alignment", desc: "Correct spinal misalignment to relieve nerve pressure and restore natural body balance.", image: "/1.webp" },
  { icon: Activity, title: "Back Pain", slug: "back-pain", desc: "Comprehensive lower & upper back pain management using modern chiropractic techniques.", image: "/2.webp" },
  { icon: Brain, title: "Cervical Spine", slug: "neck-pain", desc: "Expert neck pain therapy and cervical spine correction for lasting relief.", image: "/3.webp" },
  { icon: Zap, title: "Sciatica Relief", slug: "sciatica", desc: "Non-surgical treatment for sciatica and slipped disc problems with proven results.", image: "/4.webp" },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-32 relative bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 text-primary text-sm font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Specialized Care
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-black text-foreground uppercase tracking-tight">
              Clinical <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Treatments.</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row h-[800px] lg:h-[600px] w-full max-w-6xl mx-auto gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className={`relative rounded-3xl overflow-hidden cursor-none transition-all duration-700 ease-[0.16,1,0.3,1] ${
                hoveredIndex === i ? "flex-[4] lg:flex-[3]" : "flex-[1]"
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
            >
              <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-700" style={{ opacity: hoveredIndex === i ? 0.3 : 0.7 }} />
              <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 grayscale" style={{ transform: hoveredIndex === i ? "scale(1.05)" : "scale(1.2)", filter: hoveredIndex === i ? "grayscale(0%)" : "grayscale(100%)" }} />
              
              <Link to={`/services/${s.slug}`} className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 
                    className="font-display text-2xl md:text-3xl font-bold text-white transition-all duration-500 whitespace-nowrap"
                    style={{
                      opacity: hoveredIndex === i ? 1 : 0,
                      transform: hoveredIndex === i ? "translateX(0)" : "translateX(-20px)"
                    }}
                  >
                    {s.title}
                  </h3>
                </div>
                
                <div className={`overflow-hidden transition-all duration-700 ${hoveredIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-white/80 text-lg mb-6 line-clamp-2">
                    {s.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
