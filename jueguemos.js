let piezas = document.querySelectorAll(".tarjeta-pieza img");
let casillas = document.querySelectorAll(".casilla");

let piezaIzquierda = document.getElementById("pieza-izquierda");
let piezaDerecha = document.getElementById("pieza-derecha");
let piezaAbajo = document.getElementById("pieza-abajo");

let contenedorPiezas = document.querySelector(".piezas");
let tablero = document.querySelector(".tablero");
let titulo = document.querySelector(".texto1-jueguemos h2");
let mensaje = document.getElementById("mensaje-felicitaciones");
let botonReiniciar = document.getElementById("reiniciar");

// Arrastrar las piezas
piezas.forEach(function (pieza) {
    pieza.addEventListener("dragstart", function (evento) {
        evento.dataTransfer.setData("text", pieza.id);
    });
});

// Permitir soltar las piezas en las casillas
casillas.forEach(function (casilla) {

    casilla.addEventListener("dragover", function (evento) {
        evento.preventDefault();
    });

    casilla.addEventListener("drop", function (evento) {
        evento.preventDefault();

        let idPieza = evento.dataTransfer.getData("text");
        let pieza = document.getElementById(idPieza);

        if (pieza && casilla.querySelector("img") === null) {
            casilla.textContent = "";
            casilla.appendChild(pieza);

            comprobarPuzzle();
        }
    });

});


// Comprobar si el rompecabezas está armado correctamente
function comprobarPuzzle() {

    let casilla1 = document.getElementById("casilla1");
    let casilla2 = document.getElementById("casilla2");
    let casilla3 = document.getElementById("casilla3");

    let pieza1 = casilla1.querySelector("img");
    let pieza2 = casilla2.querySelector("img");
    let pieza3 = casilla3.querySelector("img");

    // Esperar a que todas las casillas tengan una pieza
    if (!pieza1 || !pieza2 || !pieza3) {
        return;
    }

    // Comprobar el orden correcto
    let imagen1 = pieza1.id === "pieza2";
    let imagen2 = pieza2.id === "pieza1";
    let imagen3 = pieza3.id === "pieza3";

  if (imagen1 && imagen2 && imagen3) {
    tablero.classList.add("puzzle-correcto");

    titulo.classList.add("titulo-oculto");
    tablero.classList.add("tablero-oculto");

    setTimeout(function () {
        mensaje.innerHTML = "¡Felicitaciones!<br>Puzzle correctamente resuelto";
        mensaje.className = "mensaje-correcto";
        void mensaje.offsetWidth;
        mensaje.classList.add("mensaje-visible");
    }, 800);



    } else {

        // Mostrar mensaje de error
    mensaje.innerHTML = "Lo sentimos, puzzle no resuelto.<br>¡Probá otra vez!";

    mensaje.className = "mensaje-error";

    // Oscurecer las piezas del rompecabezas
    piezas.forEach(function (pieza) {
        pieza.classList.add("imagen-oscura");
    });

    void mensaje.offsetWidth;

    mensaje.classList.add("mensaje-visible");
    }
}

// Reiniciar el rompecabezas
botonReiniciar.addEventListener("click", function () {

    // Devolver las piezas a su lugar original
    piezaIzquierda.appendChild(document.getElementById("pieza1"));
    piezaDerecha.appendChild(document.getElementById("pieza2"));
    piezaAbajo.appendChild(document.getElementById("pieza3"));

    contenedorPiezas.appendChild(piezaIzquierda);
    contenedorPiezas.appendChild(piezaDerecha);
    contenedorPiezas.appendChild(piezaAbajo);

    // Vaciar las casillas
    document.getElementById("casilla1").textContent =
        "Arrastre y suelte la imagen aquí";

    document.getElementById("casilla2").textContent =
        "Arrastre y suelte la imagen aquí";

    document.getElementById("casilla3").textContent =
        "Arrastre y suelte la imagen aquí";

    // Volver a mostrar el título y el tablero
    titulo.classList.remove("titulo-oculto");
    tablero.classList.remove("tablero-oculto");

    // Limpiar el mensaje
    mensaje.textContent = "";
    mensaje.className = "";

    tablero.classList.remove("puzzle-correcto");
});