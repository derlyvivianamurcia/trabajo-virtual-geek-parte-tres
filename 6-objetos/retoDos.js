//Primera parte
const geekGirl1 = {};
geekGirl1.distance = 50;
geekGirl1.run = function() {
    return 'Estoy corriendo';
}
console.log(geekGirl1.run());


//Segunda parte 
geekGirl1.runAMarathon = function(distance) {
    return 'Estoy corriendo un maratón de ' + geekGirl1.distance + ' kilómetros';
}
console.log(geekGirl1.runAMarathon());