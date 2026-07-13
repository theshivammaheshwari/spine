import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { servicesList } from "@/data/siteData";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="gradient-hero text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">Spinal Care Chiropractic Clinic</h3>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            Professional & Licensed Chiropractic Clinic in Jaipur. Your partner in wellness and spine health.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.instagram.com/drrajyavardhan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/rajyavardhan-singh-spine-chiropractic-b08920276/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/people/Rajyavardhan-Singh/61568623654439/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Gallery", path: "/gallery" },
              { label: "Testimonials", path: "/testimonials" },
              { label: "Contact", path: "/contact" }
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.path} className="hover:text-primary-foreground transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {servicesList.map((s) => (
              <li key={s}>
                <Link 
                  to={`/services/${s.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="hover:text-primary-foreground transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/80">
            <a href="tel:+917023898912" className="flex gap-2 items-start hover:text-primary-foreground transition-colors"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0" /> +91 7023898912</a>
            <a href="mailto:rajyavardhan2017@gmail.com" className="flex gap-2 items-start hover:text-primary-foreground transition-colors"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0" /> rajyavardhan2017@gmail.com</a>
            <div className="flex gap-2 items-start"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> House no -26, S.B vihar gate, Nanag vihar, 10, Swej Farm Rd, near relience smart point, Ramnagar Extension, Sodala, Jaipur, Rajasthan 302019</div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
        © 2026 Spinal Care Chiropractic Clinic. Best Chiropractor in Jaipur. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
