// Exercise 1 – Developer Tools and Console
console.log("Hello World!");
alert("Hello World!");

// Exercise 2 – Variables
const name = "Markus";
let age = 28;
const favouriteAnimal = "Dog";

console.log(name);
console.log(age);
console.log(favouriteAnimal);

const sentence = "My name is " + name + " and I am " + age + " years old. My favourite animal is a " + favouriteAnimal + ".";
console.log(sentence);

// Exercise 3 – User Input
const userName = prompt("What is your name?");
console.log("Hello, " + userName + "!");

// Exercise 4 – Conditionals
const userAge = prompt("How old are you?");
if (userAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

// Exercise 5 – Functions
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Markus");
greetUser("Juha");

// Exercise 6 – Button – Connect JavaScript to the Page
const button = document.getElementById("Button1");

button.addEventListener("click", function() {
    alert("Homework done!");
});