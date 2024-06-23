// 문제 요구사항:
// N마리의 폰켓몬 중에서 N/2마리를 선택해야함.
// 최대한 많은 종류의 폰켓몬을 선택하는 것이 목표.

// 자료 구조 선택:
// 각 폰켓몬의 종류를 파악해야함 (중복도 카운트) -> 해시맵

// 1. 폰켓몬 종류를 구함
// 2. 최대 선택 가능한 종류: 폰켓몬 종류와 N/2 중 적은 값이 답

function solution(nums) {
    const num = nums.length / 2;
    let map = new Map();
    

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    // table의 크기(서로 다른 폰켓몬의 수)와 num(N/2)을 비교
    if (map.size < num) {
        return map.size;
    } else {
        return num;
    }
}