let min = 10;
let max = 20;

let randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomnumber)

//Returns a random decimal number between 0 (inclusive) and 1 (exclusive).
//(max - min + 1)
// This defines the range size.

// Why +1? Because we want to include max in the result. Without +1, the maximum number would never be returned.

// For example, for a range from 1 to 6 (like a dice roll):
// max = 6, min = 1
// max - min = 5 → numbers 0–4 after multiplication
// max - min + 1 = 6 → now it covers 0–5.999... when multiplied.

// + min
// Shifts the range up to start at min.

// Example:

// Before: 0 to 5.999

// After: 1 to 6.999

// Math.floor(...)
// Rounds the decimal down to the nearest whole number.

// This makes sure we get integers from min to max.

