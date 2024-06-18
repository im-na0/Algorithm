// 입력으로 주어진 판 정보를 가지고 몇 개의 블록이 지워질지 출력하라.

function solution(m, n, board) {
  // 1. board 2차열 배열로 변환
  board = board.map((row) => Array.from(row));

  while (true) {
    // 2. 깨질 블록이 있는지 검색
    const find = [];
    // 현재 y, x가 1,1 이라면 2,2까지 검색을 하기 때문에 경계값을 m과 n에서 1을 빼준다.
    for (let y = 0; y < m - 1; y++) {
      for (let x = 0; x < n - 1; x++) {
        if (
          board[y][x] &&
          board[y][x] === board[y][x + 1] &&
          board[y][x] === board[y + 1][x] &&
          board[y][x] === board[y + 1][x + 1]
        ) {
          find.push([y, x]);
        }
      }
    }

    // 5. 더이상 깨질 블록이 없다면 0의 개수를 세고 출력
    if (!find.length) {
      return board.flat().filter((v) => !v).length;
    }

    // 3. 제거할 블록을 0으로 표시
    find.forEach(([y, x]) => {
      board[y][x] = 0;
      board[y][x + 1] = 0;
      board[y + 1][x] = 0;
      board[y + 1][x + 1] = 0;
    });

    // 4. 블록을 아래로 내리기
    for (let x = 0; x < n; x++) {
      // 현재 열에서 블록을 이동시킬 위치를 추적하는 변수 (밑에서 부터 탐색하기 때문에 m-1)
      let targetRow = m - 1;
      // 현재 열의 각 행을 아래에서 위로 탐색
      for (let y = m - 1; y >= 0; y--) {
        // 블록이 있는 경우
        if (board[y][x] !== 0) {
          // 현재 행과 타겟 행이 다르다면, 빈공간이 있다고 판단
          if (targetRow !== y) {
            // 타겟 행에 현재 블록을 이동시키고, 현재 블록은 0으로 초기화
            board[targetRow][x] = board[y][x];
            board[y][x] = 0;
          }
          // 현재 행과 타켓 행이 같다면 타겟 행을 한 칸 위로 이동시킴
          targetRow--;
        }
      }
    }
    // // 4. 제거할 블록과 윗 블록과 교체
    // // 밑부분이 0이 되면 안되기 때문에 밑에서 부터 탐색한다.
    // for (let y = m - 1; y >= 0; y--) {
    //   for (let x = 0; x < n; x++) {
    //     // x와 윗블록(y-1)을 비교한다.
    //     for (let i = y - 1; i >= 0; i--) {
    //       // x가 0인 경우 탐색을 종료한다.
    //       if (board[y][x]) break;
    //       // x가 0이고 윗블록이 0이 아닌 경우 윗블록과 교체한다.
    //       if (board[i][x]) {
    //         board[y][x] = board[i][x];
    //         board[i][x] = 0;
    //         break;
    //       }
    //     }
    //   }
    // }
  }
}