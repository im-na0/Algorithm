const fs = require("fs");
const [n, input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const inputArr = input.split("");

let res = 0;
for (let i = 0; i < n; i++) {
  res += Number(inputArr[i]);
}

console.log(res);