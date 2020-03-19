// Vamos a preparar un input de tipo texto, a recogerlo desde JavaScript y a imprimirlo en la consola con console.dir
const button = document.querySelector('.btn');
const text = document.querySelector('.text');

//OPCIÓN UNO 
text.addEventListener('click', (event) => console.log(' ', event));

//OPCIÓN DOS CON EL BOTÓN
// addEventListener('click', () => console.dir(text.value));
button.addEventListener('click', () => console.dir(text.value));