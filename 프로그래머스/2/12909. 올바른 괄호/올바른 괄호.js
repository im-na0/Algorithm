function solution(s) {
  let openCnt = 0;
  const result = [...s].reduce((sum, curr) => {
    if (curr === "(") {
      openCnt++;
      return sum;
    }
    if (curr === ")" && openCnt > 0) {
      openCnt--;
      return ++sum;
    }
  }, 0);

  return s.length / 2 === result ? true : false;
}