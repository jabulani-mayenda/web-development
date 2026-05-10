// Program 21: Basic function declarations and invocation 
 
// Function without parameters 
function greet() { 
    console.log("Hello, welcome to JavaScript!"); 
} 
ASSIGNMENT – 1 & 2 
// Function with parameters 
function greetPerson(name) { 
console.log(`Hello, ${name}! Welcome to JavaScript!`); 
} 
// Function with return value 
function add(a, b) { 
return a + b; 
} 
// Function with multiple returns 
function getGrade(score) { 
if (score >= 90) return "A"; 
if (score >= 80) return "B"; 
if (score >= 70) return "C"; 
if (score >= 60) return "D"; 
return "F"; 
} 
// Calling functions 
greet(); 
greetPerson("Alic"); 
greetPerson("Bob"); 
ASSIGNMENT – 1 & 2 
let sum = add(15, 25); 
console.log("15 + 25 =", sum); 
console.log("Score 95 gets grade:", getGrade(95)); 
console.log("Score 75 gets grade:", getGrade(75)); 
console.log("Score 55 gets grade:", getGrade(55)); 