import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { stats } from "@/data/siteData";

const HeroSection = () => (
  <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-background pt-20">
    {/* Dynamic Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] mix-blend-multiply opacity-70 animate-pulse-soft" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[100px] mix-blend-multiply opacity-60 animate-pulse-soft" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[80px] mix-blend-multiply opacity-50" />
    </div>

    <div className="container mx-auto px-4 relative z-10 py-12 lg:py-20">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-primary">Accepting New Patients</span>
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
            Advanced Spine Care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600">Without Surgery</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            Experience premium chiropractic care by <strong className="text-foreground font-semibold">Dr. Harshvardhan Chaturvedi</strong>. Expert spine correction, osteopathy, and lasting pain relief in Jaipur.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="https://wa.me/919588925771?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 transition-opacity opacity-100 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-opacity opacity-0 group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2">Book Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </a>
            
            <a href="tel:+919588925771" className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-white/80 backdrop-blur-sm border border-border/50 text-foreground font-medium hover:bg-white transition-all hover:shadow-lg">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              95889 25771
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>Certified Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span>Modern Equipments</span>
            </div>
          </div>
        </motion.div>

        {/* Right Image Area */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
          className="lg:col-span-5 relative"
        >
          {/* Main Image Container */}
          <div className="relative w-full max-w-[450px] mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-primary/5 to-primary/20 border border-white/50 shadow-2xl">
            <img
              src="/doctor.png"
              alt="Dr. Harshvardhan Chaturvedi"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Glass Gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-6 md:-left-12 glass p-4 rounded-2xl flex items-center gap-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-xl font-bold text-blue-600">4+</span>
            </div>
            <div>
              <div className="font-semibold text-foreground">Years Experience</div>
              <div className="text-xs text-muted-foreground">Expert Care</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -right-4 md:-right-8 glass p-4 rounded-2xl flex items-center gap-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-xl font-bold text-green-600">5k+</span>
            </div>
            <div>
              <div className="font-semibold text-foreground">Patients Cured</div>
              <div className="text-xs text-muted-foreground">Trusted Provider</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
