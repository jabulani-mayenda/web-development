: Functions that call themselves 
// Factorial using recursion 
function factorial(n) { 
// Base case 
if (n <= 1) return 1; 
// Recursive case 
return n * factorial(n - 1); 
} 
console.log("Factorial Examples:"); 
console.log("5! =", factorial(5));   // 120 
console.log("7! =", factorial(7));   // 5040 
ASSIGNMENT – 1 & 2 
 
// Fibonacci sequence 
function fibonacci(n) { 
    if (n <= 1) return n; 
    return fibonacci(n - 1) + fibonacci(n - 2); 
} 
 
console.log("\nFibonacci Sequence:"); 
for (let i = 0; i <= 10; i++) { 
    console.log(`F(${i}) = ${fibonacci(i)}`); 
} 
 
// Recursive directory traversal simulation 
function traverseObject(obj, path = "") { 
    for (let key in obj) { 
        let currentPath = path ? `${path}.${key}` : key; 
        if (typeof obj[key] === "object" && obj[key] !== null) { 
            traverseObject(obj[key], currentPath); 
        } else { 
            console.log(`${currentPath} = ${obj[key]}`); 
        } 
    } 
} 
 
let data = { 
ASSIGNMENT – 1 & 2 
    user: { 
        name: "John", 
        address: { 
            street: "123 Main St", 
            city: "Boston" 
        } 
    }, 
    settings: { 
        theme: "dark" 
    } 
}; 
console.log("\nRecursive Object Traversal:"); 
traverseObject(data);