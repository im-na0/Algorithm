function solution(s) {
    var answer = '';    
    answer = s.split(" ")
    
    var max = answer[0];
    var min = answer[0];
    
    for(let i = 0; i < answer.length; i++) {
        max = Math.max(max, answer[i])
        min = Math.min(min, answer[i])
    }
    
    return `${min} ${max}`
}