
function mostrarTarjetas() {
    let tarjetas = document.querySelectorAll(
        ".tarjeta3, .tarjeta4, .tarjeta5"
    );

    //comprueba si bajaste más de 300 píxeles.
    if (window.scrollY > 300) {
        //recorre todas las tarjetas.
        tarjetas.forEach(function(tarjeta) {
            // agrega la clase que activa la animación.
            tarjeta.classList.add("aparecer");
        });
    }
}

window.addEventListener("scroll", mostrarTarjetas);
