const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input.map((n) => parseInt(n));

if (a < b) {
  return console.log("<");
} else if (a > b) {
  return console.log(">");
} else {
  return console.log("==");
}
