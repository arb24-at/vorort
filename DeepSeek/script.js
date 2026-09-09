// VorOrt — Minimal JavaScript
// Handles mobile menu toggle and dropdown keyboard support

(function () {
  'use strict';

  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      mainNav.classList.toggle('mobile-open');
    });
  }

  // Close mobile nav when a link is clicked
  mainNav?.addEventListener('click', function (e) {
    if (e.target.closest('a') && mainNav.classList.contains('mobile-open')) {
      mainNav.classList.remove('mobile-open');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Keyboard support for nav dropdown toggle
  const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
  dropdownToggles.forEach(function (btn) {
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const menu = this.parentElement.querySelector('.nav-dropdown-menu');
        if (menu) {
          const isVisible = window.getComputedStyle(menu).display !== 'none';
          menu.style.display = isVisible ? 'none' : 'block';
        }
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown-menu').forEach(function (menu) {
        menu.style.display = '';
      });
    }
  });

})();