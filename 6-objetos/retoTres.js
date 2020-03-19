////geekGirl2
const geekGirl1 = {};
geekGirl1.name = 'María';
geekGirl1.age = 34;
geekGirl1.profession = 'periodista';
//Nueva funcion 
geekGirl1.showBio = function() {
    return alert('Mi nombre es ' + geekGirl1.name + ', tengo ' + geekGirl1.age + ' años y soy ' + geekGirl1.profession);
}
console.log(geekGirl1.showBio());

//geekGirl2
const geekGirl2 = {};
geekGirl2.name = 'Rocío';
geekGirl2.age = 25;
geekGirl2.profession = 'actriz';
geekGirl2.showBio = function() {
    return alert('Mi nombre es ' + geekGirl2.name + ', tengo ' + geekGirl2.age + ' años y soy ' + geekGirl2.profession);
}
console.log(geekGirl2.showBio());