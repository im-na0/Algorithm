const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));

function stackSequence(n, sequence) {
  const stack = [];
  const result = [];
  let current = 1;

  for (let i = 0; i < n; i++) {
    const num = sequence[i];

    // 현재 숫자(current)가 목표 숫자(num)보다 작으면 push
    while (current <= num) {
      stack.push(current++);
      result.push("+");
    }

    // 현재 스택의 top이 num과 같다면 pop
    if (stack[stack.length - 1] === num) {
      stack.pop();
      result.push("-");
    } else {
      // num보다 큰 값이 스택에 존재한 경우
      console.log("NO");
      return;
    }
  }

  console.log(result.join("\n"));
}

stackSequence(n, input);
