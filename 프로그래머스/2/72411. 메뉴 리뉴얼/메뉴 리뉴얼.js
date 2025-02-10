function combinations(arr, n) {
  // 재귀 호출의 종료 조건
  if (n === 1) return arr.map((e) => [e]);
  const result = [];

  // fixed는 조합에 포함될 첫 번째 요소로 선택된 요소, 이를 기준으로 나머지 조합을 생성
  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((c) => [fixed, ...c]);
    result.push(...combine);
  });

  return result;
}


function solution(orders, course) {
    const answer = [];
    
    for (const c of course) {
        const menu = [];
        for (const order of orders) {
            const orderArr = order.split("").sort();
            const comb = combinations(orderArr, c);
            menu.push(...comb);
        }
        
        const counter = {};
        for (const m of menu) {
            const key = m.join('');
            counter[key] = (counter[key] || 0) + 1;
        }
        
        const max = Math.max(...Object.values(counter));
        if (max > 1) {
            for (const [key, value] of Object.entries(counter)) {
                if (value === max) {
                    answer.push(key);
                }
            }
        }
    }
    
    return answer.sort();
}