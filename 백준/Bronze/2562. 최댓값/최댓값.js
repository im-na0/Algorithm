let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input.length;
let max = 0;
let index = 0;

for (let i = 0; i < n; i++) {
  let value = Number(input[i]);
  if (value > max) {
    max = value;
    index = i;
  }
}

console.log(max);
console.log(index + 1);