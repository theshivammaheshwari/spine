import { motion } from "framer-motion";
import { Shield, Award, Heart, CheckCircle2 } from "lucide-react";
import { doctor } from "@/data/siteData";

const badges = [
  { icon: Shield, label: "Licensed & Certified" },
  { icon: Award, label: "Top Ranked in India" },
  { icon: Heart, label: "5,003+ Patients" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden bg-white">
    {/* Background Decorations */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 to-primary/5 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Images & Badges (Asymmetric) */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -40, rotate: -5 }} 
            whileInView={{ opacity: 1, x: 0, rotate: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="relative z-10 w-4/5 ml-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <div className="aspect-[4/5] bg-gradient-to-tr from-primary to-blue-400 relative">
              <img src="/2.webp" alt="Clinic" className="w-full h-full object-cover mix-blend-overlay opacity-90" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-10 left-0 w-2/3 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20"
          >
             <div className="aspect-square bg-white relative">
              <img src="/3.webp" alt="Care" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-1/2 -left-8 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-2xl z-30 border border-blue-50"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary fill-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Commitment</div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide uppercase mb-6 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-primary" />
            About The Doctor
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Spinal Health</span> in Jaipur.
          </h2>
          
          <div className="prose prose-lg text-muted-foreground mb-8">
            <p className="leading-relaxed">
              {doctor.bio}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 p-8 rounded-3xl border border-blue-100/50 mb-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary transition-all duration-300 group-hover:w-2" />
            <p className="text-foreground/80 italic text-lg leading-relaxed relative z-10 font-medium">
              "{doctor.quote}"
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {badges.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-base font-semibold text-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default AboutSection;
