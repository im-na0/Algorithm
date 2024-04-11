function solution(price, money, count) {
    var total = 0;
    var result = 0;
    
    for (let i=1; i <= count; i++) {
        total += price * i
    }
    
    if (money - total > 0) {
        result = 0
    } else {
        result = Math.abs(total - money)
    }
    return result;
}