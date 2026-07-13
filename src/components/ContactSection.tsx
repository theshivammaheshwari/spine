import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Visit Our Clinic</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">Address</h3>
              <p className="text-muted-foreground text-sm">House no -26, S.B vihar gate, Nanag vihar, 10, Swej Farm Rd, near relience smart point, Ramnagar Extension, Sodala, Jaipur, Rajasthan 302019</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">Phone</h3>
              <a href="tel:+917023898912" className="text-primary font-medium">+91 7023898912</a>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
              <a href="mailto:rajyavardhan2017@gmail.com" className="text-primary font-medium">rajyavardhan2017@gmail.com</a>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">Working Hours</h3>
              <p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground text-sm">Sunday: 9:00 AM - 7:30 PM</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-elevated h-80 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2!2d75.7725542!3d26.8871956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db576ae709059%3A0xbcb91f3e4f81997d!2sSpinal%20Care%20Chiropractic%20Clinic!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
