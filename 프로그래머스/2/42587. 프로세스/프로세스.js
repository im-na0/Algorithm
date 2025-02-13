function solution(priorities, location) {
    let count = 0;
    
    const queue = priorities.map((priority, index) => ({priority, index}));
    
    while (queue.length) {
        const currntProcess = queue.shift();
        const hightPriority = Math.max(...queue.map((process) => process.priority));
        
        if (currntProcess.priority < hightPriority) {
            queue.push(currntProcess);
        } else {
            count++;
            if (currntProcess.index === location) {
                return count;
            }
        }
    }
    return count;
}