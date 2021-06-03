/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let btn = document.querySelector("#boton");
  btn.addEventListener("click", () => {
    //
    let centro = document.querySelector("#medio");
    let abajo = document.querySelector("#abajo");
    let arriba = document.querySelector("#arriba");
    centro.innerHTML = numeral();
    let icon = icono();
    if (icon == "♥" || icon == "♦") {
      abajo.classList.add("red");
      arriba.classList.add("red");
      centro.classList.add("red");
    } else {
      abajo.classList.remove("red");
      arriba.classList.remove("red");
      centro.classList.remove("red");
    }
    abajo.innerHTML = icon;
    arriba.innerHTML = icon;
    console.log(numeral());
    //
  });
};
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let simbolos = ["♥", "♦", "♠", "♣"];
//generar icono
function icono() {
  return simbolos[Math.floor(Math.random() * 4)];
}
function numeral() {
  return numeros[Math.floor(Math.random() * 13)];
}
