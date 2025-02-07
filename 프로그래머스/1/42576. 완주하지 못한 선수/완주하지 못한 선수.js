// 1. 참가자 이름을 해시 테이블에 추가하되, 키-값은 이름-개수로 설정
// 2. 완주한 선수들의 이름을 해시 테이블에서 찾아 값을 1씩 줄임
// 3. 1번에서 만든 해시를 순회해 값이 0이 아닌 키를 반환


function solution(participant, completion) {
    const obj = {};
    
    for (const p of participant) {
        if (obj[p]) {
            obj[p] += 1;
        } else {
            obj[p] = 1;
        }
    }
    
    for (const c of completion) {
        obj[c] -= 1;
    }
    
    for (const key in obj) {
        if (obj[key] > 0) {
            return key;
        }
    }
}