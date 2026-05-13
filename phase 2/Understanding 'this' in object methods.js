 //Understanding 'this' in object methods 
console.log("=".repeat(55)); 
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION"); 
console.log("STUDENT: [benson j mayenda]"); 
console.log("ID: [23311351004]"); 
console.log("PROGRAM: [XX] - [creating objects with literals ]"); 
console.log("EXECUTION DATE: " + new Date().toLocaleString()); 
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase()); 
console.log("VERIFICATION HASH: " + btoa("[23311351004]" + Date.now()).substring(0, 
12)); 
console.log("=".repeat(55)); 
const user = { 
    name: "Alice", 
    age: 28, 
     
    // Regular method - 'this' refers to the object 
    greet() { 
        console.log(`Hello, I'm ${this.name}`); 
    }, 
     
    // Arrow function - 'this' is lexical (from outer scope) 
    greetArrow: () => { 
        console.log(`Hello, I'm ${this.name}`);  // undefined! 
    }, 
     
    // Method that returns a function 
    getGreeter() { 
        return function() { 
            console.log(`Hello, I'm ${this.name}`);  // 'this' will be lost 
        }; 
    }, 
}
    // Method with preserved 'this' 