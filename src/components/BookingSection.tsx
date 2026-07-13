import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "919588925771";

const BookingSection = () => {
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
    <section id="booking" className="py-32 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 text-primary text-sm font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Book Appointment
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black text-foreground mt-2 mb-6 uppercase tracking-tight leading-[0.9]">
              Start Your Journey <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">To A Pain-Free Life</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Not every injury needs surgery. Experience the power of chiropractic to unlock your body's natural healing capabilities.
            </p>
            <div className="bg-secondary/50 p-6 rounded-2xl border border-white/5 inline-block">
              <p className="text-muted-foreground">
                Call <a href="tel:+919588925771" className="text-primary font-bold text-xl hover:text-white transition-colors ml-2">95889 25771</a> <br/> for a prior appointment or fill out the form.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl space-y-6"
          >
            <Input placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-xl h-14 bg-background border-white/10 text-foreground placeholder:text-muted-foreground" />
            <Input placeholder="Phone Number" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-xl h-14 bg-background border-white/10 text-foreground placeholder:text-muted-foreground" />
            <Input placeholder="Email Address (Optional)" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-xl h-14 bg-background border-white/10 text-foreground placeholder:text-muted-foreground" />
            <Textarea placeholder="Describe your condition..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-xl bg-background border-white/10 text-foreground placeholder:text-muted-foreground resize-none" />
            <Button type="submit" className="w-full h-16 bg-primary text-black hover:bg-emerald-400 font-bold text-lg rounded-xl transition-all shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:shadow-[0_0_50px_rgba(20,184,166,0.5)]">
              <Send className="w-5 h-5 mr-2" /> Request Appointment
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
