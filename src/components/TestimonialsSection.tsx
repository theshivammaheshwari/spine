import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/siteData";

const TestimonialsSection = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">What Our Patients Say</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[idx].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-lg italic mb-6">"{testimonials[idx].text}"</p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[idx].image}
                  alt={testimonials[idx].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  loading="lazy"
                />
                <div className="text-left">
                  <div className="font-display font-semibold text-foreground">{testimonials[idx].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[idx].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:shadow-elevated transition-shadow text-foreground">
              <ChevronLeft className="w-5 h-5" />
            </button>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-muted"}`}
              />
            ))}
            <button onClick={next} className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:shadow-elevated transition-shadow text-foreground">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
