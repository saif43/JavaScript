class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        super.speak(); // Super
        console.log(this.name + ' barks.');
    }
}

let dog = new Dog('Rex');
dog.speak();

console.log('--------------------');



class Human {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Human {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

let saif = new Student('Saif',24);

console.log(saif);