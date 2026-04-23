/ Program 13: Multiple conditions with switch 
let dayNumber = parseInt(prompt("Enter a day number (1-7):")); 
let dayName; 
switch(dayNumber) { 
    case 1: 
        dayName = "Monday"; 
        break; 
    case 2: 
        dayName = "Tuesday"; 
        break; 
    case 3: 
        dayName = "Wednesday"; 
        break; 
    case 4: 
        dayName = "Thursday"; 
        break; 
    case 5: 
        dayName = "Friday"; 
        break; 
ASSIGNMENT – 1 & 2 
    case 6: 
        dayName = "Saturday"; 
        break; 
    case 7: 
        dayName = "Sunday"; 
        break; 
    default: 
        dayName = "Invalid day number!"; 
} 
console.log(`Day ${dayNumber} is ${dayName}`); 