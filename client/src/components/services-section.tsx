import { Globe, Palette, Video, Users } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    description: "Diseño y desarrollo de sitios web profesionales, responsivos y optimizados para conversión. Desde landing pages hasta tiendas online completas."
  },
  {
    icon: Palette,
    title: "Diseño Gráfico",
    description: "Logos, banners, material publicitario y portfolios creativos que reflejan la personalidad única de tu marca y capturan la atención."
  },
  {
    icon: Video,
    title: "Contenido Audiovisual",
    description: "Creación de videos promocionales, contenido para redes sociales y material audiovisual que cuenta tu historia de manera impactante."
  },
  {
    icon: Users,
    title: "Community Manager",
    description: "Gestión profesional de redes sociales, creación de contenido estratégico y construcción de comunidades digitales activas."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section section-light" data-testid="services-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title" data-testid="services-title">
            Nuestros Servicios
          </h2>
          <p className="section-subtitle" data-testid="services-subtitle">
            Ofrecemos soluciones integrales de diseño y marketing digital para impulsar tu presencia online
          </p>
        </div>

        <div className="section-content grid grid-md-cols-2 grid-lg-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="card"
                data-testid={`service-card-${index}`}
              >
                <div className="card-content">
                  <div className="service-icon">
                    <Icon style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
                  </div>
                  <h3 className="card-title" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="card-description" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
