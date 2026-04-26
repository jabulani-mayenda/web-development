 Controlling loop flow with break and continue 
 
console.log("Break Example - Stop at 5:"); 
for (let i = 1; i <= 10; i++) { 
    if (i === 5) { 
        console.log("Breaking at i =", i); 
        break;  // Exit loop completely 
ASSIGNMENT – 1 & 2 
    } 
    console.log(i); 
} 
 
console.log("\nContinue Example - Skip multiples of 3:"); 
for (let i = 1; i <= 10; i++) { 
    if (i % 3 === 0) { 
        continue;  // Skip to next iteration 
    } 
    console.log(i); 
} 
 
console.log("\nPrime Number Finder:"); 
let n = 20; 
console.log(`Prime numbers up to ${n}:`); 
 
outerLoop: for (let i = 2; i <= n; i++) { 
    for (let j = 2; j < i; j++) { 
        if (i % j === 0) { 
            continue outerLoop;  // Skip to next i (labeled continue) 
        } 
    } 
    console.log(i); 
}