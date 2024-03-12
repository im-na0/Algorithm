let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString()

const string = "abcdefghijklmnopqrstuvwxyz";
const stringArray = string.split("");
let result = [];

for (let i = 0; i < stringArray.length; i++) {
  if (input.includes(stringArray[i])) {
    result.push(input.indexOf(stringArray[i]));
  } else {
    result.push(-1);
  }
}

console.log(...result);