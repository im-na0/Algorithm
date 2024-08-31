const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [a, b, c] = input;

console.log(Number(a) + Number(b) - Number(c));
console.log(a + b - c);
