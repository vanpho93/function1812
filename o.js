class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const arrPerson = [
    new Person('Ti', 10, 150),
    new Person('Teo', 15, 130),
    new Person('Tun', 13, 110),
];

Array.prototype.myFind= function(fn) {
    for(let i = 0; i < this.length; i++) {
        if (fn(this[i])) return this[i];
    }
}

Array.prototype.mySome= function(fn) {
    for(let i = 0; i < this.length; i++) {
        if (fn(this[i])) return true;
    }
    return false;
}

Array.prototype.myEvery= function(fn) {
    for(let i = 0; i < this.length; i++) {
        if (!fn(this[i])) return false;
    }
    return true;
}

Array.prototype.myFilter= function(fn) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if (fn(this[i])) arr.push(this[i]);
    }
    return arr;
}

Array.prototype.myMap= function(fn) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        arr.push(fn(this[i]));
    }
    return arr;
}
// console.log(arrPerson.myFind(person => person.name === 'Teo'));
console.log(arrPerson.myFilter(person => person.age > 10));

// console.log(arrPerson.findIndex(person => person.name === 'Teo'));
// console.log(arrPerson.find(person => person.name === 'Teo'));
// console.log(arrPerson.some(person => person.name === 'Tun'));
// console.log(arrPerson.every(person => person.age > 11));
