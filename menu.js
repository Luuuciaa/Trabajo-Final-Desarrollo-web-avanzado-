function mostrar() {
    let nav = document.querySelector("nav");

    if (window.scrollY > 80) {
        nav.classList.add("cambioNav");
    } else {
        nav.classList.remove("cambioNav");
    }
}

window.addEventListener("scroll", mostrar);