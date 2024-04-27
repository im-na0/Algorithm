const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

for (let i=0; i < input.length; i++) {
    temp = input[i].split(" ");
    console.log(parseInt(temp[0]) + parseInt(temp[1]));
}