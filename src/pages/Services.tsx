import ServicesSection from "@/components/ServicesSection";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Services = () => (
  <Layout>
    <SEO 
      title="Our Services | Chiropractic Care in Jaipur" 
      description="Comprehensive chiropractic care for back pain, neck pain, sciatica, herniated discs, and more. No surgery, no medicine."
      canonical="https://www.chiropractorjaipur.com/services"
    />
    <ServicesSection />
  </Layout>
);

export default Services;
