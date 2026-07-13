import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/siteData";
import { clinicImages } from "@/data/siteData";
import heroPatientCutout from "@/assets/hero-patient-cutout.jpeg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 gradient-hero opacity-5 pointer-events-none" />
    <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

    <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            🏆 Top Ranked Spine Chiropractor in Jaipur
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Get Relief from <span className="text-gradient">Spine Pain</span> Without Surgery
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mb-8">
            Professional chiropractic care by Mr. Rajyavardhan — licensed chiropractor, spine correction expert &amp; osteopath in Jaipur. No surgery, no medicine.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+917023898912" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full gradient-hero text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition-shadow text-sm">
              <Phone className="w-5 h-5" /> Call 7023898912
            </a>
            <a href="https://wa.me/917023898912?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-primary/30 text-primary hover:bg-primary/5 font-medium text-sm transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book Appointment
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.15 }}>
                <div className="text-2xl md:text-3xl font-bold text-gradient">{s.num}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="relative flex justify-center">
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 rounded-full gradient-hero opacity-10 animate-pulse-soft" />
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full gradient-hero opacity-80" />
              <img
                src={heroPatientCutout}
                alt="Chiropractic treatment in clinic"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-xl border-4 border-primary/20"
                style={{ aspectRatio: 1 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
