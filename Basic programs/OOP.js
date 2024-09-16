//encapsulation
class Student {
    #name;
    #age;
    #grade
    constructor(name, age, grade) {
        this.#name = name;
        this.#age = age
        this.#grade = grade
    }
    getDetails() {
        console.log(`${this.#name} is ${this.#age} years old and studies in ${this.#grade} grade`)
    }
    setAge(age) {
        if (age > 0) {
            this.#age = age
        }
        else console.log('invalid age')
    }
}
const student = new Student('Akash', 25, 12);
student.getDetails()
student.setAge(26)
student.getDetails()

//inheritance
class Fruit {
    constructor(name, taste) {
        this.name = name
        this.taste = taste
    }
    eat() {
        console.log('Akash ate the fruit')
    }
}
class Apple extends Fruit {
    constructor(name, taste) {
        super(name, taste)
    }
    eat() {
        console.log(`Akash ate an ${this.name}`)
    }
}
const fruit = new Apple('Apple', 'bitter')
fruit.eat()

//abstraction
class Laptop {
    constructor() {
        if (this.constructor === Laptop) {
            throw new Error("Can't create object of this class")
        }
    }
    laptopTurnOn() {

    }
}
class Dell extends Laptop {
    constructor(color, screen) {
        super()
        this.color = color
        this.screen = screen
    }
    laptopTurnOn() {
        console.log(' Dell turns on and says Welcome')
    }
}
const dell = new Dell('black', 'HD')
dell.laptopTurnOn()

