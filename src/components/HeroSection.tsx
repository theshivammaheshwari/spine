import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-background pt-32 pb-48 lg:pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-primary/20 blur-[120px] mix-blend-screen opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase mb-8"
        >
          <Activity className="w-4 h-4" />
          <span>Advanced Spine & Sports Rehab</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] font-black leading-[0.85] tracking-tighter text-foreground mb-6 uppercase"
        >
          Heal <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Naturally</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light"
        >
          Premium chiropractic care and osteopathy in Jaipur by Dr. Harshvardhan Chaturvedi. No surgery. No medicine. Just results.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 items-center relative z-30"
        >
          <a href="https://wa.me/919588925771?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 h-16 px-10 rounded-full bg-primary text-primary-foreground font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(20,184,166,0.4)]">
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
              Book Session <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-0 sm:px-4 pointer-events-none z-10 flex justify-center"
      >
        <img 
          src="/doctor.png" 
          alt="Dr. Harshvardhan" 
          className="w-[120%] sm:w-full max-w-3xl object-contain object-bottom filter drop-shadow-2xl opacity-80"
          style={{ WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)', maskImage: 'linear-gradient(to top, black 50%, transparent 100%)' }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
