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
// let index = 1;
// arrPerson.forEach(person => console.log(`${index++}. ${person.name}`));

// arrPerson.forEach((person, index) => console.log(`${index + 1}. ${person.name}`));

const arrOldPerson = arrPerson.filter(person => person.age >= 13);
// console.log(arrOldPerson);

console.log(arrPerson.map(person => person.age));

const arr2 = [1, 3, 5, 7, 9];
const arr3 = arr2.map(num => num * num);
console.log(arr3);
