// const arr2 = [1, 3, 5, 7, 2, 4, 7, 10];

// console.log(arr2.sort((a, b) => a - b));

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
console.log(arrPerson.sort((a, b) => - a.age + b.age));
