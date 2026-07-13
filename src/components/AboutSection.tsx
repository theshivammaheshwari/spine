import { motion } from "framer-motion";
import { Shield, Award, Heart, CheckCircle2 } from "lucide-react";
import { doctor } from "@/data/siteData";

const badges = [
  { icon: Shield, label: "Licensed & Certified" },
  { icon: Award, label: "Top Ranked in India" },
  { icon: Heart, label: "5,000+ Patients" },
];

const AboutSection = () => (
  <section id="about" className="py-32 relative bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Sticky Images */}
        <div className="relative lg:sticky lg:top-32 h-[80vh] w-full rounded-[2.5rem] overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
          <img 
            src="/2.webp" 
            alt="Clinic Care" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
          />
          <div className="absolute inset-0 border border-primary/20 rounded-[2.5rem] z-20 pointer-events-none" />
          
          <div className="absolute bottom-8 left-8 right-8 p-8 bg-black/40 backdrop-blur-xl rounded-3xl z-30 border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-2xl font-display font-medium text-white mb-2">100% Commitment</p>
            <p className="text-base text-white/70">To your spinal health and recovery.</p>
          </div>
        </div>

        {/* Right Side: Scrolling Content */}
        <div className="flex flex-col justify-center py-12 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 text-primary text-sm font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              About The Doctor
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl font-black text-foreground leading-[0.9] mb-8 uppercase tracking-tight">
              Pioneering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Spinal Health</span>
            </h2>
            
            <div className="prose prose-lg prose-invert text-muted-foreground mb-12">
              <p className="leading-relaxed text-xl font-light">
                {doctor.bio}
              </p>
            </div>

            <div className="bg-secondary/50 p-8 rounded-3xl border border-white/5 mb-12 relative overflow-hidden group">
              <div className="absolute left-0 top-0 w-1 h-full bg-primary transition-all duration-300 group-hover:w-full group-hover:opacity-5" />
              <p className="text-foreground/90 italic text-2xl leading-relaxed relative z-10 font-medium">
                "{doctor.quote}"
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-none">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/50 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-medium text-foreground">{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;
