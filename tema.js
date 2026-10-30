
const tema = (nodo) => {
    if (document.body.classList.contains("noche")) {
        document.body.classList.remove("noche");
        nodo.src = "/iconos/sun.svg";
        localStorage.setItem("tema", "dia");
    } else {
        document.body.classList.add("noche");
        nodo.src = "/iconos/moon-stars.svg";
        localStorage.setItem("tema", "noche");
    }
}

const definirTema = () => {
    let temaGuardado = localStorage.getItem("tema");
    let boton = document.getElementById("botonTema");

    if (temaGuardado == "noche") {
        document.body.classList.add("noche");
        boton.src = "/iconos/moon-stars.svg";
    } else {
        document.body.classList.remove("noche");
        boton.src = "/iconos/sun.svg";
    }
}

definirTema();
