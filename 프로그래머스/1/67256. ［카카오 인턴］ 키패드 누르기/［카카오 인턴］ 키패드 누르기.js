function solution(numbers, hand) {
    var answer = '';
    
    const keypadPos = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    let rightPos = keypadPos['*'];
    let leftPos = keypadPos['#'];
    
    function getDistance(a, b) {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    }
    
    numbers.forEach(num => {
        if ([1, 4, 7].includes(num)) {
            answer += "L";
            leftPos = keypadPos[num];
        } else if ([3, 6, 9].includes(num)) {
            answer += "R"
            rightPos = keypadPos[num];
        } else {
            let leftDistance = getDistance(leftPos, keypadPos[num]);
            let rightDistance = getDistance(rightPos, keypadPos[num]);
           
            if (leftDistance < rightDistance || (leftDistance === rightDistance && hand === "left")) {
                answer += "L"
                leftPos = keypadPos[num]
            } else if (leftDistance > rightDistance || (leftDistance === rightDistance && hand === "right")) {
                answer += "R"
                rightPos = keypadPos[num]
            }
        }
    })
    
    return answer;
}