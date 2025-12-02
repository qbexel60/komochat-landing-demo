// Performance optimization utilities

// Lazy loading for images
export const lazyLoadImage = (img) => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target;
        image.src = image.dataset.src;
        image.classList.remove('lazy');
        imageObserver.unobserve(image);
      }
    });
  });

  if (img) {
    imageObserver.observe(img);
  }
};

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Smooth scroll with performance optimization
export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
};

// Optimize animations for better performance
export const optimizeAnimations = () => {
  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  );

  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty(
      '--animation-duration',
      '0.01ms',
    );
    document.documentElement.style.setProperty(
      '--transition-duration',
      '0.01ms',
    );
  }
};

// Monitor performance metrics
export const monitorPerformance = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;

        // Log performance metrics (in production, send to analytics)
        console.log('Page Load Time:', loadTime + 'ms');

        // Warn if load time exceeds 3 seconds
        if (loadTime > 3000) {
          console.warn('Page load time exceeds 3 seconds:', loadTime + 'ms');
        }
      }, 0);
    });
  }
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  preloadCriticalResources();
  optimizeAnimations();
  monitorPerformance();
};
