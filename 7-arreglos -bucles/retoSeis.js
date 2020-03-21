const elementoUno = document.getElementById('elementoUno');
const elementoDos = document.getElementById('elementoDos');

const mensaje = document.querySelector('.mensaje');
const pasatiempos = [];
var contador;

const funActividad = (e) => {

    e.preventDefault();
    pasatiempos[0] = elementoUno.value;
    pasatiempos[1] = elementoDos.value;
    for (const elemento of pasatiempos) {

        mensaje.innerHTML += (`"${elemento}" ¡ A mí también me encantó `);
    }
}
document.getElementById("myForm").addEventListener("submit", funActividad);