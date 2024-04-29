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

// 💡 더 좋은 풀이
const text = input[0];

const alpha = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

let time = 0;

for (let i = 0; i < text.length; i++) {
  for (let j = 0; j < alpha.length; j++) {
    // 해당 문자가 어떤 다이얼 번호에 속하는지를 찾기 위해 alpha 배열의 각 항목을 확인
    if (alpha[j].indexOf(text[i]) !== -1) {
      // text의 i번째 문자가 alpha[j] 문자열 안에 포함되어 있는지 확인
      time += j + 3; // 실제 다이얼 숫자는 j+2이지만, 0부터 시작하므로 +3
    }
  }
}
console.log(time);

// 반복문에서 어떤걸 변수로 사용할건지가 제일 관건인 것 같다.
// 변수 j가 알파벳 배열의 인덱스를 나타냄을 이해하고, 이를 숫자와 매칭시키는 게 포인트 인듯!
