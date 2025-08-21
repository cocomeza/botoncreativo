import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";

// Importamos el hook con todos los efectos
import useGlobalEffects from "@/hooks/useGlobalEffects";

export default function Home() {
  // Aplicamos todos los efectos globales
  useGlobalEffects();

 return (
  <div className="min-h-screen">
    <Navigation />
    <div className="main-content">
      <h1>Botón Creativo</h1>
      <h2>Creatividad que impulsa tu negocio</h2>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <FaqSection />
      <Footer />
    </div>
  </div>
);

