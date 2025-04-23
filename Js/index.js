//animaciones header
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    setTimeout(() => {
        header.classList.add("visible");
    }, 300); 
});

  // Detectar cuando los elementos aparecen en pantalla
  const animarElementos = document.querySelectorAll('.animar');

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('animado');
        observer.unobserve(entrada.target); 
      }
    });
  }, {
    threshold: 0.1 
  });

  animarElementos.forEach(el => observer.observe(el));