// Global variables
let currentLanguage = 'it';
let currentSector = 'nautico';
let translations = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load translations
    if (typeof translations_it !== 'undefined') translations.it = translations_it;
    if (typeof translations_en !== 'undefined') translations.en = translations_en;
    if (typeof translations_de !== 'undefined') translations.de = translations_de;
    
    // Initialize components
    initializeLoading();
    initializeNavigation();
    initializeSectorTabs();
    initializeLanguageSelector();
    initializePricingToggle();
    initializeContactForm();
    initializeScrollAnimations();
    initializeScrollEffects();
    
    // Apply initial translations
    applyTranslations();
    
    // Add button ripple effects
    addRippleEffects();
    
    console.log('Engichain initialized successfully');
});

// Loading Screen
function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        
        // Remove from DOM after animation
        setTimeout(() => {
            if (loadingScreen && loadingScreen.parentNode) {
                loadingScreen.parentNode.removeChild(loadingScreen);
            }
        }, 500);
    }, 2000);
}

// Navigation
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                scrollToSection(targetId);
                
                // Close mobile menu
                if (hamburger && navMenu) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Sector Tabs
function initializeSectorTabs() {
    const sectorTabs = document.querySelectorAll('.sector-tab');
    
    sectorTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const sector = tab.getAttribute('data-sector');
            changeSector(sector);
        });
    });
}

function changeSector(sector) {
    currentSector = sector;
    
    // Update active tab
    const sectorTabs = document.querySelectorAll('.sector-tab');
    sectorTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-sector') === sector) {
            tab.classList.add('active');
        }
    });
    
    // Update content with animation
    updateSectorContent(sector);
    
    console.log(`Switched to sector: ${sector}`);
}

function updateSectorContent(sector) {
    const elements = [
        { id: 'hero-subtitle', key: `hero.${sector}.subtitle` },
        { id: 'sector-icon', content: getSectorIcon(sector) },
        { id: 'sector-title', key: `features.settore.${sector}.title` },
        { id: 'sector-description', key: `features.settore.${sector}.description` },
        { id: 'search-title', key: `features.ricerca.${sector}.title` },
        { id: 'search-description', key: `features.ricerca.${sector}.description` },
        { id: 'trace-title', key: `features.tracciabilita.${sector}.title` },
        { id: 'trace-description', key: `features.tracciabilita.${sector}.description` }
    ];
    
    elements.forEach(({ id, key, content }) => {
        const element = document.getElementById(id);
        if (element) {
            // Add fade out animation
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                if (content) {
                    element.textContent = content;
                } else if (key && translations[currentLanguage]) {
                    const translation = getNestedTranslation(translations[currentLanguage], key);
                    if (translation) {
                        element.innerHTML = translation;
                    }
                }
                
                // Add fade in animation
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 150);
        }
    });
    
    // Update description content
    updateDescriptionContent(sector);
}

function updateDescriptionContent(sector) {
    const descriptionContent = document.getElementById('description-content');
    if (!descriptionContent || !translations[currentLanguage]) return;
    
    const sectorData = translations[currentLanguage].hero[sector];
    if (!sectorData) return;
    
    // Add fade out animation
    descriptionContent.style.opacity = '0';
    descriptionContent.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        descriptionContent.innerHTML = `
            <p class="description-text">${sectorData.description1}</p>
            <p class="description-text">${sectorData.description2}</p>
            <ul class="feature-list">
                <li class="feature-item">
                    <span >✓</span>
                    ${sectorData.feature1}
                </li>
                <li class="feature-item">
                    <span >✓</span>
                    ${sectorData.feature2}
                </li>
                <li class="feature-item">
                    <span >✓</span>
                    ${sectorData.feature3}
                </li>
            </ul>
        `;
        
        // Add fade in animation
        descriptionContent.style.opacity = '1';
        descriptionContent.style.transform = 'translateY(0)';
    }, 150);
}

function getSectorIcon(sector) {
    const icons = {
        nautico: '⚓',
        sanitario: '🏥',
        automotive: '🚗',
        generale: '📋'
    };
    return icons[sector] || '📋';
}

// Language Selector
function initializeLanguageSelector() {
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langDropdown.classList.remove('active');
        });
    }
    
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            changeLanguage(lang);
            langDropdown.classList.remove('active');
        });
    });
}

function changeLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Translation for language ${lang} not found`);
        return;
    }
    
    currentLanguage = lang;
    
    // Update language button
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        const flags = { it: '🇮🇹', en: '🇬🇧', de: '🇩🇪' };
        const langTexts = { it: 'IT', en: 'EN', de: 'DE' };
        
        langBtn.querySelector('.flag').textContent = flags[lang];
        langBtn.querySelector('.lang-text').textContent = langTexts[lang];
    }
    
    // Apply translations
    applyTranslations();
    
    // Update sector-specific content
    updateSectorContent(currentSector);
    
    console.log(`Language changed to: ${lang}`);
}

function applyTranslations() {
    if (!translations[currentLanguage]) return;
    
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[currentLanguage], key);
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null;
    }, obj);
}

// Pricing Toggle
function initializePricingToggle() {
    const pricingToggle = document.getElementById('pricing-toggle');
    const amounts = document.querySelectorAll('.amount[data-monthly][data-yearly]');
    
    if (pricingToggle) {
        pricingToggle.addEventListener('change', () => {
            const isYearly = pricingToggle.checked;
            
            amounts.forEach(amount => {
                const monthlyPrice = amount.getAttribute('data-monthly');
                const yearlyPrice = amount.getAttribute('data-yearly');
                
                // Add animation
                amount.style.transform = 'scale(0.8)';
                amount.style.opacity = '0.5';
                
                setTimeout(() => {
                    amount.textContent = isYearly ? yearlyPrice : monthlyPrice;
                    amount.style.transform = 'scale(1)';
                    amount.style.opacity = '1';
                }, 150);
            });
        });
    }
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
        
        // Add floating label effects
        const formGroups = contactForm.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            if (input) {
                input.addEventListener('focus', () => {
                    group.classList.add('focused');
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        group.classList.remove('focused');
                    }
                });
                
                // Check if input has value on load
                if (input.value) {
                    group.classList.add('focused');
                }
            }
        });
    }
}

async function handleContactSubmit(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('.submit-btn');
    const formData = new FormData(e.target);
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success modal
        showSuccessModal();
        
        // Reset form
        e.target.reset();
        
        // Remove focused classes
        const formGroups = e.target.querySelectorAll('.form-group');
        formGroups.forEach(group => group.classList.remove('focused'));
        
    } catch (error) {
        console.error('Error sending email:', error);
        alert(translations[currentLanguage]?.contact?.form?.error || 'Errore nell\'invio dell\'email. Riprova più tardi.');
    } finally {
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    // Observe all elements with data-aos attribute
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
}

// Scroll Effects
function initializeScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effect for floating elements
        const floatingElements = document.querySelectorAll('.floating-block');
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Button Ripple Effects
function addRippleEffects() {
    const buttons = document.querySelectorAll('.cta-button, .pricing-cta, .submit-btn');
    
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
            ripple.classList.add('button-ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Modal Functions
function openModal(type) {
    const modal = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    if (!modal || !modalTitle || !modalContent || !translations[currentLanguage]) return;
    
    let modalData;
    
    // Handle sector-specific modals
    if (type === 'settore') {
        modalData = translations[currentLanguage].modals.settore[currentSector];
    } else if (type === 'ricerca' && translations[currentLanguage].modals.ricerca[currentSector]) {
        modalData = translations[currentLanguage].modals.ricerca[currentSector];
    } else if (type === 'tracciabilita' && translations[currentLanguage].modals.tracciabilita[currentSector]) {
        modalData = translations[currentLanguage].modals.tracciabilita[currentSector];
    } else {
        modalData = translations[currentLanguage].modals[type];
    }
    
    if (!modalData) return;
    
    modalTitle.textContent = modalData.title;
    
    let contentHTML = '';
    
    if (modalData.sections) {
        Object.values(modalData.sections).forEach(section => {
            contentHTML += `
                <h4>${section.title}</h4>
                <p>${section.content}</p>
            `;
        });
    }
    
    if (modalData.highlight) {
        contentHTML += `
            <div style="background: #f8f9fa; padding: 1rem; border-left: 4px solid var(--accent-color); margin-top: 1rem; border-radius: 4px;">
                <strong>${translations[currentLanguage].modals.whyImportant}:</strong> ${modalData.highlight}
            </div>
        `;
    }
    
    modalContent.innerHTML = contentHTML;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function openDemo() {
    const modal = document.getElementById('demo-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeDemoModal() {
    const modal = document.getElementById('demo-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Performance optimization
window.addEventListener('load', () => {
    // Remove loading classes after page load
    document.body.classList.add('loaded');
    
    // Initialize lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Export functions for global access
window.Engichain = {
    changeSector,
    changeLanguage,
    openModal,
    closeModal,
    openDemo,
    closeDemoModal,
    scrollToSection,
    showSuccessModal,
    closeSuccessModal
};