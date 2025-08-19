// JavaScript for Botón Creativo - Bootstrap Version

document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const navbar = document.getElementById('mainNav');
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Initial check
    updateNavbar();
    
    // Listen for scroll events
    window.addEventListener('scroll', updateNavbar);
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
                
                // Calculate offset for fixed navbar
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('i');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            whatsapp: formData.get('whatsapp'),
            message: formData.get('message')
        };
        
        // Validate required fields
        if (!data.name || !data.email || !data.message) {
            showAlert('Por favor completa todos los campos requeridos.', 'danger');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showAlert('Por favor ingresa un email válido.', 'danger');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        btnIcon.className = 'spinner-border spinner-border-sm me-2';
        btnText.textContent = 'Enviando...';
        
        try {
            // Send to backend
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                // Success state
                btnIcon.className = 'bi bi-check me-2';
                btnText.textContent = '¡Mensaje Enviado!';
                
                // Show success message
                showAlert('¡Gracias por contactarnos! Te responderemos pronto.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    resetSubmitButton();
                }, 3000);
            } else {
                throw new Error('Error al enviar el mensaje');
            }
        } catch (error) {
            console.error('Error:', error);
            showAlert('Error al enviar el mensaje. Por favor intenta nuevamente.', 'danger');
            resetSubmitButton();
        }
    });
    
    function resetSubmitButton() {
        submitBtn.disabled = false;
        btnIcon.className = 'bi bi-send me-2';
        btnText.textContent = 'Enviar Mensaje';
    }
    
    function showAlert(message, type) {
        // Remove existing alerts
        const existingAlerts = document.querySelectorAll('.alert');
        existingAlerts.forEach(alert => alert.remove());
        
        // Create new alert
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        // Insert after form
        contactForm.insertAdjacentElement('afterend', alertDiv);
        
        // Auto dismiss after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        observer.observe(item);
    });
    
    // Form field focus effects
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Portfolio item hover effects
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Service card hover effects
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-0.5rem)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add loading animation to page
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        if (heroSection) {
            heroSection.style.backgroundPositionY = parallax + 'px';
        }
    });
    
    // Dynamic navbar brand color based on scroll
    const navbarBrand = document.querySelector('.navbar-brand');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function updateNavbarColors() {
        if (window.scrollY > 50) {
            navbarBrand.style.color = 'var(--primary-blue)';
            navLinks.forEach(link => {
                link.style.color = 'var(--dark-gray)';
            });
        } else {
            navbarBrand.style.color = 'white';
            navLinks.forEach(link => {
                link.style.color = 'white';
            });
        }
    }
    
    // Update colors on scroll
    window.addEventListener('scroll', updateNavbarColors);
    updateNavbarColors(); // Initial call
});

// CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .focused .form-label {
        color: var(--primary-blue);
    }
    
    .loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);