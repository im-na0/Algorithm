function solution(left, right) {
    var answer = 0;
    
    for (let i=left; i <= right; i++){
        let count = 0;
        let index = 1;
        
        
        while(index <= i) {
            if (i % index === 0) count++
            index++
        }
        
        if (count % 2 === 0) {
            answer += i
        } else {
          answer -= i  
        }
    }
    
    return answer
}