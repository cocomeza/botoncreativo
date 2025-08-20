const portfolioItems = [
  {
    image: "https://i.postimg.cc/zvFF6xgv/mockups-nro3.jpg",
    title: "Tienda Online",
    description: "Diseño y desarrollo, experiencia de usuario optimizada incluyendo logo, paleta de colores y manual de marca."
  },
  {
    image: "https://i.postimg.cc/T3Fgkz4Q/mockups-nro2.jpg",
    title: "Identidad unica",
    description: "Desarrollo completo de identidad visual para proyecto huerta comunitaria, y experiencia de usuario optimizada."
  },
  {
    image: "https://i.postimg.cc/gJCGQDPC/mockups-nro1.jpg",
    title: "Desarrollo web personalizado para iglesia",
    description: "Creación de página Web completa para la iglesia."
  },
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
