const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

const sum = A * B * C;
const sumStr = sum.toString();

for (let i = 0; i < 10; i++) {
  console.log(sumStr.split(i).length - 1);
}
