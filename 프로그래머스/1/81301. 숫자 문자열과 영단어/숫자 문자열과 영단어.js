function solution(s) {
    var numMap = new Map([
        ["zero", "0"], ["one", "1"], ["two", "2"], ["three", "3"], ["four", "4"], 
        ["five", "5"], ["six", "6"], ["seven", "7"], ["eight", "8"], ["nine", "9"]
    ]);
    
    numMap.forEach((value, key) => {
        // 전역 검색을 사용하여 전체 문자열에서 해당 영단어를 숫자로 치환
        s = s.replace(new RegExp(key, "g"), value);
    });

    return parseInt(s);
}

// 예술적인 풀이 💡 (split, join 활용도 최상!!!)
// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for(let i=0; i< numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }

//     return Number(answer);
// }