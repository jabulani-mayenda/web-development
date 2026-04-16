// working with strings
let firstname = "jabulani";
let lastname = "mayenda";
let age = 20;  

// Method 1: Concatenation with +
let fullname1 = firstname + " " + lastname; 
console.log("Concatenation:", fullname1);

// Method 2: Template literals (ES6+) - preferred
let fullname2 = `${firstname} ${lastname} is ${age} years old`;  
console.log("Template literal:", fullname2);

// String methods
let text = "javascript programming";

console.log("Length:", text.length);
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());
console.log("Substring (0-10):", text.substring(0, 10));
console.log("Includes 'script':", text.includes('script')); 