const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const nums = input.map(Number);

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i] ** 2;
}
console.log(sum % 10);
