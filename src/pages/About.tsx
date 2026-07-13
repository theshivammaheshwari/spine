import AboutSection from "@/components/AboutSection";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const About = () => (
  <Layout>
    <SEO 
      title="About Us | Spinal Care Chiropractic Clinic" 
      description="Learn about Mr. Rajyavardhan and the team at Spinal Care Chiropractic Clinic in Jaipur. We specialize in non-surgical spine pain relief."
      canonical="https://www.chiropractorjaipur.com/about"
    />
    <AboutSection />
  </Layout>
);

export default About;
