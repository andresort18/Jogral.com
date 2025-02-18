document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll('.Valores, .VandM');

    function reveal() {
        let windowHeight = window.innerHeight;
        elements.forEach(element => {
            let elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                element.style.opacity = 1;
                element.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); 
});

document.addEventListener("DOMContentLoaded", function() {
    let elementos = document.querySelectorAll(".mision, .vision");

    function mostrarElementos() {
        let alturaVentana = window.innerHeight;
        
        elementos.forEach(elemento => {
            let posicion = elemento.getBoundingClientRect().top;
            
            if (posicion < alturaVentana - 50) {
                elemento.style.opacity = "1";
                elemento.style.transform = "translateX(0)";
            }
        });
    }

    window.addEventListener("scroll", mostrarElementos);
    mostrarElementos(); 
});

document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});