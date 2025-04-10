//animaciones header
document.addEventListener("DOMContentLoaded", function () {
    // Agregar clase 'visible' para animar la entrada del header
    const header = document.querySelector("header");
    setTimeout(() => {
        header.classList.add("visible");
    }, 300); // Retraso para que se vea más fluido
});