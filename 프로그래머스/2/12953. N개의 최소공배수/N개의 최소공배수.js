function solution(arr) {
    let answer = arr[0];
    
    for(let i=1; i<arr.length; i++){
        answer = lcm(answer, arr[i])
    }
    
    return answer;
}

function gcd(a,b){
    let tmp = a % b;
    
    if(tmp === 0) return b;
    
    return gcd(b, tmp);
}

function lcm(a,b){
    return (a*b) / gcd(a,b);
}