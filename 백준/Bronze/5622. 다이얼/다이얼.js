const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

// 숫자 - 알파벳 대치
const alpToNum = {
  ABC: 2,
  DEF: 3,
  GHI: 4,
  JKL: 5,
  MNO: 6,
  PQRS: 7,
  TUV: 8,
  WXYZ: 9,
};

let times = 0;

input.forEach(function (v, i) {
  for (let key in alpToNum) {
    // 객체의 key값을 operator로 사용
    if (key.includes(v)) {
      times += alpToNum[key] + 1;
    }
  }
});

console.log(times);