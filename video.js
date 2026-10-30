let video = document.querySelector("#video");
let play = document.querySelector("#botonPlay");
let pause = document.querySelector("#botonPause");

// Variable que vamos a usar para guardar el intervalo
let muestraTiempoActual;

// Función que transforma los segundos del video
const transformarTiempo = (tiempo) => {
    let minutos;
    let segundos;

    // Si el tiempo es mayor a 60 segundos,calculamos los minutos y los segundos restantes
    if (tiempo > 60) {
        minutos = parseInt(tiempo / 60);
        segundos = parseInt(tiempo % 60);

        // Si el tiempo es menor o igual a 60 segundos
    } else {
        minutos = 0;
        segundos = parseInt(tiempo);
    }

    // Si los minutos tienen un solo número, agregamos un 0 adelante
    if (minutos < 10) {
        minutos = `0${minutos}`;
    }
    // Si los segundos tienen un solo número, agregamos un 0 adelante
    if (segundos < 10) {
        segundos = `0${segundos}`
    }
    // Devolvemos el tiempo con formato minutos:segundos
    return `${minutos}:${segundos}`
}


// Función que muestra la duración total del video
const mostrarDuracion = () => {
    document.querySelector("#duracion-total").textContent = transformarTiempo(video.duration)
}

// Cuando hacemos click en el botón Play
play.addEventListener("click", () => {
    video.play()
    // Creamos un intervalo que se ejecuta cada 1 segundo
    muestraTiempoActual = setInterval(() => {
        // Obtenemos el tiempo actual del video y lo transformamos al formato 00:00
        let tiempo = transformarTiempo(video.currentTime);
        document.querySelector("#duracion-actual").textContent = tiempo;
        let progresoActual = parseInt((video.currentTime / video.duration) * 100); //porcentaje del avance del video
        document.querySelector(".progreso").style.width = `${progresoActual}%`// Cambiamos el ancho de la barra de progreso según el porcentaje


    }, 1000);
});

// Cuando hacemos click en el botón Pausa
pause.addEventListener("click", () => {
    video.pause();
    // Detenemos el intervalo que estaba mostrando  el tiempo actual
    clearInterval(muestraTiempoActual)
});




