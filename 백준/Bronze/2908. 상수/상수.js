const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 문자열 뒤집기
const A = input[0].split("").reverse().join("");
const B = input[1].split("").reverse().join("");

console.log(Math.max(A, B));