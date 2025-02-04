// 행렬의 곱 (M*K) (K*N) = (M*N)

function solution(arr1, arr2) {
    
    // 행/열 개수 구하기
    const r1 = arr1.length;
    const c1 = arr1[0].length;
    const r2 = arr2.length;
    const c2 = arr2[0].length;
    
    // 결과 행렬 초기화 (r1 * c2)
    const result = Array.from({length: r1}, () => Array(c2).fill(0));
    
    // 행렬 곱 연산
    for (let i=0; i < r1; i ++) {
        for (let j=0; j < c2; j++) {
            for (let k=0; k < c1; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j]
            }
        }
    }

    return result;
}