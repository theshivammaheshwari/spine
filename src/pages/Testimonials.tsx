import TestimonialsSection from "@/components/TestimonialsSection";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Testimonials = () => (
  <Layout>
    <SEO 
      title="Testimonials | Patient Success Stories" 
      description="Read what our patients say about their experience at Spinal Care Chiropractic Clinic. Real stories of pain relief and recovery."
      canonical="https://www.chiropractorjaipur.com/testimonials"
    />
    <TestimonialsSection />
  </Layout>
);

export default Testimonials;
