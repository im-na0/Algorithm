const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const isVPS = (str) => {
  const stack = [];

  for (const s of str) {
    if (s === "(") {
      stack.push(s);
    } else {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
};

const result = input.map(isVPS);
console.log(result.join("\n"));
