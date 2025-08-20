import { useEffect } from "react";

export default function useGlobalEffects() {
  useEffect(() => {
    // ---------- NAVBAR SCROLL Y COLOR ----------
    const navbar = document.getElementById("mainNav");
    const navbarBrand = document.querySelector(".navbar-brand");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    const updateNavbar = () => {
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");

      if (window.scrollY > 50) {
        navbarBrand.style.color = "var(--primary-blue)";
        navLinks.forEach(link => (link.style.color = "var(--dark-gray)"));
      } else {
        navbarBrand.style.color = "white";
        navLinks.forEach(link => (link.style.color = "white"));
      }
    };

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();

    // ---------- SMOOTH SCROLL ----------
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const navbarHeight = navbar.offsetHeight;
          const top = targetEl.offsetTop - navbarHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    });

    // ---------- INTERSECTION OBSERVER ----------
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("fade-in-up");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".service-card, .portfolio-item").forEach(el => {
      observer.observe(el);
    });

    // ---------- RIPPLE BUTTON ----------
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
      button.addEventListener("click", e => {
        const ripple = document.createElement("span");
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + "px";
        ripple.style.left = e.clientX - rect.left - size / 2 + "px";
        ripple.style.top = e.clientY - rect.top - size / 2 + "px";
        ripple.className = "ripple";
        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });

    // ---------- HERO PARALLAX ----------
    const heroSection = document.querySelector(".hero-section");
    const onScrollParallax = () => {
      if (heroSection) heroSection.style.backgroundPositionY = window.pageYOffset * 0.5 + "px";
    };
    window.addEventListener("scroll", onScrollParallax);

    // ---------- FORMULARIO DE CONTACTO ----------
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      const submitBtn = contactForm.querySelector(".submit-btn");
      const btnText = submitBtn.querySelector(".btn-text");
      const btnIcon = submitBtn.querySelector("i");

      const showAlert = (message, type) => {
        const existing = document.querySelectorAll(".alert");
        existing.forEach(alert => alert.remove());

        const alertDiv = document.createElement("div");
        alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
        alertDiv.innerHTML = `
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        contactForm.insertAdjacentElement("afterend", alertDiv);
        setTimeout(() => alertDiv.remove(), 5000);
      };

      const resetSubmitButton = () => {
        submitBtn.disabled = false;
        btnIcon.className = "bi bi-send me-2";
        btnText.textContent = "Enviar Mensaje";
      };

      contactForm.addEventListener("submit", async e => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          whatsapp: formData.get("whatsapp"),
          message: formData.get("message"),
        };

        if (!data.name || !data.email || !data.message) {
          showAlert("Por favor completa todos los campos requeridos.", "danger");
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
          showAlert("Por favor ingresa un email válido.", "danger");
          return;
        }

        submitBtn.disabled = true;
        btnIcon.className = "spinner-border spinner-border-sm me-2";
        btnText.textContent = "Enviando...";

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            btnIcon.className = "bi bi-check me-2";
            btnText.textContent = "¡Mensaje Enviado!";
            showAlert("¡Gracias por contactarnos! Te responderemos pronto.", "success");
            contactForm.reset();
            setTimeout(resetSubmitButton, 3000);
          } else throw new Error("Error al enviar el mensaje");
        } catch (error) {
          console.error(error);
          showAlert("Error al enviar el mensaje. Por favor intenta nuevamente.", "danger");
          resetSubmitButton();
        }
      });
    }

    // ---------- ESTILOS DINÁMICOS (RIPPLE y BODY) ----------
    const style = document.createElement("style");
    style.textContent = `
      .btn { position: relative; overflow: hidden; }
      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
      }
      @keyframes ripple-animation {
        to { transform: scale(4); opacity: 0; }
      }
      .focused .form-label { color: var(--primary-blue); }
      .loaded { opacity: 1; transition: opacity 0.3s ease; }
      body { opacity: 0; transition: opacity 0.3s ease; }
    `;
    document.head.appendChild(style);
    window.addEventListener("load", () => document.body.classList.add("loaded"));

    // ---------- CLEANUP ----------
    return () => {
      window.removeEventListener("scroll", updateNavbar);
      window.removeEventListener("scroll", onScrollParallax);
    };
  }, []);
}
