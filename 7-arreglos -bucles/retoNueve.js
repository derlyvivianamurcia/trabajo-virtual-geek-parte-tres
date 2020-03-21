let altura = 0;
acomulador = '';


altura = prompt('¿A qué altura desea tu arbolito?, digita un número');


for (let i = 0; i < altura; i++) {
    acomulador = acomulador + '▲';

    console.log('' + acomulador);
}