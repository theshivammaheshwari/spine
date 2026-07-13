import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { doctor } from "@/data/siteData";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-white relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-50/50 rounded-bl-[100px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Contact Us
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Visit Our Clinic</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
          
          <div className="flex gap-5 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
              <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Clinic Address</h3>
              <a href="https://maps.app.goo.gl/KNbUom8mUeFJZLvu5" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-lg leading-relaxed block">
                333, Gurunanakpura, Tilak Nagar, <br />
                Jaipur, Rajasthan 302004
              </a>
            </div>
          </div>

          <div className="flex gap-5 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
              <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+919588925771" className="text-muted-foreground hover:text-primary transition-colors text-lg block">+91 95889 25771</a>
            </div>
          </div>

          <div className="flex gap-5 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
              <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:contact@drharshvardhan.com" className="text-muted-foreground hover:text-primary transition-colors text-lg block">contact@drharshvardhan.com</a>
            </div>
          </div>

          <div className="flex gap-5 items-start group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
              <Clock className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Working Hours</h3>
              <p className="text-muted-foreground text-lg">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground text-lg">Sunday: 9:00 AM - 7:30 PM</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px] border-4 border-white relative group cursor-pointer">
          <a href="https://maps.app.goo.gl/KNbUom8mUeFJZLvu5" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 block" aria-label="Open Google Maps">
             <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white text-primary font-bold px-6 py-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Open in Google Maps
                </div>
             </div>
          </a>
          <iframe
            src="https://maps.google.com/maps?q=Dr+Harshvardhan+Chaturvedi+-+Steps2recovery&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
