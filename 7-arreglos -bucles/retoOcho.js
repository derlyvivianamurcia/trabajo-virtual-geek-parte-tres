const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false }
];


// Mostrar una frase que indique cuántas tareas hay.

tareas = countTasks(tasks);

function countTasks(tasks) {
    var acomulador = 0;
    for (let i = 0; i < tasks.length; i++) {
        acomulador = acomulador + 1;
    }
    return acomulador;
}
console.log("El número de tareas es el siguiente : " + tareas);