function solution(sizes) {
    var w = 0;
    var h = 0;
    
    for (let i=0; i < sizes.length; i++) {
        let [currentW, currentH] = sizes[i];
        
        // 각 명함의 가로와 세로 길이 중 큰 값을 가로, 작은 값을 세로로 간주
        let maxDim = Math.max(currentW, currentH);
        let minDim = Math.min(currentW, currentH);
        
        // 가로 길이의 최댓값과 세로 길이의 최댓값을 찾기
        if (maxDim > w) w = maxDim;
        if (minDim > h) h = minDim;
    };

    return w * h;
}