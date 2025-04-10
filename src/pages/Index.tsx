
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>QueryBee - AI-Powered Knowledge Base for Small and Medium Businesses</title>
        <meta name="description" content="QueryBee helps small and medium businesses capture, organize, and retrieve internal knowledge with powerful AI. Search naturally and get instant answers from your company data." />
        <meta name="keywords" content="knowledge base, AI search, document management, SMBs, internal documentation, semantic search" />
        <StructuredData
          type="organization"
          data={{
            name: 'QueryBee',
            url: 'https://querybee.com',
            logo: 'https://querybee.com/logo.png',
            description: 'AI-Powered Knowledge Base for Small and Medium Businesses',
            sameAs: [
              'https://twitter.com/querybee',
              'https://linkedin.com/company/querybee'
            ]
          }}
        />
        <StructuredData
          type="website"
          data={{
            name: 'QueryBee',
            url: 'https://querybee.com',
            description: 'QueryBee helps small and medium businesses capture, organize, and retrieve internal knowledge with powerful AI.',
            potentialAction: {
              '@type': 'SearchAction',
              'target': 'https://querybee.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }}
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main>
          <HeroSection />
          <FeaturesSection />
          <BenefitsSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <PricingSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
