'use strict';

const feliz = document.querySelector('.Feliz');
const triste = document.querySelector('.Triste');
const boton = document.querySelector('.boton');
const select = document.querySelector('.select');
const mensaje = document.querySelector('.mensaje');

function Estado() {

    console.log(select.selectedIndex);
    if (select.selectedIndex === 0) {
        mensaje.innerHTML = ':)';
    } else if (select.selectedIndex === 1) {
        mensaje.innerHTML = ':(';
    }


}
boton.addEventListener('click', Estado);

function numRandom() {
    var aleatorio = Math.round(Math.random() * 100);
    console.log("Número aleatorio entre 0 y 100:  " + aleatorio);
}
boton.addEventListener('click', numRandom);