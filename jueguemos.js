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

// Recorrer todas las imágenes para permitir arrastrarlas
piezas.forEach(function (pieza) {
     // Detectar cuando comienza el arrastre de una pieza
    pieza.addEventListener("dragstart", function (evento) {
         // Guardar el ID de la pieza que se está arrastrando
        evento.dataTransfer.setData("text", pieza.id);
    });
});

// Permitir soltar las piezas en las casillas

// Recorrer todas las casillas del tablero
casillas.forEach(function (casilla) {

     // Detectar cuando una pieza pasa por encima de una casilla
    casilla.addEventListener("dragover", function (evento) {
        evento.preventDefault();
    });

      // Detectar cuando se suelta una pieza dentro de una casilla
    casilla.addEventListener("drop", function (evento) {
        evento.preventDefault();

         // Obtener el ID de la pieza que se está arrastrando
        let idPieza = evento.dataTransfer.getData("text");

        let pieza = document.getElementById(idPieza);  // Buscar la pieza utilizando su ID

          // Comprobar que la pieza existe y que la casilla está vacía
        if (pieza && casilla.querySelector("img") === null) {
            // Borrar el texto que indica dónde soltar la imagen
            casilla.textContent = "";
             // Colocar la pieza dentro de la casilla
            casilla.appendChild(pieza);

            // Comprobar si el rompecabezas está armado correctamente
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
       // Agregar una clase para juntar las piezas del tablero
    tablero.classList.add("puzzle-correcto");

      // Ocultar el título y el tablero mediante animaciones
    titulo.classList.add("titulo-oculto");
    tablero.classList.add("tablero-oculto");

     // Esperar 800 milisegundos antes de mostrar el mensaje
    setTimeout(function () {
        // Mostrar el mensaje de felicitaciones
        mensaje.innerHTML = "¡Felicitaciones!<br>Puzzle correctamente resuelto";
         // Aplicar la clase que le da color al mensaje
        mensaje.className = "mensaje-correcto";
         // Reiniciar la animación para que pueda ejecutarse
        void mensaje.offsetWidth;
          // Agregar la clase que hace aparecer el mensaje
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