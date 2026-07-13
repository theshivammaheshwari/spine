import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, Star, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "919588925771";

const reasons = [
  "No Surgery · No Medicine",
  "4+ Years Experience",
  "5,000+ Patients Treated",
  "Licensed & Certified Chiropractor",
  "FDA Approved Equipment (USA)",
  "Trusted by Defence & Govt Officers",
];

const testimonials = [
  {
    name: "Shivam Maheshwari",
    text: "Within just 2 sessions, my spine was completely aligned and the pain was gone. Highly recommended!",
    stars: 5,
  },
  {
    name: "Dini",
    text: "I've taken treatment from so many chiropractors but didn't get relief. Here my search ends. He saved my surgery.",
    stars: 5,
  },
  {
    name: "Prashant Saxena",
    text: "After years of chronic back pain, I finally found relief. I'm now able to live my life pain-free.",
    stars: 5,
  },
];

const Appointment = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `*New Appointment Request*`,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : "",
      form.message ? `*Condition:* ${form.message}` : "",
    ].filter(Boolean).join("%0A");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    toast({ title: "Redirecting to WhatsApp!", description: "Complete sending the message to confirm your appointment." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <>
      <SEO
        title="Book Appointment | Best Chiropractor in Jaipur | Dr. Harshvardhan Clinic"
        description="Book your chiropractic appointment at Dr. Harshvardhan Clinic, Jaipur. Expert treatment for back pain, neck pain, sciatica & spine issues. No surgery. No medicine. Call +91 9588925771."
        canonical="https://www.chiropractorjaipur.com/appointment"
      />

      <div className="min-h-screen bg-background">
        {/* Minimal header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border/50 py-3 px-4 flex items-center justify-between">
          <Link to="/" className="font-display text-base md:text-lg font-bold text-primary">
            Dr. Harshvardhan Chiropractic Clinic<span className="text-accent">.</span>
          </Link>
          <a href="tel:+919588925771" className="inline-flex items-center gap-2 h-9 px-4 rounded-full gradient-hero text-primary-foreground text-sm font-medium">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </header>

        <div className="pt-16">
          {/* Hero Banner */}
          <div className="gradient-hero text-primary-foreground py-14 px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                🏆 Top Ranked Chiropractor in Jaipur
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Get Rid of Spine Pain<br />Without Surgery or Medicine
              </h1>
              <p className="text-primary-foreground/90 text-lg max-w-xl mx-auto mb-6">
                Expert chiropractic care by Dr. Harshvardhan Chaturvedi — Licensed Chiropractor & Osteopath in Jaipur with 4+ years experience.
              </p>
              <a href="tel:+919588925771" className="inline-flex items-center gap-2 bg-white text-primary font-bold h-12 px-8 rounded-full text-base hover:bg-white/90 transition-colors">
                <Phone className="w-5 h-5" /> Call: +91 95889 25771
              </a>
            </motion.div>
          </div>

          <div className="container mx-auto px-4 py-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left Column — Trust Signals */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Why Choose Us?
                </h2>
                <ul className="space-y-3 mb-10">
                  {reasons.map((r) => (
                    <li key={r} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{r}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 text-sm text-muted-foreground mb-10">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>House no-26, S.B Vihar Gate, Swej Farm Rd, Sodala, Jaipur – 302019</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href="tel:+919588925771" className="text-primary font-semibold">+91 95889 25771</a>
                  </div>
                </div>

                {/* Patient Reviews */}
                <h3 className="font-display text-lg font-bold text-foreground mb-4">Patient Reviews</h3>
                <div className="space-y-4">
                  {testimonials.map((t) => (
                    <div key={t.name} className="bg-card rounded-2xl p-5 border border-border/50 shadow-soft">
                      <div className="flex mb-2">
                        {[...Array(t.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm italic mb-2">"{t.text}"</p>
                      <p className="text-foreground font-semibold text-sm">— {t.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column — Appointment Form */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <div className="bg-card rounded-3xl p-8 shadow-elevated border border-border/50 sticky top-24">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
                    Book Free Consultation
                  </h2>
                  <p className="text-muted-foreground text-sm text-center mb-6">Fill the form and we'll contact you within 24 hours</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Full Name *"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="rounded-xl h-12"
                    />
                    <Input
                      placeholder="Phone Number *"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="rounded-xl h-12"
                    />
                    <Input
                      placeholder="Email Address"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="rounded-xl h-12"
                    />
                    <Textarea
                      placeholder="Describe your condition (e.g. back pain, sciatica, neck pain...)"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="rounded-xl"
                    />
                    <Button type="submit" size="lg" className="w-full gradient-hero text-primary-foreground rounded-xl gap-2 h-12 text-base font-semibold">
                      <Send className="w-5 h-5" /> Book via WhatsApp
                    </Button>
                  </form>

                  <div className="mt-4 text-center">
                    <span className="text-muted-foreground text-sm">or call directly: </span>
                    <a href="tel:+919588925771" className="text-primary font-bold text-sm">+91 95889 25771</a>
                  </div>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    ✅ No surgery · No medicine · 5,000+ patients treated
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Dr. Harshvardhan Chiropractic Clinic, Jaipur. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Appointment;
