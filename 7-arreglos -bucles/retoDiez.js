let altura = 0;
let estrella = '★'
let tronco = '|';
acomulador = '';

altura = prompt('¿A qué altura desea tu arbolito?, digita un número');

console.log(estrella)
for (let i = 0; i < altura; i++) {
    acomulador = acomulador + '▲';

    console.log('' + acomulador);
}
console.log(tronco)