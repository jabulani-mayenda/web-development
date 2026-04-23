let grade = prompt("Enter letter grade (A, B, C, D, F):").toUpperCase(); 
let message; 
 
switch(grade) { 
    case "A": 
        message = "Outstanding!"; 
        break; 
    case "B": 
    case "C": 
        message = "Good job!"; 
        break; 
    case "D": 
        message = "You passed."; 
ASSIGNMENT – 1 & 2 
        break; 
    case "F": 
        message = "Better luck next time."; 
        break; 
    default: 
        message = "Invalid grade."; 
} 
 
console.log(message); 