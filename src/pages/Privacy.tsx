import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Privacy = () => (
  <Layout>
    <SEO 
      title="Privacy Policy | Dr. Harshvardhan Chiropractic Clinic" 
      description="Privacy Policy for Dr. Harshvardhan Chiropractic Clinic in Jaipur."
      canonical="https://www.chiropractorjaipur.com/privacy-policy"
    />
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-muted-foreground text-lg">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
          <p>We may collect personal information such as your name, phone number, email address, and medical history when you book an appointment or consult with us. This information is strictly confidential and used solely to provide you with the best possible care.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
          <p>Your information is used to schedule appointments, communicate with you regarding your treatment, and maintain accurate medical records as required by law. We do not sell or share your personal information with third parties for marketing purposes.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All physical and digital records are stored securely.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Cookies and Website Tracking</h2>
          <p>Our website may use cookies to enhance your browsing experience and analyze website traffic. You can choose to disable cookies through your browser settings.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Changes to This Policy</h2>
          <p>We reserve the right to update this privacy policy at any time. Any changes will be posted on this page with an updated revision date.</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Contact Us</h2>
          <p>If you have any questions about our privacy policy, please contact us at:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Address: 333, Gurunanakpura, Tilak Nagar, Jaipur, Rajasthan 302004</li>
            <li>Phone: +91 95889 25771</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default Privacy;
