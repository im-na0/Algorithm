function solution(answers) {
    var answer = [];
    
    let pattern1 = [1, 2, 3, 4, 5];
    let score1 = 0;
    
    for(let i = 0; i < answers.length; i++) {
        if (answers[i] === pattern1[i % pattern1.length]) {
            score1++;
        }
    }
    
    let pattern2 = []
    let sub1_pattern = [1, 3, 4, 5];
    let score2 = 0;
    
    
    for(let i = 0; i < answers.length; i++) {
        if (i % 2 === 0) {
            pattern2.push(2);
        } else {
            pattern2.push(sub1_pattern[Math.floor((i / 2) % sub1_pattern.length)])
        }
        
        if (answers[i] === pattern2[i % pattern2.length]) {
            score2++;
        }
    } 
    
    let pattern3 = [];
    let sub_pattern2 = [3, 1, 2, 4, 5]
    let score3 = 0;
    
    for(let i = 0; i < answers.length; i++) {
        let index = Math.floor(i / 2) % sub_pattern2.length;
        pattern3.push(sub_pattern2[index]);
    }
    
    for(let i = 0; i < answers.length; i ++) {
        if (answers[i] === pattern3[i]) {
            score3++
        }
    }
    
    
    let maxScore = Math.max(score1, score2, score3);
    
    if (score1 === maxScore) answer.push(1);
    if (score2 === maxScore) answer.push(2);
    if (score3 === maxScore) answer.push(3);
    
    return answer;
}