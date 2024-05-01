function solution(s) {
    var answer = true;
    
    if (s.length !== 4 && s.length !== 6) return false;
    for(let i=0; i < s.length; i++){
        if(s[i] < '0' || s[i] > '9') { // 문자열간의 비교는 유니코드 기준으로 한다.
            return false // s[i]가 유니코드 값으로 숫자 범위(48-57) 밖에 있는지를 확인
        }
    }

    return answer;
}