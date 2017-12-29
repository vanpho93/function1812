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

// console.log(arrPerson);
arrPerson.forEach(person => console.log(person));
arrPerson.forEach(function(x) {
    console.log(x);
});
