// Vamos a crear un contador con los datos que comentamos en la introducción de esta sesión.Este contador deberá tener como propiedades un valor máximo, un valor mínimo, un valor actual y un valor inicial y como métodos deberá tener un aumentar, disminuir y restablecer.


const contador = {};
contador.VALOR_MAXIMO = 0;
contador.VALOR_MINIMO = 5;
contador.VALOR_ACTUAL = 0;
contador.VALOR_INICIAL = 0;
contador.DISMINUIR_VALOR = -1;
contador.AUMENTAR_VALOR = +1;

contador.aumentar = function() {
    this.VALOR_ACTUAL = this.VALOR_ACTUAL + this.AUMENTAR_VALOR;
    return (contador.VALOR_ACTUAL);
}

contador.disminuir = function() {
    this.VALOR_ACTUAL = this.VALOR_ACTUAL + this.DISMINUIR_VALOR;
    return (contador.VALOR_ACTUAL);
}

contador.restablecer = function() {
    this.VALOR_ACTUAL = 0;
    return (contador.VALOR_ACTUAL);
}

console.log(contador.disminuir());
console.log(contador.aumentar());
console.log(contador.aumentar());

console.log(contador.disminuir());
console.log(contador.restablecer());
console.log(contador.VALOR_ACTUAL);