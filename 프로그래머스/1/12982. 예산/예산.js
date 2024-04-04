function solution(d, budget) {
    var answer = 0;
    
    d.sort((a, b) => a - b).forEach(e => {
        if (budget >= e) {
            budget -= e;
            answer += 1;
        }
    });
    
    return answer;
}
