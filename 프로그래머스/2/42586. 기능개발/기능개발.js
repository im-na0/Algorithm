function solution(progresses, speeds) {
    const answer = [];
    const n = progresses.length;
    
    const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    let count = 0;
    let maxDay = daysLeft[0];
    
    for (let i = 0; i < n; i++) {
        if (daysLeft[i] <= maxDay) {
            count++;
        } else {
            maxDay = daysLeft[i];
            answer.push(count);
            count = 1;
        }
    }
    
    answer.push(count);
    return answer;
}