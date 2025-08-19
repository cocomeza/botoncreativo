const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Tienda Online Premium",
    description: "Diseño y desarrollo completo de e-commerce con sistema de pagos integrado y experiencia de usuario optimizada."
  },
  {
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Identidad Corporativa",
    description: "Desarrollo completo de identidad visual para startup tecnológica, incluyendo logo, paleta de colores y manual de marca."
  },
  {
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Campaña Audiovisual",
    description: "Creación de serie de videos promocionales para lanzamiento de producto, incluyendo guión, producción y post-producción."
  },
  {
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Estrategia Social Media",
    description: "Gestión integral de redes sociales para restaurante, logrando 300% de incremento en engagement y 150% en seguidores."
  },
  {
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "App Corporativa",
    description: "Diseño UX/UI para aplicación empresarial, optimizada para productividad y experiencia de usuario excepcional."
  },
  {
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Material Publicitario",
    description: "Diseño completo de campaña publicitaria para evento corporativo, incluyendo banners, flyers y material digital."
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section" data-testid="portfolio-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title" data-testid="portfolio-title">
            Trabajos Recientes
          </h2>
          <p className="section-subtitle" data-testid="portfolio-subtitle">
            Descubre algunos de nuestros proyectos más destacados y el impacto que hemos generado
          </p>
        </div>

        <div className="section-content grid grid-md-cols-2 grid-lg-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="portfolio-item"
              data-testid={`portfolio-item-${index}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-image"
                data-testid={`portfolio-image-${index}`}
              />
              <div className="portfolio-overlay">
                <div className="portfolio-overlay-content">
                  <h3 className="portfolio-overlay-title" data-testid={`portfolio-overlay-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="portfolio-overlay-description" data-testid={`portfolio-overlay-description-${index}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
