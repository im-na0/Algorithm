const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = Array.from(input[1].split(" "), (x) => parseInt(x));

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min + " " + max);