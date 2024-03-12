let fs = require("fs");
const [H, M] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(" ")
  .map(Number);

let hours, minutes;

if (M >= 45) {
  hours = H;
  minutes = M - 45;
} else {
  hours = H === 0 ? 23 : H - 1;
  minutes = M + 15;
}

console.log(hours + " " + minutes);
