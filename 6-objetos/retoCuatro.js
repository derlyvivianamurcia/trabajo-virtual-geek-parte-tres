// Tenemos que preparar un botón con un listener para loguear el objeto event en la consola.Investigar si la clave type que encontramos en él es una propiedad o un método.

const button = document.querySelector('button');

button.addEventListener('click', (event) => console.log(' ', event));