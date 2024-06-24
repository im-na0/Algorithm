// 문제 요구사항:
// participant 배열 중 completion에 포함되지 않는 아이템을 찾아야함

// 자료 구조 선택:
// 데이터의 존재 여부를 파악해야함 -> 해시맵

// 1. participant를 Map객체로 만듬
// 2. 해당 객체에서 completion를 제외함
// 3. 남은 key가 답!

// Map으로 풀기: 실패 (시간 초과)
// function solution(participant, completion) {
//     const map = new Map();
    
//     for (const name of completion) {
//         if (map.has(name)) {
//             map.set(name, map.get(name) + 1);
//         } else {
//             map.set(name, 1);
//         }
//     }
    
//     for (const name of participant) {
//         if (!map.has(name) || map.get(name) === 0) {
//             return name
//         }
//         map.set(name, map.get(name) - 1);
//     }
// }

// 객체로 풀기
function solution(participant, completion) {
    
    const list = participant.reduce((total, cur) => {
       total[cur] ? total[cur]++ : total[cur] = 1;
        return total
    }, {})
    
    for (var name of completion) {
        if (list[name]) {
            list[name]--;
        }
    }
    
    for (var name in list) {
        if (list[name] > 0) {
            return name
        }
    }
}