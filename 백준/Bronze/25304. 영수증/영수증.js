const fs = require("fs");
const [total, n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let sum = 0;

for (let i = 0; i < parseInt(n); i++) {
  const [a, b] = input[i].split(" ");
  sum += a * b;
}

console.log(parseInt(total) === sum ? "Yes" : "No");
