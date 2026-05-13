 IIFE for creating private scope 
 
// Basic IIFE 
(function() { 
    let privateVar = "I am private"; 
    console.log("IIFE executed:", privateVar); 
})();  // Immediately invoked 
 
// IIFE with parameters 
(function(name, age) { 
    console.log(`Hello ${name}, you are ${age} years old.`); 
ASSIGNMENT – 1 & 2 
})("Alice", 30); 
 
// IIFE with arrow function 
(() => { 
    console.log("Arrow IIFE executed"); 
})(); 
 
// Module pattern using IIFE 
const calculator = (function() { 
    // Private variables and functions 
    let result = 0; 
     
    function validate(n) { 
        return typeof n === "number" && !isNaN(n); 
    } 
     
    // Public API 
    return { 
        add: function(n) { 
            if (validate(n)) result += n; 
            return this; 
        }, 
        subtract: function(n) { 
            if (validate(n)) result -= n; 
            return this; 
ASSIGNMENT – 1 & 2 
        }, 
        multiply: function(n) { 
            if (validate(n)) result *= n; 
            return this; 
        }, 
        getResult: function() { 
            return result; 
        }, 
        reset: function() { 
            result = 0; 
            return this; 
        } 
    }; 
})(); 
 
console.log("\nCalculator Module:"); 
calculator.add(10).subtract(3).multiply(2); 
console.log("Result:", calculator.getResult()); // 14 
calculator.reset().add(5).multiply(4); 
console.log("Result:", calculator.getResult()); // 20 
 
// Result variable is private - cannot be accessed directly 
// console.log(calculator.result); // undefined