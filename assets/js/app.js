// app.js - Main application logic for Veterinaria Del Sur

// Configuration - Centralized business data
const CONFIG = {
  businessName: 'Veterinaria Del Sur Panamá',
  whatsapp: {
    number: '50766176043',
    url: 'https://wa.me/50766176043',
    messages: {
      general: 'Hola, vi su página web y quisiera solicitar información sobre una consulta veterinaria.',
      exotic: 'Hola, quisiera consultar si atienden la especie de mi mascota y conocer la disponibilidad de citas.',
      location: 'Hola, quisiera conocer más sobre la ubicación de la clínica.',
      travelDocs: 'Hola, quisiera recibir información sobre los documentos y requisitos para viajar con mi mascota.',
      contactForm: 'Hola, tengo una consulta sobre: '
    }
  },
  contact: {
    email: 'vetsurpty@yahoo.com',
    phones: ['381-3338', '381-3339'],
    phonesFormatted: '+507-381-3338 / +507-381-3339'
  },
  address: {
    full: 'Airport Commercial Center, Local 6, Avenida Domingo Díaz, Don Bosco, Ciudad de Panamá, Panamá',
    line1: 'Airport Commercial Center, Local 6',
    line2: 'Avenida Domingo Díaz, Don Bosco',
    city: 'Ciudad de Panamá',
    country: 'Panamá',
    latitude: 9.063102264739511,
    longitude: -79.4186233802652
  },
  hours: {
    weekdays: 'Lunes a viernes: 9:30 a. m. – 5:00 p. m.',
    saturday: 'Sábados: atención sujeta a disponibilidad y confirmación previa.',
    sunday: 'Domingos: cerrado.'
  },
  pricing: {
    consultDogsCats: 20,
    consultExotic: 25,
    currency: 'US$',
    disclaimer: 'Precios de referencia sujetos al tipo de consulta y a confirmación.'
  },
  reservio: 'https://veterinaria-del-sur.reservio.com/',
  social: {
    maps: 'https://www.google.com/maps/search/?api=1&query=Airport+Commercial+Center+Local+6+Avenida+Domingo+Diaz+Don+Bosco+Panama',
    joecodex: 'https://josuethacevedo.online',
    facebook: '', // Add real URL when available
    instagram: '' // Add real URL when available
  },
  images: {
    logo: './assets/images/logo.avif',
    hero: {
      main: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=700&fit=crop',
      cat: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=250&h=250&fit=crop',
      rabbit: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=250&h=250&fit=crop'
    },
    about: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop'
  }
};

// Services data - Updated with 10 services including SVG icons
const servicesData = [
  { id: 1, icon: 'stethoscope', key: 'service1', action: 'whatsapp' },
  { id: 2, icon: 'syringe', key: 'service2', action: 'whatsapp' },
  { id: 3, icon: 'microscope', key: 'service3', action: 'whatsapp' },
  { id: 4, icon: 'surgery', key: 'service4', action: 'whatsapp' },
  { id: 5, icon: 'ultrasound', key: 'service5', action: 'whatsapp' },
  { id: 6, icon: 'hospital', key: 'service6', action: 'whatsapp' },
  { id: 7, icon: 'pharmacy', key: 'service7', action: 'whatsapp' },
  { id: 8, icon: 'chip', key: 'service8', action: 'whatsapp' },
  { id: 9, icon: 'document', key: 'service9', action: 'travel' },
  { id: 10, icon: 'paw', key: 'service10', action: 'exotic' }
];

// SVG Icons for services
const serviceIcons = {
  stethoscope: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>',
  syringe: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 2 4 4"></path><path d="m17 7 3-3"></path><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"></path><path d="m9 11 4 4"></path><path d="m5 19-3 3"></path><path d="m14 4 6 6"></path></svg>',
  microscope: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>',
  surgery: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 2 4 4"></path><path d="m17 7 3-3"></path><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"></path><path d="m9 11 4 4"></path></svg>',
  ultrasound: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>',
  hospital: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v4"></path><path d="M14 14h-4"></path><path d="M14 18h-4"></path><path d="M14 8h-4"></path><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"></path><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path></svg>',
  pharmacy: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>',
  chip: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="14" height="14" rx="2"></rect><path d="M9 2v3"></path><path d="M15 2v3"></path><path d="M9 19v3"></path><path d="M15 19v3"></path><path d="M2 9h3"></path><path d="M2 15h3"></path><path d="M19 9h3"></path><path d="M19 15h3"></path></svg>',
  document: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
  paw: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><circle cx="9" cy="10" r="2"></circle><circle cx="15" cy="14" r="2"></circle><path d="M9 18a4 4 0 0 1 8 0"></path></svg>'
};

// FAQ data - Updated with 7 questions
const faqData = [
  { id: 1, qKey: 'faq1Q', aKey: 'faq1A' },
  { id: 2, qKey: 'faq2Q', aKey: 'faq2A' },
  { id: 3, qKey: 'faq3Q', aKey: 'faq3A' },
  { id: 4, qKey: 'faq4Q', aKey: 'faq4A' },
  { id: 5, qKey: 'faq5Q', aKey: 'faq5A' },
  { id: 6, qKey: 'faq6Q', aKey: 'faq6A' },
  { id: 7, qKey: 'faq7Q', aKey: 'faq7A' }
];

// State
let currentLang = 'es';
let currentTheme = 'light';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initializeLanguage();
  initializeTheme();
  initializeNavigation();
  initializeWhatsAppButtons();
  initializeServices();
  initializeFAQ();
  initializeContactForm();
  initializeFooter();
  setupAccessibility();
  setupMapLazyLoad();
});

// Language Management
function initializeLanguage() {
  const savedLang = localStorage.getItem('vetSurLang');
  const browserLang = navigator.language.split('-')[0];

  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  } else if (translations[browserLang]) {
    currentLang = browserLang;
  } else {
    currentLang = 'es';
  }

  setLanguage(currentLang);

  // Compact language switcher
  const currentLangBtn = document.getElementById('currentLangBtn');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.querySelectorAll('.lang-option');

  if (currentLangBtn && langDropdown) {
    // Toggle dropdown
    currentLangBtn.addEventListener('click', () => {
      const isExpanded = currentLangBtn.getAttribute('aria-expanded') === 'true';
      currentLangBtn.setAttribute('aria-expanded', !isExpanded);
      langDropdown.classList.toggle('active');
    });

    // Close on option click
    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        setLanguage(lang);
        currentLangBtn.setAttribute('aria-expanded', 'false');
        langDropdown.classList.remove('active');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!currentLangBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        currentLangBtn.setAttribute('aria-expanded', 'false');
        langDropdown.classList.remove('active');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langDropdown.classList.contains('active')) {
        currentLangBtn.setAttribute('aria-expanded', 'false');
        langDropdown.classList.remove('active');
        currentLangBtn.focus();
      }
    });
  }
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLang = lang;
  localStorage.setItem('vetSurLang', lang);

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update document attributes
  document.documentElement.lang = lang;

  // Update meta tags
  updateMetaTags(lang);

  // Update current language button text
  const currentLangText = document.getElementById('currentLangText');
  const langLabels = {
    es: 'ES',
    en: 'EN',
    zh: '中文',
    fr: 'FR'
  };
  if (currentLangText) {
    currentLangText.textContent = langLabels[lang] || lang.toUpperCase();
  }

  // Update active state in dropdown
  document.querySelectorAll('.lang-option').forEach(option => {
    if (option.getAttribute('data-lang') === lang) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });

  // Re-render dynamic content
  renderServices();
  renderFAQ();

  // Update map popup if loaded
  if (window.vetSurMap && window.vetSurMarker) {
    updateMapPopup();
  }
}

function updateMetaTags(lang) {
  const t = translations[lang];
  document.title = t.metaTitle || `${CONFIG.businessName} - ${t.navHome}`;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', t.metaDescription);
  }

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', t.metaTitle || CONFIG.businessName);
  }

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', t.heroTitle);
  }
}

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem('vetSurTheme');

  // Always default to light theme unless user explicitly saved a preference
  if (savedTheme) {
    currentTheme = savedTheme;
  } else {
    currentTheme = 'light'; // Force light theme by default
  }

  setTheme(currentTheme);

  // Theme toggle button
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Listen for system theme changes only if user hasn't set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('vetSurTheme')) {
      // Still default to light even if system changes
      setTheme('light');
    }
  });
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('vetSurTheme', theme);

  // Update theme toggle icon
  const themeIcon = document.querySelector('.theme-icon');
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Update theme-color meta tag
  const themeColor = theme === 'dark' ? '#071126' : '#073B78';
  let metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', themeColor);
  }
}

function toggleTheme() {
  setTheme(currentTheme === 'light' ? 'dark' : 'light');
}

// Navigation
function initializeNavigation() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav__link');

  // Sticky header on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Mobile menu toggle
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.contains('active');

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') &&
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = header.offsetHeight;
          const targetPosition = target.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

function openMenu() {
  const nav = document.getElementById('nav');
  const menuToggle = document.getElementById('menuToggle');

  nav.classList.add('active');
  menuToggle.classList.add('active');
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Cerrar menú');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  const nav = document.getElementById('nav');
  const menuToggle = document.getElementById('menuToggle');

  nav.classList.remove('active');
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
  document.body.style.overflow = '';
}

// WhatsApp Integration
function initializeWhatsAppButtons() {
  const buttons = {
    headerWhatsApp: CONFIG.whatsapp.messages.general,
    heroWhatsApp: CONFIG.whatsapp.messages.general,
    exoticWhatsApp: CONFIG.whatsapp.messages.exotic,
    locationWhatsApp: CONFIG.whatsapp.messages.location,
    ctaWhatsApp: CONFIG.whatsapp.messages.general,
    mobileWhatsApp: CONFIG.whatsapp.messages.general
  };

  Object.keys(buttons).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      const message = encodeURIComponent(buttons[id]);
      btn.href = `${CONFIG.whatsapp.url}?text=${message}`;
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
    }
  });
}

// Services Section
function initializeServices() {
  renderServices();
}

function renderServices() {
  const container = document.querySelector('.services__grid');
  if (!container) return;

  const t = translations[currentLang];

  container.innerHTML = servicesData.map(service => {
    const iconSvg = serviceIcons[service.icon] || serviceIcons.stethoscope;
    const actionAttr = service.action === 'travel'
      ? `onclick="handleTravelDocsClick(event)" style="cursor: pointer;"`
      : service.action === 'exotic'
      ? `href="#mascotas-especiales"`
      : `href="#contacto"`;

    return `
      <div class="service-card">
        <div class="service-card__icon">${iconSvg}</div>
        <h3 class="service-card__title">${t[service.key]}</h3>
        <p class="service-card__description">${t[service.key + 'Desc']}</p>
        <a ${actionAttr} class="service-card__link">${service.action === 'travel' ? t.serviceConsult : t.serviceLink} →</a>
      </div>
    `;
  }).join('');
}

// Handle travel docs service click
function handleTravelDocsClick(e) {
  e.preventDefault();
  const message = encodeURIComponent(CONFIG.whatsapp.messages.travelDocs);
  window.open(`${CONFIG.whatsapp.url}?text=${message}`, '_blank', 'noopener,noreferrer');
}

// FAQ Section
function initializeFAQ() {
  renderFAQ();

  // Event delegation for FAQ items
  const faqList = document.querySelector('.faq__list');
  if (faqList) {
    faqList.addEventListener('click', (e) => {
      const button = e.target.closest('.faq-item__question');
      if (button) {
        toggleFAQ(button);
      }
    });
  }
}

function renderFAQ() {
  const container = document.querySelector('.faq__list');
  if (!container) return;

  const t = translations[currentLang];

  container.innerHTML = faqData.map((faq, index) => `
    <div class="faq-item">
      <button class="faq-item__question"
              aria-expanded="false"
              aria-controls="faq-answer-${faq.id}"
              id="faq-question-${faq.id}">
        <span>${t[faq.qKey]}</span>
        <svg class="faq-item__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-item__answer"
           id="faq-answer-${faq.id}"
           aria-labelledby="faq-question-${faq.id}">
        <p>${t[faq.aKey]}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(button) {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  const faqItem = button.closest('.faq-item');

  // Close all other FAQs
  document.querySelectorAll('.faq-item').forEach(item => {
    if (item !== faqItem) {
      const btn = item.querySelector('.faq-item__question');
      btn.setAttribute('aria-expanded', 'false');
      item.classList.remove('active');
    }
  });

  // Toggle current FAQ
  button.setAttribute('aria-expanded', !isExpanded);
  faqItem.classList.toggle('active');
}

// Footer
function initializeFooter() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// Contact Form - Multi-Step
let currentStep = 1;
const totalSteps = 4;
const formData = {};

function initializeContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const submitBtn = document.getElementById('submitBtn');

  if (nextBtn) nextBtn.addEventListener('click', () => nextStep());
  if (prevBtn) prevBtn.addEventListener('click', () => prevStep());
  if (form) form.addEventListener('submit', handleMultiStepFormSubmit);

  // Real-time validation
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('invalid')) {
        validateField(input);
      }
    });
  });

  showStep(1);
}

function showStep(step) {
  const steps = document.querySelectorAll('.form__step');
  const progressSteps = document.querySelectorAll('.form-progress__step');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const submitBtn = document.getElementById('submitBtn');

  // Hide all steps
  steps.forEach(s => s.classList.remove('active'));

  // Show current step
  const currentStepEl = document.querySelector(`.form__step[data-step="${step}"]`);
  if (currentStepEl) {
    currentStepEl.classList.add('active');
  }

  // Update progress indicator
  progressSteps.forEach((s, index) => {
    s.classList.remove('active', 'completed');
    if (index + 1 < step) {
      s.classList.add('completed');
    } else if (index + 1 === step) {
      s.classList.add('active');
    }
  });

  // Update buttons
  prevBtn.style.display = step === 1 ? 'none' : 'block';
  nextBtn.style.display = step === totalSteps ? 'none' : 'block';
  submitBtn.style.display = step === totalSteps ? 'block' : 'none';

  // If step 4, populate review
  if (step === 4) {
    populateReview();
  }

  currentStep = step;
}

function nextStep() {
  if (validateCurrentStep()) {
    collectStepData();
    if (currentStep < totalSteps) {
      showStep(currentStep + 1);
    }
  }
}

function prevStep() {
  if (currentStep > 1) {
    showStep(currentStep - 1);
  }
}

function validateCurrentStep() {
  const currentStepEl = document.querySelector(`.form__step[data-step="${currentStep}"]`);
  if (!currentStepEl) return false;

  const requiredInputs = currentStepEl.querySelectorAll('input[required], select[required], textarea[required]');
  let isValid = true;

  requiredInputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  return isValid;
}

function collectStepData() {
  const currentStepEl = document.querySelector(`.form__step[data-step="${currentStep}"]`);
  if (!currentStepEl) return;

  const inputs = currentStepEl.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    if (input.type === 'checkbox') {
      formData[input.name] = input.checked;
    } else if (input.value) {
      formData[input.name] = input.value;
    }
  });
}

function populateReview() {
  const t = translations[currentLang];
  const reviewContainer = document.getElementById('formReview');
  if (!reviewContainer) return;

  const html = `
    <div class="form__review-section">
      <h4>👤 ${t.step1Title || 'Información de contacto'}</h4>
      <div class="form__review-item"><strong>${t.formName || 'Nombre'}:</strong> <span>${formData.name || '-'}</span></div>
      <div class="form__review-item"><strong>${t.formPhone || 'Teléfono'}:</strong> <span>${formData.phone || '-'}</span></div>
      <div class="form__review-item"><strong>${t.formEmail || 'Email'}:</strong> <span>${formData.email || 'No proporcionado'}</span></div>
      <div class="form__review-item"><strong>${t.formLocation || 'Ubicación'}:</strong> <span>${formData.location || 'No proporcionado'}</span></div>
    </div>

    <div class="form__review-section">
      <h4>🐾 ${t.step2Title || 'Información de tu mascota'}</h4>
      <div class="form__review-item"><strong>${t.formPetName || 'Nombre'}:</strong> <span>${formData.petName || '-'}</span></div>
      <div class="form__review-item"><strong>${t.formPetSpecies || 'Especie'}:</strong> <span>${formData.petSpecies || '-'}</span></div>
      <div class="form__review-item"><strong>${t.formPetBreed || 'Raza'}:</strong> <span>${formData.petBreed || 'No especificado'}</span></div>
      <div class="form__review-item"><strong>${t.formPetAge || 'Edad'}:</strong> <span>${formData.petAge || '-'}</span></div>
      <div class="form__review-item"><strong>${t.formPetGender || 'Sexo'}:</strong> <span>${formData.petGender || 'No especificado'}</span></div>
      <div class="form__review-item"><strong>${t.formPetWeight || 'Peso'}:</strong> <span>${formData.petWeight || 'No especificado'}</span></div>
    </div>

    <div class="form__review-section">
      <h4>📋 ${t.step3Title || 'Motivo de consulta'}</h4>
      <div class="form__review-item"><strong>${t.formConsultType || 'Servicio'}:</strong> <span>${formData.consultType || '-'}</span></div>
      <div class="form__review-item"><strong>${t.formUrgency || 'Urgencia'}:</strong> <span>${formData.urgency || '-'}</span></div>
      <div class="form__review-item"><strong>${t.formPreferredTime || 'Horario'}:</strong> <span>${formData.preferredTime || 'Sin preferencia'}</span></div>
      <div class="form__review-item" style="display: block; margin-top: 0.75rem;">
        <strong>${t.formSymptoms || 'Síntomas'}:</strong><br>
        <span style="margin-left: 0; margin-top: 0.5rem; display: block;">${formData.symptoms || '-'}</span>
      </div>
      ${formData.additionalInfo ? `
        <div class="form__review-item" style="display: block; margin-top: 0.75rem;">
          <strong>${t.formAdditional || 'Info adicional'}:</strong><br>
          <span style="margin-left: 0; margin-top: 0.5rem; display: block;">${formData.additionalInfo}</span>
        </div>
      ` : ''}
    </div>
  `;

  reviewContainer.innerHTML = html;
}

function validateField(field) {
  const t = translations[currentLang];
  let errorMsg = '';
  const fieldName = field.name || field.id;
  const errorSpan = document.getElementById(fieldName + 'Error') ||
                    document.getElementById(fieldName.replace('contact', '').toLowerCase() + 'Error');

  if (field.hasAttribute('required') && !field.value.trim()) {
    errorMsg = t.formRequired || 'Este campo es obligatorio';
  } else if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      errorMsg = t.formInvalidEmail || 'Email inválido';
    }
  } else if (field.type === 'tel' && field.value && field.hasAttribute('required')) {
    const phoneRegex = /^\d{4}[-\s]?\d{4}$/;
    if (!phoneRegex.test(field.value.replace(/\s/g, ''))) {
      errorMsg = 'Formato: 0000-0000';
    }
  } else if (field.type === 'checkbox' && field.hasAttribute('required') && !field.checked) {
    errorMsg = t.formRequired || 'Debes aceptar para continuar';
  }

  if (errorSpan) {
    errorSpan.textContent = errorMsg;
    errorSpan.classList.toggle('active', !!errorMsg);
  }

  field.classList.toggle('invalid', !!errorMsg);
  return !errorMsg;
}

function handleMultiStepFormSubmit(e) {
  e.preventDefault();

  if (!validateCurrentStep()) return;

  collectStepData();

  // Generate structured WhatsApp message
  const message = generateWhatsAppMessage();
  const encodedMessage = encodeURIComponent(message);

  // Open WhatsApp
  window.open(`${CONFIG.whatsapp.url}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');

  // Show success message
  const messageDiv = document.getElementById('formMessage');
  const t = translations[currentLang];
  if (messageDiv) {
    messageDiv.textContent = t.formSuccess || 'Redirigiendo a WhatsApp...';
    messageDiv.className = 'form__message success';

    setTimeout(() => {
      messageDiv.className = 'form__message';
      // Reset form and go back to step 1
      document.getElementById('contactForm').reset();
      showStep(1);
      formData = {};
    }, 3000);
  }
}

function generateWhatsAppMessage() {
  const t = translations[currentLang];

  let message = `🏥 *NUEVA CONSULTA - VETERINARIA DEL SUR*\n\n`;

  // Contact Information
  message += `👤 *DATOS DEL DUEÑO*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `• Nombre: ${formData.name}\n`;
  message += `• Teléfono: ${formData.phone}\n`;
  if (formData.email) message += `• Email: ${formData.email}\n`;
  if (formData.location) message += `• Ubicación: ${formData.location}\n`;
  message += `\n`;

  // Pet Information
  message += `🐾 *INFORMACIÓN DE LA MASCOTA*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `• Nombre: ${formData.petName}\n`;
  message += `• Especie: ${formData.petSpecies}\n`;
  if (formData.petBreed) message += `• Raza: ${formData.petBreed}\n`;
  message += `• Edad: ${formData.petAge}\n`;
  if (formData.petGender) message += `• Sexo: ${formData.petGender}\n`;
  if (formData.petWeight) message += `• Peso: ${formData.petWeight}\n`;
  message += `\n`;

  // Consultation Details
  message += `📋 *MOTIVO DE CONSULTA*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━\n`;
  message += `• Servicio: ${formData.consultType}\n`;
  message += `• Urgencia: ${formData.urgency}\n`;
  if (formData.preferredTime) message += `• Horario preferido: ${formData.preferredTime}\n`;
  message += `\n`;
  message += `📝 *Síntomas/Motivo:*\n${formData.symptoms}\n`;

  if (formData.additionalInfo) {
    message += `\n💡 *Información adicional:*\n${formData.additionalInfo}\n`;
  }

  message += `\n━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📅 Fecha: ${new Date().toLocaleDateString('es-PA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })}\n`;
  message += `\n_Enviado desde veterinariadelsur.com.pa_`;

  return message;
}

// Accessibility
function setupAccessibility() {
  // Skip link
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('main-content');
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus();
        target.removeAttribute('tabindex');
      }
    });
  }

  // Keyboard navigation for mobile menu
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuToggle.click();
      }
    });
  }

  // Focus trap in mobile menu when open
  const nav = document.getElementById('nav');
  if (nav) {
    nav.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && nav.classList.contains('active')) {
        const focusableElements = nav.querySelectorAll('a[href], button:not([disabled])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }
}

// Reduced motion support
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  document.documentElement.style.setProperty('--transition-speed', '0.01ms');
}

// Performance: Lazy load images
if ('loading' in HTMLImageElement.prototype) {
  // Browser supports native lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// Console message
console.log('%cVeterinaria Del Sur Panamá', 'font-size: 20px; font-weight: bold; color: #073B78;');
console.log('%cDesarrollado por JoeCodex', 'font-size: 14px; color: #56B8EA;');
console.log('%chttps://josuethacevedo.online', 'font-size: 12px; color: #596578;');

// Map Initialization with Leaflet + OpenStreetMap
let vetSurMap = null;
let vetSurMarker = null;

function initializeMap() {
  const mapContainer = document.getElementById('map');
  const placeholder = document.getElementById('mapPlaceholder');

  if (!mapContainer || typeof L === 'undefined') {
    console.error('Leaflet or map container not available');
    return;
  }

  try {
    // Hide placeholder
    if (placeholder) {
      placeholder.classList.add('hidden');
    }

    // Show map container
    mapContainer.classList.add('loaded');

    // Initialize map centered on clinic
    vetSurMap = L.map('map', {
      scrollWheelZoom: false, // Disable scroll zoom initially (better UX on mobile)
      zoomControl: true
    }).setView([CONFIG.address.latitude, CONFIG.address.longitude], 17);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(vetSurMap);

    // Add marker
    vetSurMarker = L.marker([CONFIG.address.latitude, CONFIG.address.longitude])
      .addTo(vetSurMap)
      .bindPopup(getMapPopupContent());

    // Enable scroll zoom after click (better mobile experience)
    vetSurMap.on('click', function() {
      vetSurMap.scrollWheelZoom.enable();
    });

    // Disable scroll zoom when mouse leaves map
    mapContainer.addEventListener('mouseleave', function() {
      vetSurMap.scrollWheelZoom.disable();
    });

    window.vetSurMap = vetSurMap;
    window.vetSurMarker = vetSurMarker;

  } catch (error) {
    console.error('Error initializing map:', error);
    if (placeholder) {
      placeholder.classList.remove('hidden');
      placeholder.querySelector('.map-placeholder__content').innerHTML = `
        <svg class="map-placeholder__icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h3>No se pudo cargar el mapa</h3>
        <p>Por favor, usa el botón de abajo para ver la ubicación</p>
        <a href="https://www.openstreetmap.org/?mlat=${CONFIG.address.latitude}&mlon=${CONFIG.address.longitude}#map=17/${CONFIG.address.latitude}/${CONFIG.address.longitude}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Abrir en OpenStreetMap</a>
      `;
    }
  }
}

function getMapPopupContent() {
  const t = translations[currentLang];
  return `
    <div style="text-align: center; min-width: 200px;">
      <h3 style="margin-bottom: 0.5rem; color: #073B78; font-size: 1.125rem;">${CONFIG.businessName}</h3>
      <p style="margin-bottom: 0.25rem; font-size: 0.9375rem; color: #596578;">${CONFIG.address.line1}</p>
      <p style="margin-bottom: 0.75rem; font-size: 0.9375rem; color: #596578;">${CONFIG.address.line2}</p>
      <a href="https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=;${CONFIG.address.latitude}%2C${CONFIG.address.longitude}" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="display: inline-block; padding: 0.5rem 1rem; background: #073B78; color: white; border-radius: 9999px; text-decoration: none; font-weight: 600; font-size: 0.875rem;">
        ${t.getDirections || 'Cómo llegar'}
      </a>
    </div>
  `;
}

function updateMapPopup() {
  if (window.vetSurMarker) {
    window.vetSurMarker.setPopupContent(getMapPopupContent());
  }
}

// Lazy load map with IntersectionObserver
function setupMapLazyLoad() {
  const loadMapBtn = document.getElementById('loadMapBtn');
  const mapWrapper = document.querySelector('.location__map-wrapper');

  if (loadMapBtn) {
    loadMapBtn.addEventListener('click', initializeMap);
  }

  if (mapWrapper && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !vetSurMap) {
          // Auto-load when near viewport (optional - currently disabled)
          // Uncomment next line to enable auto-load:
          // setTimeout(initializeMap, 500);
        }
      });
    }, {
      rootMargin: '200px'
    });

    observer.observe(mapWrapper);
  }
}