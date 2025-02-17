// 일수별로 할일 품목에서 10개씩 추출함
// 추출한 할인 품목 리스트와 want 리스트가 일치하는지 비교함

function isEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        
        if (val1 !== val2) {
            return false;
        }
    }
    
    return true;
}

function solution(want, number, discount) {
    const wantObj = {}; // 품목-수량
    
    
    for (let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }
    
    let answer = 0;
    
    for (let i = 0; i < discount.length - 9; i++) {
        const discountObj = {}; // 품목-수량
        
        // i일 회원가입 시 할인 품목 담기
        for (let j = i; j < i + 10; j++) {
            if (wantObj[discount[i]]) {
                discountObj[discount[j]] = (discountObj[discount[j]] || 0) + 1;
            }
        }
        
        if (isEqual(wantObj, discountObj)) {
            answer += 1;
        }
    }
    
    return answer;
}