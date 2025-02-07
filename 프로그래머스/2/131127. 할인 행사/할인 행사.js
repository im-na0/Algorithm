// 위시리스트와 할인 품목을 객체로 만들어 동일한지 비교

function isShallowEqual(obj1, obj2) {
    const objkeys1 = Object.keys(obj1);
    const objkeys2 = Object.keys(obj2);
    
    if (objkeys1.length !== objkeys2.length) return false;
    
    for (const key of objkeys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        
        if (val1 !== val2) {
            return false;
        }
    }
    
    return true;
}

function solution(want, number, discount) {
    // want 배열 -> 객체로 변환
    const wantObj = {};
    for (let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }
    
    let answer = 0;
    
    // 특정일 i일에 회원가입 시 할인 품목 체크
    for (let i = 0; i < discount.length - 9; i++) {
        const discount10d = {};
        
        // i일 회원가입 시 할인 품목 담기
        for (let j = i; j < i + 10; j++) {
            if (wantObj[discount[j]]) {
                discount10d[discount[j]] = (discount10d[discount[j]] || 0) + 1;
            }
        }
        
        if (isShallowEqual(discount10d, wantObj)) {
            answer += 1;
        }
    }
    
    return answer;
}