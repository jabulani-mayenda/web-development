// Program 26: Functions as arguments (callbacks) 
// Function that accepts a callback 
function processArray(arr, callback) { 
let result = []; 
for (let i = 0; i < arr.length; i++) { 
result.push(callback(arr[i], i)); 
} 
return result; 
ASSIGNMENT – 1 & 2 
} 
// Different callbacks 
function double(x) { 
return x * 2; 
} 
function square(x) { 
return x * x; 
} 
function formatCurrency(x) { 
return `$${x.toFixed(2)}`; 
} 
let numbers = [1, 2, 3, 4, 5]; 
console.log("Original array:", numbers); 
console.log("Doubled:", processArray(numbers, double)); 
console.log("Squared:", processArray(numbers, square)); 
let prices = [10.5, 25.75, 99.99]; 
console.log("Prices:", processArray(prices, formatCurrency)); 
// Inline callback (anonymous function) 
ASSIGNMENT – 1 & 2 
let tripled = processArray(numbers, function(x) { 
return x * 3; 
}); 
console.log("Tripled:", tripled); 
// Arrow function callback 
let halved = processArray(numbers, x => x / 2); 
console.log("Halved:", halved); 