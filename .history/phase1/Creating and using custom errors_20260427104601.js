class ValidationError extends Error { 
    constructor(message, field) { 
        super(message); 
        this.name = "ValidationError"; 
        this.field = field; 
    } 
} 
 
class AgeError extends ValidationError { 
    constructor(message, age) { 
        super(message, "age"); 
ASSIGNMENT – 1 & 2 
        this.age = age; 
    } 
} 
 
function validateUser(name, age) { 
    try { 
        if (!name || name.trim() === "") { 
            throw new ValidationError("Name cannot be empty", "name"); 
        } 
         
        if (typeof age !== "number" || isNaN(age)) { 
            throw new ValidationError("Age must be a number", "age"); 
        } 
         
        if (age < 0) { 
            throw new AgeError("Age cannot be negative", age); 
        } 
         
        if (age < 18) { 
            throw new AgeError("User must be 18 or older", age); 
        } 
         
        console.log(`User ${name} (${age}) is valid.`); 
        return true; 
         
ASSIGNMENT – 1 & 2 
    } catch (error) { 
        if (error instanceof AgeError) { 
            console.log(`Age Error (${error.age}): ${error.message}`); 
        } else if (error instanceof ValidationError) { 
            console.log(`Validation Error (${error.field}): ${error.message}`); 
        } else { 
            console.log("Unknown Error:", error.message); 
        } 
        return false; 
    } 
} 
 
// Test the validation 
console.log("\nTesting User Validation:"); 
validateUser("John Doe", 25);     // Valid 
validateUser("", 25);             // Name error 
validateUser("Jane", -5);         // Age error 
validateUser("Bob", 15);          // Age error 
validateUser("Alice", "twenty");  // Type error 