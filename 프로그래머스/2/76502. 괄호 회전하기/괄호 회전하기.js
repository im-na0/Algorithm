function solution(s) {
  let count = 0;
  const pairs = { ")": "(", "]": "[", "}": "{" };

  for (let i = 0; i < s.length; i++) {
    const str = s.slice(i) + s.slice(0, i);

    const stack = [];
    let isValid = true;
    for (const c of str) {
      if (c === "(" || c === "[" || c === "{") {
        stack.push(c);
      } else {
        if (stack.length === 0 || stack.pop() !== pairs[c]) {
          isValid = false;
          break;
        }
      }
    }

    if (isValid && stack.length === 0) {
      count++;
    }
  }

  return count;
}