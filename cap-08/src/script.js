let cartas = ["A", "A", "B", "B", "C", "C", "D", "D"];
let movimientos = 0;
let cartasDescubiertas = [];


function mezclarCartas() {
    cartas.sort(() => 0.5 - Math.random());
}


function cargarJuego() {
    if (localStorage.getItem("cartasDescubiertas")) {
        cartasDescubiertas = JSON.parse(localStorage.getItem("cartasDescubiertas"));
        movimientos = parseInt(localStorage.getItem("movimientos"));
    }
    actualizarTablero();
}


function actualizarTablero() {
    const tablero = document.getElementById("tablero");
    tablero.innerHTML = "";
    cartas.forEach((carta, index) => {
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.textContent = cartasDescubiertas.includes(index) ? carta : "";
        cardElement.onclick = () => descubrirCarta(index);
        tablero.appendChild(cardElement);
    });
}


function descubrirCarta(index) {
    if (!cartasDescubiertas.includes(index)) {
        cartasDescubiertas.push(index);
        movimientos++;
        guardarProgreso();
        actualizarTablero();
    }
}


function guardarProgreso() {
    localStorage.setItem("cartasDescubiertas", JSON.stringify(cartasDescubiertas));
    localStorage.setItem("movimientos", movimientos.toString());
}


function reiniciarJuego() {
    cartasDescubiertas = [];
    movimientos = 0;
    mezclarCartas();
    guardarProgreso();
    actualizarTablero();
}


window.onload = () => {
    mezclarCartas();
    cargarJuego();
};
