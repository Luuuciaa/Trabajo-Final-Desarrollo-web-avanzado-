// Función para cambiar entre el tema día y noche
const tema = (nodo) => {
      // Comprueba si el body tiene la clase "noche"
    if (document.body.classList.contains("noche")) {
         // Si está en modo noche, elimina la clase para volver al modo día
        document.body.classList.remove("noche");
        // Cambia la imagen del botón
        nodo.src = "/iconos/sun.svg";
          // Guarda el tema día en el localStorage
        localStorage.setItem("tema", "dia");

    } else {
         // Si está en modo día, agrega la clase para activar el modo noche
        document.body.classList.add("noche");
         // Cambia la imagen del botón
        nodo.src = "/iconos/moon-stars.svg";
         // Guarda el tema noche en el localStorage
        localStorage.setItem("tema", "noche");
    }
}
// Función para recuperar el tema guardado
const definirTema = () => {
      // Obtiene el tema almacenado en el localStorage
    let temaGuardado = localStorage.getItem("tema");
    // Busca la imagen del botón por su ID
    let boton = document.getElementById("botonTema");

      // Comprueba si el tema guardado es noche
    if (temaGuardado == "noche") {
         // Agrega la clase noche al body
        document.body.classList.add("noche");
         // Muestra el icono correspondiente
        boton.src = "/iconos/moon-stars.svg";
    } else {
         // Si no hay un tema noche guardado, establece el modo día
        document.body.classList.remove("noche");
         // Muestra el icono correspondiente
        boton.src = "/iconos/sun.svg";
    }
}
// Ejecuta la función para establecer el tema al cargar la página
definirTema();
