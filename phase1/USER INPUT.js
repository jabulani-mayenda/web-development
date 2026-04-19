let userName = prompt("Please enter your name:");
let userAge = prompt("Please enter your age:");
let ageNumber = parseInt(userAge);
let currentYear = 2026;
let birthYear = currentYear - ageNumber;
alert(`Hello ${userName}! You were born around ${birthYear}.`);
console.log(`User: ${userName}, Age: ${ageNumber}, Birth Year: ${birthYear}`);