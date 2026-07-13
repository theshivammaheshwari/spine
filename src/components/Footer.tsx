import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { servicesList } from "@/data/siteData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative bg-zinc-950 text-white pt-24 pb-12 overflow-hidden">
    {/* Background elements */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      
      {/* Bold CTA Area */}
      <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 border border-white/10 rounded-[2rem] p-10 md:p-16 mb-20 text-center relative overflow-hidden backdrop-blur-md">
        <div className="absolute inset-0 bg-white/5" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Pain-Free?</span>
          </h2>
          <p className="text-zinc-300 text-lg mb-10">
            Book your consultation with Dr. Harshvardhan Chaturvedi today and take the first step towards a healthier, active lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.2)] w-full sm:w-auto">
              Book Appointment <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+919588925771" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all w-full sm:w-auto">
              <Phone className="w-5 h-5" /> +91 95889 25771
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        <div className="lg:col-span-4">
          <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">HC</div>
            Dr. Harshvardhan
          </h3>
          <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-sm">
            Pioneering advanced, non-surgical spine correction and osteopathy in Jaipur.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/drharshvardhann_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 flex items-center justify-center transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/dr-harshvardhan-chaturvedi-b18108268/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 flex items-center justify-center transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@drHarshvardhanchiropactor/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 flex items-center justify-center transition-all">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display font-semibold text-lg mb-6 text-white">Explore</h4>
          <ul className="space-y-3 text-zinc-400">
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

        <div className="lg:col-span-3">
          <h4 className="font-display font-semibold text-lg mb-6 text-white">Specialties</h4>
          <ul className="space-y-3 text-zinc-400">
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

        <div className="lg:col-span-3">
          <h4 className="font-display font-semibold text-lg mb-6 text-white">Contact Info</h4>
          <div className="space-y-4 text-zinc-400">
            <a href="tel:+919588925771" className="flex gap-3 items-center hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20"><Phone className="w-4 h-4" /></div>
              <span>+91 95889 25771</span>
            </a>
            <a href="mailto:contact@drharshvardhan.com" className="flex gap-3 items-center hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20"><Mail className="w-4 h-4" /></div>
              <span>contact@drharshvardhan.com</span>
            </a>
            <div className="flex gap-3 items-start group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20"><MapPin className="w-4 h-4" /></div>
              <span className="leading-relaxed pt-2">333, Gurunanakpura, Tilak Nagar, Jaipur, Rajasthan 302004</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>© 2026 Dr. Harshvardhan Chiropractic Clinic. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
