function solution(n) {
    var answer = 0;
    let index = 1;
    
    while(index <= n / 2) {
        if (n % index === 0) answer += index;
        index++
        
    }
    return answer + n
}