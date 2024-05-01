function solution(numbers) {
    var total = 45;  // 0부터 9까지의 합

    for (var i = 0; i < numbers.length; i++) {
        total -= numbers[i];  // 배열에 있는 숫자들을 하나씩 빼줌
    }
    
    return total;  // 남은 합이 누락된 숫자들의 합
}

function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
