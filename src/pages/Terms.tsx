import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Terms = () => (
  <Layout>
    <SEO 
      title="Terms of Service | Dr. Harshvardhan Chiropractic Clinic" 
      description="Terms of Service for Dr. Harshvardhan Chiropractic Clinic in Jaipur."
      canonical="https://www.chiropractorjaipur.com/terms-of-service"
    />
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-muted-foreground text-lg">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, or by booking an appointment at Dr. Harshvardhan Chiropractic Clinic, you accept and agree to be bound by the terms and provisions of this agreement.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Medical Disclaimer</h2>
          <p>The content provided on this website is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Appointment and Cancellation Policy</h2>
          <p>We require prior notice for any appointment cancellations. Failure to show up for an appointment without prior notice may result in a cancellation fee. Please arrive on time for your scheduled appointments to ensure you receive your full treatment time.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Patient Conduct</h2>
          <p>We are committed to providing a safe and respectful environment for our patients and staff. Any form of harassment or inappropriate behavior will not be tolerated and may result in the termination of care.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Modifications to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Your continued use of the website and our services following any changes signifies your acceptance of the new terms.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Contact Information</h2>
          <p>For any questions regarding these terms, please contact us at:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Address: 333, Gurunanakpura, Tilak Nagar, Jaipur, Rajasthan 302004</li>
            <li>Phone: +91 95889 25771</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default Terms;
