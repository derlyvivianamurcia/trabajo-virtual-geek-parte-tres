function average(array) {
    let acumulador = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        acumulador = acumulador + array[i];
        count = count + 1;

    }
    return (acumulador / count);
}
console.log(average([4, 2, 7, 8, 9]));