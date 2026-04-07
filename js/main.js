(function() {
  'use strict';

  // Hamburger
  var menuToggle = document.querySelector('.mobile-menu-toggle');
  var mainNav = document.querySelector('.main-navigation');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      var isOpen = mainNav.classList.toggle('is-open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    // Close on link click
    document.querySelectorAll('.nav-list a').forEach(function(link) {
      link.addEventListener('click', function() {
        mainNav.classList.remove('is-open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll with header offset
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Fade-in on scroll
  var fadeTargets = document.querySelectorAll('section, .service-card, .price-card, .area-tag');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    fadeTargets.forEach(function(el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  // Contact form (guard for pages without form)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var required = form.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function(field) {
        if (!field.value.trim()) { field.style.borderColor = '#c0392b'; valid = false; }
        else { field.style.borderColor = ''; }
      });
      if (valid) {
        var btn = form.querySelector('.btn-submit');
        btn.textContent = '\u2713 Message Sent!';
        btn.style.background = '#2a6a2a';
        btn.style.color = '#fff';
        btn.disabled = true;
        setTimeout(function() {
          btn.textContent = 'Send Message';
          btn.style.background = '';
          btn.style.color = '';
          btn.disabled = false;
          form.reset();
        }, 4000);
      }
    });
  }
})();
