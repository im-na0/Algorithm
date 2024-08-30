const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const year = Number(input);
// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
if (year % 4 === 0 && year % 100 !== 0) {
  return console.log(1);
} else if (year % 400 === 0) {
  return console.log(1);
} else {
  return console.log(0);
}
