import { Palette, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer" data-testid="footer">
      <div className="container">
        <div className="footer-content grid grid-md-cols-2 grid-lg-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2" style={{ marginBottom: '1rem' }}>
              <Palette style={{ width: '1.5rem', height: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }} data-testid="footer-brand">Botón Creativo</h3>
            </div>
            <div className="social-links">
              <a 
                href="#" 
                className="social-link"
                aria-label="Facebook"
                data-testid="social-facebook"
              >
                <Facebook style={{ width: '1.25rem', height: '1.25rem' }} />
              </a>
              <a 
                href="#" 
                className="social-link"
                aria-label="Instagram"
                data-testid="social-instagram"
              >
                <Instagram style={{ width: '1.25rem', height: '1.25rem' }} />
              </a>
              <a 
                href="#" 
                className="social-link"
                aria-label="LinkedIn"
                data-testid="social-linkedin"
              >
                <Linkedin style={{ width: '1.25rem', height: '1.25rem' }} />
              </a>
              <a 
                href="#" 
                className="social-link"
                aria-label="WhatsApp"
                data-testid="social-whatsapp"
              >
                <SiWhatsapp style={{ width: '1.25rem', height: '1.25rem' }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 data-testid="footer-services-title">Servicios</h4>
            <ul className="footer-links">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="footer-link"
                  data-testid="footer-service-web"
                >
                  Páginas Web
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="footer-link"
                  data-testid="footer-service-design"
                >
                  Diseño Gráfico
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="footer-link"
                  data-testid="footer-service-video"
                >
                  Videos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="footer-link"
                  data-testid="footer-service-cm"
                >
                  Community Manager
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 data-testid="footer-company-title">Empresa</h4>
            <ul className="footer-links">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="footer-link"
                  data-testid="footer-link-home"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="footer-link"
                  data-testid="footer-link-portfolio"
                >
                  Portafolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("faq")}
                  className="footer-link"
                  data-testid="footer-link-faq"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="footer-link"
                  data-testid="footer-link-contact"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 data-testid="footer-contact-title">Contacto</h4>
            <div>
              <div className="footer-contact-item">
                <Mail style={{ width: '1rem', height: '1rem', color: '#bfdbfe' }} />
                <span style={{ color: '#bfdbfe' }} data-testid="footer-email">boton.creativo.ar@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <SiWhatsapp style={{ width: '1rem', height: '1rem', color: '#bfdbfe' }} />
                <span style={{ color: '#bfdbfe' }} data-testid="footer-phone">+54 03407 15532790</span>
              </div>
              <div className="footer-contact-item">
                <MapPin style={{ width: '1rem', height: '1rem', color: '#bfdbfe' }} />
                <span style={{ color: '#bfdbfe' }} data-testid="footer-location">Villa Ramallo , Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p data-testid="footer-copyright">
            &copy; 2025 Botón Creativo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
