const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let counter = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") { // 공백을 제외하고 단어 개수를 센다
    counter++;
  }
}

console.log(counter);
