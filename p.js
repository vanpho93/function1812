class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const teo = new Person('Teo', 4, 100);

Person.prototype.sayHello = function() {
    console.log(`Xin chao, toi la ${this.name}`);
}

teo.sayHello();

const arr = [1, 3, 5, 7, 9];
const arr2 = [3, 5, 7, 9, 11];

Array.prototype.show = function() {
    console.log(arr);
}

arr.show();
arr2.show();
