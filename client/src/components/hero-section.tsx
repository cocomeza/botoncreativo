import { Rocket } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-section"
      data-testid="hero-section"
    >
      {/* Background Pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" style={{ position: 'absolute', inset: 0 }}>
          <polygon fill="rgba(255,255,255,0.05)" points="0,1000 1000,800 1000,1000"/>
        </svg>
      </div>

      <div className="container hero-content">
        <div className="grid grid-lg-cols-2 gap-12 items-center">
          <div>
            <h1 className="hero-title" data-testid="hero-title">
              Creatividad que{" "}
              <span style={{ color: '#fbbf24' }}>Impulsa</span>{" "}
              tu Negocio
            </h1>
            <p className="hero-subtitle" data-testid="hero-subtitle">
              Diseñamos experiencias digitales únicas que conectan con tu audiencia. 
              Desde páginas web profesionales hasta estrategias de marketing digital completas.
            </p>
            <button 
              className="hero-button"
              onClick={() => scrollToSection("contact")}
              data-testid="cta-button"
            >
              <Rocket style={{ width: '1.25rem', height: '1.25rem' }} />
              Comencemos tu Proyecto
            </button>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Equipo creativo trabajando en proyectos digitales"
              className="hero-image"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
