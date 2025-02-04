function solution(N, stages) {
    
    stages.sort((a, b) => a - b);
    
    let fails = [];
    let totalPlayers = stages.length;
    let index = 0;
    
    for (let stage = 1; stage < N + 1; stage++) {
        
        let stuckPlayers = 0;
        //  현재 스테이지에 머물러 있는 사람 수
        while (index < stages.length && stages[index] === stage) {
            stuckPlayers++;
            index++;
        }
        
        // 실패율 구하기
        let failRate = stuckPlayers / totalPlayers;
        
        fails.push([stage, failRate]);
        
        // 전체 도전자 수 - 현재스테이지에 남아있는 도전자 수 반영
        totalPlayers -= stuckPlayers
    }
    
    // 실패율 기준으로 스테이지 내림차순 정렬, 실패율 같으면 오름차순 정렬
    fails.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    
    return fails.map(stage => stage[0]);
}