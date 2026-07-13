import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO = ({ 
  title = "Dr. Harshvardhan Chiropractic Clinic Jaipur | Best Chiropractor in India", 
  description = "Top ranked spine chiropractor in Jaipur, India. Professional chiropractic care, spine correction, osteopathy. No surgery, no medicine.", 
  canonical = "https://www.chiropractorjaipur.com",
  ogType = "website",
  ogImage = "/logo.jpeg"
}: SEOProps) => {
  const fullTitle = title.includes("Spinal Care") ? title : `${title} | Dr. Harshvardhan Chiropractic Clinic`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Dr. Harshvardhan Chiropractic Clinic",
          "image": "https://www.chiropractorjaipur.com/logo.jpeg",
          "@id": "https://www.chiropractorjaipur.com",
          "url": "https://www.chiropractorjaipur.com",
          "telephone": "+919588925771",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "House no -26, S.B vihar gate, Nanag vihar, 10, Swej Farm Rd, near relience smart point, Ramnagar Extension, Sodala",
            "addressLocality": "Jaipur",
            "addressRegion": "RJ",
            "postalCode": "302019",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.890,
            "longitude": 75.760
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:00",
            "closes": "20:00"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
