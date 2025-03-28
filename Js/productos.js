
//animaciones header
document.addEventListener("DOMContentLoaded", function () {
    // Agregar clase 'visible' para animar la entrada del header
    const header = document.querySelector("header");
    setTimeout(() => {
        header.classList.add("visible");
    }, 300); // Retraso para que se vea más fluido
});


//animaciones seccion heroe
document.addEventListener("DOMContentLoaded", function () {
    const marcas = document.querySelectorAll(".marcas");

    // Función para detectar cuando un elemento está visible en la pantalla
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para activar la animación cuando el usuario hace scroll
    function handleScroll() {
        marcas.forEach(marca => {
            if (isElementInViewport(marca)) {
                marca.classList.add("visible");
            }
        });
    }

    // Ejecutar la función en el evento scroll
    window.addEventListener("scroll", handleScroll);

    // Llamar la función una vez para activar elementos visibles al cargar
    handleScroll();
});