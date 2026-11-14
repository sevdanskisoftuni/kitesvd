document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    const updateMenuState = () => {
      const isOpen = nav.classList.contains('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      updateMenuState();
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        updateMenuState();
      });
    });
  }

  const yearNode = document.querySelector('[data-year]');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
});
