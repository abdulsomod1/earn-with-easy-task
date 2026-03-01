document.addEventListener('DOMContentLoaded', function() {
    // Toggle Telegram Menu
    const telegramBtn = document.getElementById('telegramBtn');
    const dropdown = document.querySelector('.telegram-dropdown');
    
    if (telegramBtn) {
        telegramBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (dropdown && !dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });

    // Add dynamic particle generation
    function createParticles() {
        const particleCount = 20;
        const body = document.body;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            particle.style.width = (5 + Math.random() * 10) + 'px';
            particle.style.height = particle.style.width;
            body.appendChild(particle);
        }
    }

    // Initialize particles
    createParticles();

    // Add hover effects to buttons and links
    const interactiveElements = document.querySelectorAll('a, button');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            if (!this.classList.contains('telegram-btn') && 
                !this.classList.contains('youtube-btn') &&
                !this.classList.contains('whatsapp-btn')) {
                this.style.transform = 'scale(1.05)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add touch feedback for mobile
    if ('ontouchstart' in window) {
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }

    // Smooth scroll to sections (if needed)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
