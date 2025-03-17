const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));

const stack = [];
for (const n of input) {
  if (n === 0) {
    stack.pop();
  } else {
    stack.push(n);
  }
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
