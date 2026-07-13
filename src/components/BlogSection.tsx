import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const blogPosts = [
  {
    title: "Chiropractic Care Now in India with Licensed Practitioner",
    content: `A chiropractor is a primary care doctor who specializes in spinal health and well-being. They focus on the prevention, diagnosis and conservative care of spine-related disorders and other painful joint issues. In addition to adjustments, chiropractors also provide soft-tissue therapies, lifestyle recommendations, fitness coaching, and nutritional advice. Apart from that we also add acupuncture treatment to our patients in their early and or final stages of their treatments which has returned very good results to eliminate the pain permanently.`,
  },
  {
    title: "Introduction to Chiropractic Care",
    content: `Chiropractic care has a rich and diverse history that dates back thousands of years. This holistic approach to health focuses on the diagnosis and treatment of mechanical disorders of the musculoskeletal system, primarily the spine. Understanding chiropractic history offers invaluable insights into its evolution and acceptance in modern medicine.`,
  },
  {
    title: "The Foundations of Chiropractic",
    content: `Chiropractic principles can be traced back to ancient civilizations, where healing practices included manipulation of the spine and joints. However, the formal beginning of chiropractic is attributed to Daniel David Palmer, who founded the profession in 1895. Palmer's initial adjustment of a patient's spine paved the way for the establishment of the first chiropractic school, Palmer College of Chiropractic, in 1897.`,
  },
  {
    title: "Growth and Acceptance of Chiropractic Practices",
    content: `Throughout the 20th century, chiropractic care began to gain acceptance among both the public and the medical community. Despite facing skepticism and legal challenges, advocates for chiropractic history worked tirelessly to establish the profession as credible and effective. By the mid-1900s, many states recognized chiropractic care, leading to extensive research and the establishment of licensing laws. Today, chiropractic care is widely acknowledged as a complementary treatment for various musculoskeletal conditions.\n\nIn conclusion, the history of chiropractic care not only reflects the advancements in healing practices over the centuries but also showcases its resilience and adaptation. As chiropractic continues to evolve, it remains dedicated to improving the quality of life through non-invasive and holistic treatment methods.`,
  },
];

const BlogSection = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="blog" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Blog</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Learn About Chiropractic Care
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl shadow-card overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
              >
                <h3 className="font-display text-lg font-semibold text-foreground pr-4">
                  {post.title}
                </h3>
                {expanded === i ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {post.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
