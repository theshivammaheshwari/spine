import ContactSection from "@/components/ContactSection";
import BookingSection from "@/components/BookingSection";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Contact = () => (
  <Layout>
    <SEO 
      title="Contact Us | Book an Appointment in Jaipur" 
      description="Contact Dr. Harshvardhan Chiropractic Clinic for professional spine care. Book your appointment today and start your journey to pain-free living."
      canonical="https://www.chiropractorjaipur.com/contact"
    />
    <ContactSection />
    <BookingSection />
  </Layout>
);

export default Contact;
