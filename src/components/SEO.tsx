import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO = ({ 
  title = "Dr. Harshvardhan Chaturvedi | Best Chiropractor in Jaipur", 
  description = "Top ranked spine chiropractor in Jaipur, Rajasthan. Professional chiropractic care, spine correction, and osteopathy by Dr. Harshvardhan Chaturvedi. No surgery, no medicine.", 
  canonical = "https://drharshvardhan.com",
  ogType = "website",
  ogImage = "/doctor.png"
}: SEOProps) => {
  const fullTitle = title.includes("Harshvardhan") ? title : `${title} | Dr. Harshvardhan Chiropractic Clinic`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Chiropractor in Jaipur, Best Chiropractor Jaipur, Spine Alignment, Back Pain Treatment Jaipur, Sciatica Treatment, Cervical Spondylosis, Osteopathy Jaipur, Dr Harshvardhan Chaturvedi, Slip Disc Treatment" />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org / Local SEO (GEO) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Dr. Harshvardhan Chiropractic Clinic - Steps2recovery",
          "image": "https://drharshvardhan.com/doctor.png",
          "@id": "https://drharshvardhan.com",
          "url": "https://drharshvardhan.com",
          "telephone": "+919588925771",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "333, Gurunanakpura, Tilak Nagar",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "postalCode": "302004",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.8965381,
            "longitude": 75.8213962
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "09:00",
              "closes": "19:30"
            }
          ],
          "sameAs": [
            "https://www.instagram.com/drharshvardhann_/",
            "https://www.linkedin.com/in/dr-harshvardhan-chaturvedi-b18108268/",
            "https://www.youtube.com/@drHarshvardhanchiropactor/"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
