function makeGender(target: typeof Person){
    return class extends target {
        gender: string = "male";
    }
}

@makeGender
class Person {
    name?: string;
    age?: number;
    constructor () {

    }
    setName (name: string) {
        this.name = name;
    }
    getName (): string {
        return this.name!;
    }
}

@makeGender
class Animal {
    name?: string;
    age?: number;
    constructor () {

    }
    setName (name: string) {
        this.name = name;
    }
    getName (): string {
        return this.name!;
    }
}

const animal = new Animal();
animal.name = "KOMO";
animal.age = 11;
console.log( animal );