/* // function syntax for a named function
function nameOfFunction() {
  // code goes here
}
//to run function we call it or invoke it
nameOfFunction();



function greeting(){
    console.log("Hello");
    return true;
}
//greeting();

//defference between arguments and parameters arguments are sent to a function 
//parameters accept the values from the arguments

function area(length, width){
    return length*width
}

let result = area(2,3);
console.log(result);
console.log(area(4,3));



function areaRectangle(length = 5, width = 5){
    return length*width
}
console.log(areaRectangle());
console.log(areaRectangle(6,6));
console.log(areaRectangle(6))
console.log(areaRectangle(undefined,6))
console.log(areaRectangle(undefined,6)) */

//anon functions do not have names

/* (function(){
    console.log("Who are you?");
    
})()

function makeMore (element){
    console.log(element + "'s")
}  
let animals = ["Horse", "Dog", "Cow"]
/* animals.forEach(function(kitty){
    console.log(kitty + "'s");
    
}) */

//fat arrows are the modern way to write functions

/*function greeting(){
    console.log("Hello");
}

let greetings = () => {
    console.log("hello");
    
}*/

//let area = (length, width) => length * width;

let area = (length, width) => 2 * length * width;
console.log(area(5, 60));

let greeting = arg => `Hello, ${arg}`;

console.log(greeting("Sam")); // Output: Hello, Sam

let animals = ["Horse", "Dog", "Cow"]
let multiples = (animals) => {
    let newAnimals = []
    animals.forEach( el => 
    newAnimals.push(el + "'s"))
    return newAnimals
}

let manyAnimals = multiples(animals)
console.log(manyAnimals[manyAnimals.length-1])

