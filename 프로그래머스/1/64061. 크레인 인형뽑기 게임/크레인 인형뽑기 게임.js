function solution(board, moves) {
    
    // 각 열에 대한 스택 생성
    const lanes = [...Array(board[0].length)].map(() => []);
    
    // 역순으로, 각 열의 인형을 lanes에 추가
    // [0, 0, 0, 4, 3] -> [3, 4]
    for (let i = board.length -1; i >= 0; i--) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j]) {
                lanes[j].push(board[i][j])
            }
        }
    }
    
    const bucket = [];
    let answer = 0;
    
    for (const m of moves) {
        if (lanes[m - 1].length > 0) {
            // 해당 열에 인형이 있는 경우
            
            const doll = lanes[m - 1].pop();
            
            // 바구니에 인형이 있고, 가장 위에 있는 인형과 같은 경우
            if (bucket.length > 0 && doll === bucket[bucket.length - 1]) {
                bucket.pop();
                answer += 2;
            } else {
                bucket.push(doll);
            }
        }
    }
    
    return answer;
}