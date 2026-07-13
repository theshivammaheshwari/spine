import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Index = () => (
  <Layout>
    <SEO />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WhyChooseUs />
    <TestimonialsSection />
    <GallerySection />
    <BlogSection />
    <BookingSection />
    <ContactSection />
  </Layout>
);

export default Index;
