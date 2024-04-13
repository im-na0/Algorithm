function solution(s) {
    var last = {}; // key: 문자, value: 가장 최근 인덱스
    var answer = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] in last) {
            // 이미 등장한 문자라면 가장 가까운 위치의 인덱스 차이를 계산
            answer.push(i - last[s[i]]);
        } else {
            // 처음 등장한 문자는 -1 결과에 추가
            answer.push(-1);
        }
        // 문자 위치 업데이트
        last[s[i]] = i; // {a: 2}
    }
    return answer;
}
