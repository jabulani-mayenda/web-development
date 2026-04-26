 
try { 
    console.log("Trying to execute code..."); 
    let result = 10 / 0; 
    console.log("Result:", result); 
     
    // This will cause an error 
    let obj = undefined; 
    console.log(obj.property);  // TypeError 
} catch (error) { 
    console.log("An error occurred:", error.message); 
    console.log("Error name:", error.name); 
} finally { 
    console.log("This always executes."); 
} 
// Example 2: Input validation with try-catch 
function divideNumbers(a, b) { 
    try { 
        if (b === 0) { 
            throw new Error("Division by zero is not allowed!"); 
        } 
        if (typeof a !== "number" || typeof b !== "number") { 
            throw new TypeError("Both arguments must be numbers!"); 
        } 
ASSIGNMENT – 1 & 2 
        return a / b; 
    } catch (error) { 
        console.log("Error in divideNumbers:", error.message); 
        return null; 
    } 
} 