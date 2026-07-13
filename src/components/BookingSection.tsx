import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "917023898912";

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
    <section id="booking" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Book Appointment</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Start Your Journey to a Pain-Free Life
            </h2>
            <p className="text-muted-foreground mb-4">
              Not every injury needs surgery. Experience the power of chiropractic to unlock your body's natural healing capabilities.
            </p>
            <p className="text-muted-foreground">
              Call <a href="tel:+917023898912" className="text-primary font-semibold">7023898912</a> for a prior appointment or fill out the form.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 shadow-elevated space-y-4"
          >
            <Input placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-xl h-12" />
            <Input placeholder="Phone Number" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-xl h-12" />
            <Input placeholder="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-xl h-12" />
            <Textarea placeholder="Describe your condition..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-xl" />
            <Button type="submit" size="lg" className="w-full gradient-hero text-primary-foreground rounded-xl gap-2">
              <Send className="w-5 h-5" /> Request Appointment
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
