// Here in this code we are gonna discuss about Spread in JavaScript
// Spread is used to split up array elements or object properties
// Spread is used to copy array or object
// Spread is used to combine arrays or objects into new ones
// Simple example of Spread
const numbers = [1, 2, 3];
const newNumbers = [numbers[0],numbers[1],numbers[2], 100];
console.log(newNumbers); // [1, 2, 3, 4]
// Now we will be using spread operator instead of above code:
const NumbersBySpread=[ ...numbers, 100];
console.log(NumbersBySpread)