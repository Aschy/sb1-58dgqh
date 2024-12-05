export function initTypingAnimations() {
  const elements = document.querySelectorAll('[data-typing]');
  
  elements.forEach((element) => {
    const text = element.textContent || '';
    element.textContent = '';
    
    let index = 0;
    const speed = Number(element.getAttribute('data-typing-speed')) || 2;
    const chunkSize = Number(element.getAttribute('data-chunk-size')) || 5;
    
    function typeCharacters() {
      while (index < text.length) {
        const chunk = text.slice(index, index + chunkSize);
        element.textContent += chunk;
        index += chunkSize;
        
        if (index < text.length) {
          requestAnimationFrame(() => setTimeout(typeCharacters, speed));
          break;
        }
      }
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(typeCharacters);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    
    observer.observe(element);
  });
}