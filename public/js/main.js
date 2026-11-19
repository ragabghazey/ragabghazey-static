/* ===================================
   Portfolio Website - JavaScript
   =================================== */

function initAll() {
    initNavbar();
    initSmoothScroll();
    initAnimatedCounters();
    initPortfolioFilter();
    initTestimonialsSlider();
    initContactForm();
    initScrollAnimations();
    initWhatsAppFloat();
    initPrintButton();
}

// Run after the page (and React hydration) has fully loaded, so the DOM edits
// made here do not clash with React re-rendering the page. A tick delay after
// `load` lets React finish hydration first.
if (document.readyState === 'complete') {
    setTimeout(initAll, 0);
} else {
    window.addEventListener('load', () => setTimeout(initAll, 0));
}

/* ===================================
   Navbar Functions
   =================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (!navbar || !navToggle || !navLinks) return;
    const links = navLinks.querySelectorAll('a');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const sectionId = section.getAttribute('id');
            const navLink = navLinks.querySelector(`a[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                links.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

/* ===================================
   Smooth Scroll
   =================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ===================================
   Animated Counters
   =================================== */
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const duration = 2000;

    // The server renders the real figure. Animating one that is already on
    // screen would mean resetting it to 0 first — a visible wrong number —
    // so only figures still below the fold count up.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        if (!Number.isFinite(target)) return;

        const increment = target / (duration / 16);
        let current = 0;

        const step = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(step);
            } else {
                counter.textContent = target;
            }
        };
        step();
    };

    const belowTheFold = (el) => el.getBoundingClientRect().top > window.innerHeight;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        if (belowTheFold(counter)) {
            observer.observe(counter);
        }
    });
}

/* ===================================
   Portfolio Filter
   =================================== */
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ===================================
   Testimonials Slider
   =================================== */
function initTestimonialsSlider() {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dots');
    
    if (!track || cards.length === 0) return;
    
    let currentIndex = 0;
    let cardsPerView = getCardsPerView();
    const totalSlides = Math.ceil(cards.length / cardsPerView);
    
    // Create dots
    function createDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    function getCardsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }
    
    function updateSlider() {
        const cardWidth = cards[0].offsetWidth + 32; // Including gap
        track.style.transform = `translateX(${currentIndex * cardWidth}px)`;
        
        // Update dots
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === Math.floor(currentIndex / cardsPerView));
        });
    }
    
    function goToSlide(index) {
        currentIndex = index * cardsPerView;
        if (currentIndex >= cards.length) currentIndex = 0;
        updateSlider();
    }
    
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= cards.length - cardsPerView + 1) currentIndex = 0;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) currentIndex = cards.length - cardsPerView;
        updateSlider();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide
    let autoSlide = setInterval(nextSlide, 5000);
    
    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
        cardsPerView = getCardsPerView();
        createDots();
        updateSlider();
    });
    
    // Initialize
    createDots();
}

/* ===================================
   Contact Form
   =================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    // Static site: there is no Django backend, so submissions are emailed
    // through FormSubmit's AJAX endpoint instead of /contact/.
    const ENDPOINT = 'https://formsubmit.co/ajax/contact@ragabghazey.com';
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Honeypot: hidden from humans, filled in by spam bots. Reply with the
        // same success a human gets, so bots do not learn to work around it.
        const honeypot = form.querySelector('[name="website"], [name="_honey"]');
        if (honeypot && honeypot.value.trim()) {
            showNotification('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً', 'success');
            form.reset();
            return;
        }
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('يرجى ملء جميع الحقول', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
            return;
        }
        
        // Get submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitBtn.disabled = true;

        try {
            const data = new FormData(form);

            // Build the subject the way the original backend did, from the
            // project type label and the company rather than a free-text field.
            const projectType = form.querySelector('[name="project_type"]');
            const companyInput = document.getElementById('company');
            const typeLabel = (projectType && projectType.selectedIndex >= 0 &&
                projectType.options[projectType.selectedIndex].textContent) || 'طلب مشروع';
            const subject = [typeLabel, companyInput ? companyInput.value.trim() : '']
                .filter(Boolean).join(' — ');
            data.append('_subject', 'رسالة من الموقع — ' + name + ': ' + subject);
            data.append('_template', 'table');
            data.append('_captcha', 'false');

            const response = await fetch(ENDPOINT, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' },
            });
            const result = await response.json();

            const ok = result.success === true || result.success === 'true';
            showNotification(
                result.message || (ok ? 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً'
                                        : 'تعذّر إرسال الرسالة حالياً، يرجى المراسلة على contact@ragabghazey.com'),
                ok ? 'success' : 'error'
            );
            if (ok) form.reset();
        } catch (error) {
            showNotification('تعذّر الاتصال بالخادم، يرجى المحاولة مرة أخرى أو المراسلة على contact@ragabghazey.com', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check' : 'fa-circle-question'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles dynamically
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        padding: 16px 24px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        z-index: 9999;
        animation: slideDown 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    // Add animation keyframes
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideDown {
                from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                to { opacity: 1; transform: translateX(-50%) translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/* ===================================
   Scroll Animations
   =================================== */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.service-card, .portfolio-item, .testimonial-card, .info-card, .about-text, .about-image'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ===================================
   Typing Effect for Hero
   =================================== */
function initTypingEffect() {
    const element = document.querySelector('.typing-text');
    if (!element) return;
    
    const text = element.textContent;
    element.textContent = '';
    
    let i = 0;
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    };
    
    type();
}

// Initialize typing effect after page load
window.addEventListener('load', initTypingEffect);

/* ===================================
   Floating WhatsApp
   =================================== */
function initWhatsAppFloat() {
    const button = document.getElementById('whatsappFloat');
    if (!button) return;

    const hero = document.getElementById('home');
    // Appear once the hero — which carries its own contact buttons — is behind us
    const trigger = () => (hero ? hero.offsetHeight * 0.7 : 500);

    const update = () => button.classList.toggle('at-top', window.scrollY <= trigger());

    update();
    window.addEventListener('scroll', update, { passive: true });
}

/* ===================================
   Print Button (CV page)
   =================================== */
function initPrintButton() {
    const button = document.getElementById('printBtn');
    if (!button) return;
    button.addEventListener('click', () => window.print());
}
