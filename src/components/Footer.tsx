import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { servicesList } from "@/data/siteData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative bg-background text-foreground pt-32 pb-12 overflow-hidden border-t border-white/5">
    {/* Background elements */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

    <div className="container mx-auto px-4 relative z-10">
      
      {/* Massive Typography CTA */}
      <div className="flex flex-col items-center text-center mb-32">
        <h2 className="font-display text-6xl md:text-[8rem] lg:text-[12rem] font-black leading-[0.8] tracking-tighter mb-8 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
          Ready <br/> To Heal?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          <a href="https://wa.me/919588925771?text=Hi%2C%20I%20want%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 h-16 px-10 rounded-full bg-primary text-black font-bold text-lg overflow-hidden transition-all hover:scale-105">
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
              Book Appointment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 border-t border-white/10 pt-16">
        <div className="lg:col-span-1">
          <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black text-xs">HC</div>
            Dr. Harshvardhan
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Pioneering advanced, non-surgical spine correction and osteopathy in Jaipur.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/drharshvardhann_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-black flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/dr-harshvardhan-chaturvedi-b18108268/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-black flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@drHarshvardhanchiropactor/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-black flex items-center justify-center transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-1">
          <h4 className="font-display font-semibold text-lg mb-6 text-white">Explore</h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "About Clinic", path: "/about" },
              { label: "Treatments", path: "/services" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact Us", path: "/contact" }
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.path} className="hover:text-primary transition-colors inline-block">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h4 className="font-display font-semibold text-lg mb-6 text-white">Specialties</h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            {servicesList.slice(0, 5).map((s) => (
              <li key={s}>
                <Link 
                  to={`/services/${s.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="hover:text-primary transition-colors inline-block"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h4 className="font-display font-semibold text-lg mb-6 text-white">Contact Info</h4>
          <div className="space-y-4 text-muted-foreground text-sm">
            <a href="tel:+919588925771" className="flex gap-3 items-center hover:text-primary transition-colors group">
              <Phone className="w-4 h-4" />
              <span>+91 95889 25771</span>
            </a>
            <div className="flex gap-3 items-start group">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="leading-relaxed">333, Gurunanakpura, Tilak Nagar, Jaipur, Rajasthan 302004</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2026 Dr. Harshvardhan Chiropractic Clinic. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
