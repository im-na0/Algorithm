const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let H = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);
let D = parseInt(input[1]);

let hours = 0;
let minutes = 0;

hours = Math.floor((H * 60 + M + D) / 60);
minutes = (H * 60 + M + D) % 60;
if (hours >= 24) {
  hours -= 24;
}
console.log(`${hours} ${minutes}`);


