let estrella = '★'
let tronco = '|';

altura = prompt('¿A qué altura desea tu arbolito?, digita un número');

function arbolA(id) {
    var j = 1;
    var result = "";
    for (i = 1; i <= altura; i += 2) {
        result += "<br>" + (Array((1 + (Math.ceil(altura / 2)) - j)).join(" ") + Array(i + 1).join("▲"));
        j = j + 1;
    }

    document.getElementById(id).innerHTML = result;
}

arbolA("arbol1");