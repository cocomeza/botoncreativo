import { useState, useEffect } from "react";
import { Menu, X, Palette } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      data-testid="navigation"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="nav-brand"
            data-testid="logo-button"
          >
            <Palette style={{ width: '1.5rem', height: '1.5rem' }} />
            <span>Botón Creativo</span>
          </button>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link"
              data-testid="nav-inicio"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="nav-link"
              data-testid="nav-servicios"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="nav-link"
              data-testid="nav-portafolio"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
              data-testid="nav-contacto"
            >
              Contacto
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="nav-link"
              data-testid="nav-faq"
            >
              FAQ
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? 
              <X style={{ width: '1.5rem', height: '1.5rem' }} /> : 
              <Menu style={{ width: '1.5rem', height: '1.5rem' }} />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu" data-testid="mobile-menu">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link"
              data-testid="mobile-nav-inicio"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="nav-link"
              data-testid="mobile-nav-servicios"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="nav-link"
              data-testid="mobile-nav-portafolio"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
              data-testid="mobile-nav-contacto"
            >
              Contacto
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="nav-link"
              data-testid="mobile-nav-faq"
            >
              FAQ
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
