/**
 * Google ByteLearn - Main Application JavaScript
 * Core functionality and utilities
 */

// ===== APP STATE =====
const App = {
  user: null,
  isAuthenticated: false,
  theme: localStorage.getItem('theme') || 'light',
  sidebarOpen: false,
  chatbotOpen: false,
};

// ===== DOM UTILITIES =====
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initDropdowns();
  initModals();
  initTabs();
  initScrollReveal();
  initSearchBar();
  initChatbot();
  initTooltips();
});

// ===== THEME MANAGEMENT =====
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  App.theme = savedTheme;
}

function toggleTheme() {
  const newTheme = App.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  App.theme = newTheme;
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const mobileToggle = $('#mobileMenuToggle');
  const mobileOverlay = $('#mobileMenuOverlay');
  const mobileClose = $('#closeMobileMenu');

  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener('click', () => {
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    mobileClose?.addEventListener('click', closeMobileMenu);
    mobileOverlay.addEventListener('click', (e) => {
      if (e.target === mobileOverlay) {
        closeMobileMenu();
      }
    });
  }
}

function closeMobileMenu() {
  const mobileOverlay = $('#mobileMenuOverlay');
  if (mobileOverlay) {
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ===== SIDEBAR (Dashboard) =====
function initSidebar() {
  const sidebarToggle = $('#sidebarToggle');
  const sidebar = $('.app-sidebar');
  const appMain = $('.app-main');
  const sidebarOverlay = $('.sidebar-overlay');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      sidebar.classList.toggle('collapsed');
      appMain?.classList.toggle('sidebar-collapsed');
      sidebarOverlay?.classList.toggle('active');
    });

    sidebarOverlay?.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('active');
    });
  }
}

// ===== DROPDOWNS =====
function initDropdowns() {
  const dropdowns = $$('.dropdown');

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('.dropdown-trigger');
    
    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllDropdowns();
      dropdown.classList.toggle('active');
    });
  });

  document.addEventListener('click', closeAllDropdowns);
}

function closeAllDropdowns() {
  $$('.dropdown.active').forEach((d) => d.classList.remove('active'));
}

// ===== MODALS =====
function initModals() {
  // Close modal on backdrop click
  $$('.modal-backdrop').forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop.id.replace('-backdrop', ''));
      }
    });
  });

  // Close modal on close button
  $$('.modal-close').forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) {
        closeModal(modal.id);
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      $$('.modal.active').forEach((modal) => closeModal(modal.id));
    }
  });
}

function openModal(modalId) {
  const modal = $(`#${modalId}`);
  const backdrop = $(`#${modalId}-backdrop`);
  
  if (modal && backdrop) {
    backdrop.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = $(`#${modalId}`);
  const backdrop = $(`#${modalId}-backdrop`);
  
  if (modal && backdrop) {
    modal.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ===== TABS =====
function initTabs() {
  $$('.tabs').forEach((tabContainer) => {
    const tabs = tabContainer.querySelectorAll('.tab');
    const panes = tabContainer.parentElement.querySelectorAll('.tab-pane');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab;

        // Update active tab
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        // Update active pane
        panes.forEach((pane) => {
          pane.classList.toggle('active', pane.id === targetId);
        });
      });
    });
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollReveal() {
  const reveals = $$('.reveal');
  
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((el) => observer.observe(el));
}

// ===== SEARCH BAR =====
function initSearchBar() {
  const searchInput = $('.navbar-search .search-input');
  
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          window.location.href = `pages/courses.html?search=${encodeURIComponent(query)}`;
        }
      }
    });
  }
}

// ===== CHATBOT =====
function initChatbot() {
  const trigger = $('#chatbotTrigger');
  const widget = $('#chatbotWidget');

  if (trigger) {
    trigger.addEventListener('click', () => {
      // For now, redirect to a chatbot page or show a modal
      // In full implementation, this would open a chat interface
      console.log('Chatbot triggered');
      // openModal('chatbot-modal');
    });
  }
}

// ===== TOOLTIPS =====
function initTooltips() {
  // Tooltips are handled via CSS and data-tooltip attribute
  // This function is for any JS-based tooltip logic if needed
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info', duration = 3000) {
  const container = $('#toast-container') || createToastContainer();
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type} toast-enter`;
  toast.innerHTML = `
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">×</button>
  `;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-exit');
    setTimeout(() => toast.remove(), 200);
  }, duration);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toast-container';
  container.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  document.body.appendChild(container);
  return container;
}

// ===== FORM VALIDATION =====
function validateForm(form) {
  const inputs = form.querySelectorAll('[required]');
  let isValid = true;

  inputs.forEach((input) => {
    const value = input.value.trim();
    const errorEl = input.parentElement.querySelector('.form-error');

    if (!value) {
      input.classList.add('error');
      if (errorEl) errorEl.textContent = 'This field is required';
      isValid = false;
    } else if (input.type === 'email' && !isValidEmail(value)) {
      input.classList.add('error');
      if (errorEl) errorEl.textContent = 'Please enter a valid email';
      isValid = false;
    } else {
      input.classList.remove('error');
      if (errorEl) errorEl.textContent = '';
    }
  });

  return isValid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== LOADING STATE =====
function showLoading(element) {
  element.classList.add('loading');
  element.disabled = true;
  const originalContent = element.innerHTML;
  element.dataset.originalContent = originalContent;
  element.innerHTML = '<span class="spinner spinner-sm"></span>';
}

function hideLoading(element) {
  element.classList.remove('loading');
  element.disabled = false;
  element.innerHTML = element.dataset.originalContent || element.innerHTML;
}

// ===== UTILITY FUNCTIONS =====
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
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

// ===== LOCAL STORAGE HELPERS =====
function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }
}

function getFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.error('Error reading from localStorage:', e);
    return defaultValue;
  }
}

// ===== EXPORT FOR MODULES =====
window.App = App;
window.openModal = openModal;
window.closeModal = closeModal;
window.showToast = showToast;
window.toggleTheme = toggleTheme;
