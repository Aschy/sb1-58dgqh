export function smoothScrollTo(targetId: string): void {
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

export function initSmoothScrolling(): void {
  document.querySelectorAll('[data-smooth-scroll]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
      if (targetId) {
        smoothScrollTo(targetId);
      }
    });
  });
}