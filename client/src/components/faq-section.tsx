import { useState } from "react";

const faqData = [
  {
    question: "¿Cuánto tiempo toma desarrollar una página web?",
    answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Una página web básica puede estar lista en 2-3 semanas, mientras que proyectos más complejos como e-commerce pueden tomar 6-8 semanas. Siempre establecemos plazos claros antes de comenzar."
  },
  {
    question: "¿Incluyen hosting y dominio en sus servicios?",
    answer: "Podemos ayudarte a gestionar tanto el hosting como el dominio, o trabajar con los que ya tengas. Ofrecemos paquetes completos que incluyen estos servicios por el primer año, con opciones de renovación flexibles."
  },
  {
    question: "¿Qué incluye el servicio de Community Manager?",
    answer: "Nuestro servicio incluye: creación de contenido original, programación de publicaciones, diseño gráfico para redes, gestión de comentarios y mensajes, reportes mensuales de analíticas y estrategia de crecimiento personalizada."
  },
  {
    question: "¿Ofrecen revisiones en el proceso de diseño?",
    answer: "Sí, incluimos hasta 3 rondas de revisiones en todos nuestros proyectos de diseño. Trabajamos de forma colaborativa para asegurar que el resultado final supere tus expectativas. Revisiones adicionales se cotizan por separado."
  },
  {
    question: "¿Brindan soporte post-lanzamiento?",
    answer: "Absolutamente. Ofrecemos 30 días de soporte gratuito post-lanzamiento para resolver cualquier inconveniente técnico. También disponemos de planes de mantenimiento mensual para actualizaciones continuas y optimizaciones."
  },
  {
    question: "¿Trabajan con empresas de cualquier tamaño?",
    answer: "Sí, trabajamos desde emprendedores individuales y empresas. Adaptamos nuestros servicios y propuestas según las necesidades específicas y presupuesto de cada cliente, siempre manteniendo la calidad profesional."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section" data-testid="faq-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title" data-testid="faq-title">
            Preguntas Frecuentes
          </h2>
          <p className="section-subtitle" data-testid="faq-subtitle">
            Resuelve tus dudas más comunes sobre nuestros servicios y proceso de trabajo
          </p>
        </div>

        <div className="section-content">
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="faq-item"
                data-testid={`faq-item-${index}`}
              >
                <button 
                  className="faq-trigger"
                  onClick={() => toggleFaq(index)}
                  data-testid={`faq-trigger-${index}`}
                >
                  <span>{faq.question}</span>
                  <span style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                    ▼
                  </span>
                </button>
                <div 
                  className={`faq-content ${openIndex === index ? 'open' : ''}`}
                  data-testid={`faq-content-${index}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
