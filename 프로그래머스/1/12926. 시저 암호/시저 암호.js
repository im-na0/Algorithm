function solution(s, n) {
    var answer = '';
    const UpperArray = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
    const LowerArray = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
        } else {
            const Array = s[i] === s[i].toUpperCase() ? UpperArray : LowerArray;
            const index = Array.indexOf(s[i]);
            // 알파벳 길이가 넘어갈 경우 순환되도록 처리
            answer += Array[(index + n) % 26];
        }
    }

    return answer;
}
