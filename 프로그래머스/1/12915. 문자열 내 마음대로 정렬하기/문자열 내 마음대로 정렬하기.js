
function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] === b[n]) {
            // n번째 문자가 같으면 전체 문자열을 사전순으로 비교
            return a.localeCompare(b);
        } else {
            // n번째 문자가 다르면 그 문자를 기준으로 비교
            return a[n].localeCompare(b[n]);
        }
    })
}