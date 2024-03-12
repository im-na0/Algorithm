let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let list = [];
let max = 0;
let index = 0;


for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(" ");
  list[i] = arr.reduce((acc, cur) => acc + Number(cur), 0);
}

for (let i = 0; i < list.length; i++) {
  if (list[i] > max) {
    max = list[i];
    index = i + 1;
  }
}

console.log(index + " " + max);