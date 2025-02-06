// 1. goal의 front와 cards1 or cards2의 front 값 비교
// 1-1. 사용할 수 있는 카드가 O -> 해당 큐와 goal에서 각각 pop
// 1-2. 사용할 수 있는 카드가 X -> 아무 동작 X
// 1-3. cards1, cards2 중 빈 곳은 체크하지 않음

class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    constructor(array) {
        this.items = array;
        this.rear = array.length;
    }
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    
    pop() {
        return this.items[this.front++];
    }
    
    first() {
        return this.items[this.front];
    }
    
    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(cards1, cards2, goal) {
    cards1 = new Queue(cards1);
    cards2 = new Queue(cards2);
    goal = new Queue(goal);
    
    while (!goal.isEmpty()) {
        if (!cards1.isEmpty() && cards1.first() === goal.first()) {
            cards1.pop();
            goal.pop();
        } else if (!cards2.isEmpty() && cards2.first() === goal.first()) {
            cards2.pop();
            goal.pop();
        } else {
            break;
        }
    }
    
    return goal.isEmpty() ? "Yes" : "No";
}