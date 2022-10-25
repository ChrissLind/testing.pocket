let dice = 20;

let min = Math.ceil(dice - (dice - 1));
let max = Math.floor(dice);
console.log(`Result: ${Math.floor(Math.random() * (max - min + 1)) + min}`);
