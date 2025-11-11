(function () {
  const observerOptions = {
    threshold: 0.12,
  };

  const revealOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, observerOptions);

  document.querySelectorAll('.fade-up').forEach((element) => {
    observer.observe(element);
  });

  const header = document.querySelector('.header');
  if (header) {
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop && currentScroll > 120) {
        header.style.transform = 'translateY(-120%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }
})();
