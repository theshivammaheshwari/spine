import GallerySection from "@/components/GallerySection";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Gallery = () => (
  <Layout>
    <SEO 
      title="Gallery | Spinal Care Chiropractic Clinic" 
      description="View photos of our clinic, treatment sessions, and patient recovery progress in Jaipur."
      canonical="https://www.chiropractorjaipur.com/gallery"
    />
    <GallerySection />
  </Layout>
);

export default Gallery;
