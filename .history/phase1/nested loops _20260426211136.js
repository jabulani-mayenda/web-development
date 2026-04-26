// Program 15: Nested loops for patterns 
console.log("Pattern 1: Right Triangle"); 
for (let i = 1; i <= 5; i++) { 
let row = ""; 
for (let j = 1; j <= i; j++) { 
row += "* "; 
} 
console.log(row); 
} 
console.log("\nPattern 2: Multiplication Grid (1-5)"); 
for (let i = 1; i <= 5; i++) { 
let row = ""; 
for (let j = 1; j <= 5; j++) { 
row += (i * j).toString().padStart(3, " "); 
} 
console.log(row); 
} 
console.log("\nPattern 3: Pyramid"); 
let rows = 5; 
ASSIGNMENT – 1 & 2 
for (let i = 1; i <= rows; i++) { 
let spaces = " ".repeat(rows - i); 
let stars = "*".repeat(2 * i - 1); 
console.log(spaces + stars); 
}