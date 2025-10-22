/**
 * Omnex Landing Page - Main JavaScript
 * Handles smooth scrolling, mobile navigation, and scroll effects
 */

(function() {
  'use strict';

  // ===================================
  // Configuration
  // ===================================
  const CONFIG = {
    scrollThreshold: 50,
    animationDelay: 100,
    smoothScrollOffset: 80
  };

  // ===================================
  // DOM Elements
  // ===================================
  const elements = {
    header: document.getElementById('header'),
    mobileToggle: document.getElementById('mobileToggle'),
    navList: document.getElementById('navList'),
    navLinks: document.querySelectorAll('.nav__link'),
    contactForm: document.getElementById('contactForm'),
    scrollElements: document.querySelectorAll('.fade-in-up')
  };

  // ===================================
  // Header Scroll Effect
  // ===================================
  function handleHeaderScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > CONFIG.scrollThreshold) {
      elements.header.classList.add('scrolled');
    } else {
      elements.header.classList.remove('scrolled');
    }
  }

  // ===================================
  // Mobile Navigation Toggle
  // ===================================
  function toggleMobileNav() {
    elements.navList.classList.toggle('active');
    elements.mobileToggle.classList.toggle('active');

    // Animate hamburger icon
    const spans = elements.mobileToggle.querySelectorAll('span');
    if (elements.mobileToggle.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  }

  // ===================================
  // Smooth Scrolling
  // ===================================
  function smoothScroll(e) {
    const href = this.getAttribute('href');

    // Only handle internal anchor links
    if (href && href.startsWith('#')) {
      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop - CONFIG.smoothScrollOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        if (elements.navList.classList.contains('active')) {
          toggleMobileNav();
        }
      }
    }
  }

  // ===================================
  // Intersection Observer for Animations
  // ===================================
  function setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * CONFIG.animationDelay);

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elements.scrollElements.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(element);
    });
  }

  // ===================================
  // Contact Form Handler
  // ===================================
  function handleFormSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(elements.contactForm);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showNotification('Por favor, insira um e-mail válido.', 'error');
      return;
    }

    // Here you would typically send the data to a server
    console.log('Form submitted:', data);

    // Show success message
    showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');

    // Reset form
    elements.contactForm.reset();
  }

  // ===================================
  // Notification System
  // ===================================
  function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 16px 24px;
      background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
      color: white;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      z-index: 9999;
      animation: slideInRight 0.3s ease-out;
      max-width: 400px;
      font-size: 14px;
      line-height: 1.5;
    `;

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease-out';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 5000);
  }

  // ===================================
  // Add CSS Animations for Notifications
  // ===================================
  function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes slideOutRight {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ===================================
  // Active Navigation Link
  // ===================================
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        elements.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // ===================================
  // Throttle Function for Performance
  // ===================================
  function throttle(func, wait) {
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

  // ===================================
  // Event Listeners
  // ===================================
  function initEventListeners() {
    // Scroll events (throttled for performance)
    window.addEventListener('scroll', throttle(() => {
      handleHeaderScroll();
      updateActiveNavLink();
    }, 100));

    // Mobile navigation toggle
    if (elements.mobileToggle) {
      elements.mobileToggle.addEventListener('click', toggleMobileNav);
    }

    // Smooth scrolling for navigation links
    elements.navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    // All buttons with smooth scroll
    const scrollButtons = document.querySelectorAll('a[href^="#"]');
    scrollButtons.forEach(button => {
      button.addEventListener('click', smoothScroll);
    });

    // Contact form submission
    if (elements.contactForm) {
      elements.contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (elements.navList.classList.contains('active') &&
          !elements.navList.contains(e.target) &&
          !elements.mobileToggle.contains(e.target)) {
        toggleMobileNav();
      }
    });

    // Handle window resize
    window.addEventListener('resize', throttle(() => {
      // Close mobile menu on desktop
      if (window.innerWidth > 768 && elements.navList.classList.contains('active')) {
        toggleMobileNav();
      }
    }, 250));
  }

  // ===================================
  // Initialize
  // ===================================
  function init() {
    // Add notification styles
    addNotificationStyles();

    // Setup scroll animations
    setupScrollAnimations();

    // Initialize event listeners
    initEventListeners();

    // Initial header state
    handleHeaderScroll();

    // Log initialization
    console.log('Omnex Landing Page initialized successfully');
  }

  // ===================================
  // Start when DOM is ready
  // ===================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
