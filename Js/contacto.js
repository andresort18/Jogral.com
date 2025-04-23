//animaciones header
document.addEventListener("DOMContentLoaded", function () {
    // Agregar clase 'visible' para animar la entrada del header
    const header = document.querySelector("header");
    setTimeout(() => {
        header.classList.add("visible");
    }, 300); // Retraso para que se vea más fluido
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