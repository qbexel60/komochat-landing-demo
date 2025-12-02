// Scroll-based animations with performance optimization

// Intersection Observer for fade-in animations
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach((el) => observer.observe(el));
};

// Smooth scroll navigation with performance optimization
export const initSmoothScrollNavigation = () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
};

// Parallax effect with performance optimization
export const initParallaxEffects = () => {
  const parallaxElements = document.querySelectorAll('.parallax');

  if (parallaxElements.length === 0) return;

  let ticking = false;

  const updateParallax = () => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach((element) => {
      const rate = scrolled * -0.5;
      element.style.transform = `translate3d(0, ${rate}px, 0)`;
    });

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Initialize all scroll animations
export const initAllScrollAnimations = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
      initSmoothScrollNavigation();
      initParallaxEffects();
    });
  } else {
    initScrollAnimations();
    initSmoothScrollNavigation();
    initParallaxEffects();
  }
};
