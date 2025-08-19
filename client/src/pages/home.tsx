import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
