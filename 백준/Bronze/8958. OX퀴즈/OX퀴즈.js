let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];

for (let i = 1; i <= n; i++) {
  let score = 0;
  let acc = 0;
  let str = input[i];

  for (let j = 0; j <= input[i].length; j++) {
    if (str[j] === "O") {
      acc++;
    } else {
      acc = 0;
    }

    score += acc;
  }

  console.log(score);
}