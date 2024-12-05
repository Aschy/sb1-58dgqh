export function scrollToSection(targetId: string): void {
  const target = document.getElementById(targetId);
  if (!target) return;

  const headerOffset = 80;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

export function observeSections(): void {
  const sections = document.querySelectorAll('.scroll-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        updateNavigation(entry.target.id);
      }
    });
  }, {
    threshold: 0.5
  });

  sections.forEach(section => {
    observer.observe(section);
  });
}

function updateNavigation(activeId: string): void {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    const href = link.getAttribute('href')?.substring(1);
    if (href === activeId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}