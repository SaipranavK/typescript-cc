// Strict type const -> value cannot be changed 
const character = "mario";
console.log(character)

const inputs = document.querySelectorAll('input')
console.log(inputs)

inputs.forEach(input => {
    console.log(input);
});

// Strict type let -> type cannot be changed but alternative value of same type can be assigned
let  age = 30; 
let isBlackBelt =  false;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}
console.log(circ(10))

// Arrays -> picks type when initialised
let names = ["Luigi", "Mario", "Yoshi"]
names.push("Toad")

let numbers = [1, 2, 3]

let mixed = ["ken", 4, 8, "Zelda", true]
mixed.push(5)
mixed.push(false)
mixed[2] = "Hyrule"


//objects
let ninja = {
    name: 'Mario',
    belt: 'Black',
    age: 30
}

ninja.age = 40

// Explicit Types
let game: string //declaration
let rating: number
let isGood: boolean

let goatGames: string[] = []

// Union Type
let multiple: (string|number)[] = []

//objects
let ninjaOne: object
ninjaOne = {name: "Zero", age: 20}

// Dynamic types
let dtype: any;

let mixedArr: any[] = [];

let dyNinja: {
    name: any,
    age: any
}

let greet: Function

greet= () => {
    console.log("Hello World")
}

// c is a optional param
const add = (a: number, b: number, c?: number | string) => {
    console.log(a+b)
}

add(5, 10)

const minus = (a: number, b: number, c?: number | string) => {
    return a-b
}

let result = minus(10, 7)

// Type alias
type SN = string | number;

let notes: {
    content: SN
}

notes = {
    content: "Text Note"
}

// Function Signature
let calc: (a: number, b: number, c: string) => number

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add'){
        return numOne + numTwo
    }
    else{
        return numOne - numTwo
    }
}