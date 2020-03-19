const job = 'developer';
const guardar = {

}

guardar.firstname = 'Derly';
guardar.lastname = 'Murcia';
guardar.age = 23;
guardar.job = job;

guardar.aumentarAge = function() {
    this.age = this.age + 1;
    return this.age;
}


console.log(guardar.firstname);
console.log(guardar.lastname);
console.log(guardar.age);
console.log(guardar.job);
guardar.firstname = 'Nicol';
console.log(guardar.firstname);
console.log(guardar.aumentarAge());