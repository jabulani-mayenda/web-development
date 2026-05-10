// Program 24: Function parameters and default values 
// Default parameters (ES6+) 
function greet(name = "Guest", greeting = "Hello") { 
console.log(`${greeting}, ${name}!`); 
} 
greet();                          
ASSIGNMENT – 1 & 2 
// Hello, Guest! 
greet("Alice");                   
greet("Bob", "Hi");              
// Hello, Alice! 
// Hi, Bob! 
greet(undefined, "Welcome");     
// Rest parameters (...) 
function sum(...numbers) { 
let total = 0; 
for (let num of numbers) { 
total += num; 
} 
return total; 
} 
// Welcome, Guest! 
console.log("Sum of 1,2,3:", sum(1, 2, 3)); 
console.log("Sum of 1,2,3,4,5:", sum(1, 2, 3, 4, 5)); 
// Arguments object (older way) 
function oldStyleSum() { 
let total = 0; 
for (let i = 0; i < arguments.length; i++) { 
total += arguments[i]; 
} 
return total; 
} 
ASSIGNMENT – 1 & 2 
 
console.log("Old style sum:", oldStyleSum(1, 2, 3, 4)); 