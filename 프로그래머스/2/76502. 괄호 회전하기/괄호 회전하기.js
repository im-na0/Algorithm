function solution(s) {
    const n = s.length;
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        const stack = [];
        let isCorrect = true;
        
        for (let j = 0; j < n; j++) {
            
            // 문자열 회전
            const c = s[(i + j) % n];
            
            if (c === "[" || c === "(" || c === "{") {
                // 열린 괄호 푸시
                stack.push(c)
            } else {
                if (stack.length === 0) {
                    // 여는 괄호가 없는 경우
                    isCorrect = false;
                    break;
                }
                
                // 닫힌 괄호가 스택의 top과 짝이 맞는지 비교
                const top = stack[stack.length - 1];
                if (c === "]" && top === "[") {
                    stack.pop();
                } else if (c === ")" && top === "(") {
                    stack.pop();
                    
                } else if (c === "}" && top === "{") {
                    stack.pop();
                } else {
                    isCorrect = false;
                    break;
                }
            }
        }
        
        if (isCorrect && stack.length === 0) {
            answer += 1;
        }
    }
        
        return answer;
    }
