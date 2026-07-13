import { useParams, Link } from "react-router-dom";
import { servicesDetails } from "@/data/servicesData";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import BookingSection from "@/components/BookingSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesDetails[slug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Service Not Found</h1>
          <Link to="/services" className="text-primary mt-4 inline-block">Back to Services</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title={service.title} 
        description={service.description}
        canonical={`https://www.chiropractorjaipur.com/services/${service.slug}`}
      />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 border-b border-border/50">
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{service.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">{service.title}</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
            <p className="text-xl text-foreground font-medium mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-soft mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Treatment Overview</h2>
              <p className="leading-relaxed">
                {service.content}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-4">Why Us?</h3>
                <ul className="space-y-3">
                  {["Expert Care", "Non-Surgical", "No Medicine", "Proven Results"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent/5 p-8 rounded-3xl border border-accent/10">
                <h3 className="text-xl font-bold text-accent mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {["Pain Relief", "Better Mobility", "Improved Balance", "Long-term Health"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                    <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      
      <BookingSection />
    </Layout>
  );
};

export default ServiceDetail;
