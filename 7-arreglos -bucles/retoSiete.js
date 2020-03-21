const geekGirls = [

    {
        name: 'María',
        age: 29,
        profession: 'diseñadora',
    },

    {
        name: 'Lucía',
        age: 31,
        profession: 'ingeniera química',
    },

    {
        name: 'Susana',
        age: 34,
        profession: 'periodista',
    },

    {
        name: 'Rocío',
        age: 25,
        profession: 'actriz',
    },

    {
        name: 'Inmaculada',
        age: 21,
        profession: 'diseñadora',
    },
]

// FUNCIÓN COUNT GEEK GIRLS
girls = countGeekGirls(geekGirls);

function countGeekGirls(geekGirls) {
    var acomulador = 0;
    for (let i = 0; i < geekGirls.length; i++) {
        acomulador = acomulador + 1;
    }
    return acomulador;
}
console.log("El número de geek girls en el listado son : " + girls);

// =====================FUNCIÓN MEDIA
media = averageAge(geekGirls);

function averageAge(geekGirls) {
    var acomulador = 0;
    for (let j = 0; j < geekGirls; j++) {
        acomulador = (acomulador + geekGirls[j].age);
    }
    return acomulador / geekGirls.length;
}

console.log("Media de edad en el listado. : " + media);

// =====================FUNCIÓN NOMBRE DE LA GEEK MÁS JOVEN
masJoven = theYoungest(geekGirls);

function theYoungest(geekGirls) {
    let age = 50;
    let promedioJoven = " ";
    for (let i = 0; i < geekGirls.length; i++) {
        if (geekGirls[i].age < age) {
            age = geekGirls[i].age;
            promedioJoven = geekGirls[i].name;
        };
    }
    return promedioJoven
};
console.log("La geekGirl más joven es: " + masJoven)


// =====================FUNCIÓN GIRLS DISEÑADORA

const geekGirlsProfession = geekGirls.filter(profes => {
    return profes.profession === 'diseñadora';
}, 0)

console.log("El número de diseñadoras es: " + geekGirlsProfession.length);