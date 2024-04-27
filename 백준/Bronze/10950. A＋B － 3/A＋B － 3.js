const fs = require('fs');
const [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < n; i++) {
  const num = input[i].split(" ").map((n) => parseInt(n));
  console.log(num[0] + num[1]);
}
