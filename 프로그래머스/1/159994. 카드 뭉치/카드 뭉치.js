// 1. goal 카드 뭉치를 기준으로 카드뭉치1, 카드뭉치2에서 하나씩 비교함
// 2. goal에서 뽑은 단어가 존재하는 쪽을 찾음 -> 그리고 찾은 단어를 goal과 카드뭉치에서 제거함
// 3. 존재하지 않으면 다음 카드뭉치에서 찾음 -> 마찬가지로 찾은 단어 제거
// 4. 두 카드뭉치에도 존재하지 않으면 "No"
// 5. 계속 반복해서 goal 카드뭉치가 빌 때까지 반복함

function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    
    while(goal.length > 0) {
        if (goal[0] === cards1[0]) {
            goal.shift();
            cards1.shift();
        } else if (goal[0] === cards2[0]) {
            goal.shift();
            cards2.shift();
        } else {
            answer = "No";
            break;
        }
    }
    
    return answer;
}