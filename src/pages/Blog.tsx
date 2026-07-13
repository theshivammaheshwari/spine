import BlogSection from "@/components/BlogSection";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Blog = () => (
  <Layout>
    <SEO 
      title="Blog | Spine Health & Wellness Tips" 
      description="Insights, tips, and news about chiropractic care, spine health, and holistic wellness from our experts in Jaipur."
      canonical="https://www.chiropractorjaipur.com/blog"
    />
    <BlogSection />
  </Layout>
);

export default Blog;
