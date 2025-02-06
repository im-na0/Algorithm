// 1. 각 기능의 배포 예정일을 미리 구함
// 2. 배포 가능일이 첫 번째 작업일 보다 빠른 작업들은 함께 배포
// 3. 첫 번째 작업의 배포 가능일보다 늦은 작업이 나오면, 2단계와 유사하게 해당 작업의 배포일을 기준으로 뒤의 작업 배포


function solution(progresses, speeds) {
    const answer = [];
    const n = progresses.length;
    
    // 각 기능의 배포 예정일 구하기
    const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    let count = 0; // 배포될 작업 수 카운트
    let maxDay = daysLeft[0]; // 가장 늦게 배포될 작업의 가능일
    
    for (let i = 0; i < n; i++) {
        if (daysLeft[i] <= maxDay) {
            count++;
        } else {
            // 배포 예정일이 기준 배포일보다 느리면
            answer.push(count);
            count = 1;
            maxDay = daysLeft[i];
        }
    }
    
    answer.push(count);
    return answer;
}