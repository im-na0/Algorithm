const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < n; i++) {
  const [num, str] = input[i].split(" ");

  let res = "";
  for (let j = 0; j < str.length; j++) {
    res += str[j].repeat(num);
  }
  console.log(res);
}
