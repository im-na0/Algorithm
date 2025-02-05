function solution(s)
{
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        // 스택이 비어있는지 검사
        if (stack.length === 0) {
            stack.push(s[i]);
        } else {
            // 현재값과 top 비교
            if (stack[stack.length -1] === s[i]) {
                stack.pop()
            } else {
                stack.push(s[i])
            }
        }
    };
    
    return stack.length > 0 ? 0 : 1
}