let x = 5;
let y = "5";

// ASSIGNMENT 1 & 2 - Comparison Operators
let z = 10;

console.log("Equal (==):", x == y);           // true (checks value only)
console.log("Strict Equal (===):", x === y);  // false (checks value AND type)
console.log("Not Equal (!=):", x != y);       // false (values are equal)
console.log("Strict Not Equal (!==):", x !== y); // true (different types)
console.log("Greater than:", z > x);          // true (10 > 5)
console.log("Less than:", x < z);             // true (5 < 10)
console.log("Greater or equal:", x >= 5);     // true (5 >= 5)
console.log("Less or equal:", z <= 10);       // true (10 <= 10)

// LOGICAL OPERATORS
let a = true;
let b = false;

console.log("AND (&&):", a && b);  // false
console.log("OR (||):", a || b);   // true
console.log("NOT (!):", !a);       // false